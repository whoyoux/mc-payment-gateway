import NextAuth, { type DefaultSession } from "next-auth";
import Discord from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { createStripeCustomer } from "./stripe";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Discord],
	adapter: PrismaAdapter(prisma),
	callbacks: {
		session({ session, user }) {
			return {
				...session,
				user: {
					...session.user,
					id: user.id,
				},
			};
		},
	},
	events: {
		async createUser({ user }) {
			await createStripeCustomer(user);
			if (user.email && user.name)
				await sendWelcomeEmail({
					username: user.name,
					email: user.email,
				});
		},
	},
});

import { cache } from "react";
import { sendWelcomeEmail } from "./resend";
export const cachedAuth = cache(async () => {
	return await auth();
});
