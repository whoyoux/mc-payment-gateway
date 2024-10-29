"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { stripe } from "@/lib/stripe";
import { getBaseUrl } from "@/lib/utils";
import { usernameFormSchema } from "@/schemas/user.schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInViaDiscord() {
	await signIn("discord");
}

export async function logOut() {
	await signOut();
}

export const updateUsernameAction = authActionClient
	.schema(usernameFormSchema)
	.action(async ({ parsedInput, ctx }) => {
		try {
			const updated = await prisma.user.update({
				where: {
					id: ctx.session.user.id,
				},
				data: {
					username: parsedInput.username,
					lastUsernameChange: new Date(),
					usernameChangesCount: {
						increment: 1,
					},
				},
			});

			if (!updated) {
				//TODO: ADD LOGGIN HERE
				return { success: false };
			}

			revalidatePath("/dashboard");

			return { success: true };
		} catch (err) {
			return { success: false };
		}
	});

export const removeAccountAction = authActionClient.action(async ({ ctx }) => {
	try {
		const result = await prisma.$transaction(async (tx) => {
			// Delete all sessions first
			await tx.session.deleteMany({
				where: {
					userId: ctx.session.user.id,
				},
			});

			// Delete all linked accounts
			await tx.account.deleteMany({
				where: {
					userId: ctx.session.user.id,
				},
			});

			// Finally delete the user
			await tx.user.delete({
				where: {
					id: ctx.session.user.id,
				},
			});

			return true;
		});

		if (!result) {
			return { success: false, message: "Failed to delete account" };
		}

		// Sign out the user after successful deletion
	} catch (err) {
		console.error("Error removing account:", err);
		return {
			success: false,
			message: "An error occurred while deleting account",
		};
	}
	await signOut({ redirectTo: "/" });
});

type CheckoutResult =
	| {
			status: "error";
			message: string;
	  }
	| never;

export const goToCheckout = async (): Promise<CheckoutResult> => {
	const session = await auth();
	if (!session || !session.user.id || !session.user.email) {
		return { status: "error", message: "Please sign in." };
	}

	// Check if the user has access
	const access = await prisma.user.findFirst({
		where: {
			id: session.user.id,
			boughtAccess: true,
		},
	});

	if (access) {
		return { status: "error", message: "You already have access" };
	}
	// Redirect to checkout
	const stripeSession = await stripe.checkout.sessions.create({
		success_url: `${getBaseUrl()}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${getBaseUrl()}/`,
		payment_method_types: ["card", "blik", "p24"],
		mode: "payment",
		customer_email: session.user.email,
		line_items: [
			{
				price: process.env.STRIPE_ACCESS_PRICE_ID || "",
				quantity: 1,
			},
		],
	});

	if (!stripeSession.url) {
		return { status: "error", message: "Error creating session" };
	}

	redirect(stripeSession.url);
};
