import type Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "xd";

export async function POST(req: Request) {
	const body = await req.text();
	const sig = (await headers()).get("stripe-signature");

	let event: Stripe.Event;

	if (!sig) {
		return new Response("Webhook signature/secret missing", { status: 400 });
	}

	// Verify webhook signature
	try {
		event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
	} catch (err) {
		return new Response(`Webhook Error: ${err}`, { status: 400 });
	}

	// Handle the event
	switch (event.type) {
		case "checkout.session.completed": {
			const session = event.data.object as Stripe.Checkout.Session;

			if (!session) {
				return new Response("Session not found", { status: 400 });
			}

			const customerEmail = session.customer_details?.email;

			if (!customerEmail) {
				return new Response("Customer email not found", { status: 400 });
			}

			try {
				//TODO: Send an email to the customer
				// await prisma.user.update({
				// 	where: {
				// 		email: customerEmail,
				// 	},
				// 	data: {
				// 		whitelist: {
				// 			create: {},
				// 		},
				// 		hasBoughtAccess: true,
				// 	},
				// });

				const user = await prisma.user.findUnique({
					where: {
						email: customerEmail,
					},
				});

				if (!user) {
					return new Response("User not found", { status: 404 });
				}

				await prisma.user.update({
					where: {
						id: user.id,
					},
					data: {
						hasBoughtAccess: true,
						whitelist: {
							create: {},
						},
					},
				});
			} catch (err) {
				console.error(err);
				return new Response(`Error updating user: ${err}`, { status: 500 });
			}

			console.log(`${customerEmail} has bought an access!`);

			break;
		}

		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	return new Response("Webhook received", { status: 200 });
}
