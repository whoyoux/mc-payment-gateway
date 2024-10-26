import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth";

const actionClient = createSafeActionClient();

export const authActionClient = actionClient
	// Define authorization middleware.
	.use(async ({ next }) => {
		const session = await auth();

		if (!session || !session.user.id) {
			throw new Error("Session not found!");
		}

		// Return the next middleware with `userId` value in the context
		return next({ ctx: { session } });
	});
