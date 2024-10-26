import Stripe from "stripe";
import { prisma } from "./prisma";
import type { User } from "next-auth";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
	throw new Error("Missing Stripe secret key");
}

export const stripe = new Stripe(key, {
	apiVersion: "2024-09-30.acacia",
	typescript: true,
});

export async function createStripeCustomer(user: User) {
	if (!user.email || !user.name || !user.id) {
		throw new Error("Missing user details");
	}

	try {
		const customer = await stripe.customers.create({
			email: user.email,
			name: user.name,
			metadata: {
				userId: user.id,
			},
		});

		await prisma.user.update({
			where: { id: user.id },
			data: {
				stripeCustomerId: customer.id,
			},
		});
		return customer;
	} catch (err) {
		console.error(err);
		throw new Error("[SERVER ERROR] Failed to create Stripe customer.");
	}
}
