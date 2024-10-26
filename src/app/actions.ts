"use server";

import { signIn, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { usernameFormSchema } from "@/schemas/user.schema";
import { revalidatePath } from "next/cache";

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
