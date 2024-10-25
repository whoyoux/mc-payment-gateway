import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { z } from "zod";

const schema = z.string().min(3).max(40);

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
	const headersList = await headers();
	const secret = headersList.get("x-secret");
	if (secret !== process.env.API_SECRET) {
		return new Response("Unauthorized", { status: 401 });
	}

	// Validate if username is valid
	const validated = await schema.safeParseAsync(username);
	if (!validated.success) {
		return new Response("Invalid username", { status: 400 });
	}

	// Check if the username is whitelisted
	const isWhitelisted = await prisma.whitelist.findFirst({
		where: {
			nickname: validated.data,
		},
	});

	return new Response(JSON.stringify({ isWhitelisted: !!isWhitelisted }), {
		status: 200,
	});
}
