import { prisma } from "@/lib/prisma";
import { usernameSchema } from "@/schemas/user.schema";
import { headers } from "next/headers";

export const revalidate = 60;

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ username: string }> },
) {
	//Check if username exists
	const username = (await params).username;
	if (!username) {
		return new Response("Invalid username", { status: 400 });
	}

	// Ensure the request is authenticated with the API secret
	// This is only required in production
	// if (process.env.NODE_ENV === "production") {
	// 	const headersList = await headers();
	// 	const secret = headersList.get("x-secret");
	// 	if (secret !== process.env.API_SECRET) {
	// 		return new Response("Unauthorized", { status: 401 });
	// 	}
	// }

	const headersList = await headers();
	const secret = headersList.get("x-secret");
	if (secret !== process.env.API_SECRET) {
		return new Response("Unauthorized", { status: 401 });
	}

	// Validate if username is valid
	const validated = await usernameSchema.safeParseAsync(username);
	if (!validated.success) {
		return new Response("Invalid username", { status: 400 });
	}

	// Check if the username is whitelisted
	// const isWhitelisted = await prisma.whitelistAccess.findFirst({
	// 	where: {
	// 		user: {
	// 			username,
	// 		},
	// 	},
	// });
	const isWhitelisted = await prisma.user.findFirst({
		where: {
			username,
			boughtAccess: true,
		},
	});

	const response = {
		whitelisted: !!isWhitelisted,
	};

	return new Response(JSON.stringify(response), {
		status: 200,
	});
}
