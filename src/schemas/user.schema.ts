import { z } from "zod";

export const usernameSchema = z
	.string()
	.min(3, "Username must be at least 3 characters long")
	.max(40, "Username cannot exceed 40 characters")
	.regex(
		/^[a-zA-Z0-9_]+$/,
		"Username can only contain letters, numbers, and underscores",
	)
	.refine((value) => !/\s/.test(value), "Username cannot contain spaces");

export const usernameFormSchema = z.object({
	username: usernameSchema,
});

export const getReceiptSchema = z.object({
	paymentId: z.string(),
});
