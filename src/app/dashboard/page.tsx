import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

import DashboardHeader from "@/components/dashboard/dashboard-header";

import { Footer } from "@/components/footer";
import UserBillings from "@/components/dashboard/user-billings";
import UserSubscription from "@/components/dashboard/user-subscription";
import UserInGameName from "@/components/dashboard/user-in-game-name";
import UserDangerZone from "@/components/dashboard/user-dangerzone";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
	const session = await auth();
	if (!session || !session.user) {
		return notFound();
	}

	const userName = await prisma.user.findUnique({
		where: {
			id: session.user.id,
		},
		select: {
			username: true,
		},
	});

	return (
		<>
			<div className="bg-gray-100 w-full min-h-[100dvh] pb-10">
				<DashboardHeader />
				<main className="pt-4 px-4 flex flex-col max-w-screen-lg mx-auto gap-4">
					<UserInGameName
						username={
							typeof userName?.username !== "string" ? null : userName.username
						}
					/>
					<UserSubscription />
					<UserBillings />
					<UserDangerZone />
				</main>
			</div>
			<Footer />
		</>
	);
}
