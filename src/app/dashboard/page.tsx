import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

import DashboardHeader from "@/components/dashboard/dashboard-header";

import { Footer } from "@/components/footer";
import UserBillings from "@/components/dashboard/user-billings";
import UserSubscription from "@/components/dashboard/user-subscription";
import UserInGameName from "@/components/dashboard/user-in-game-name";
import UserDangerZone from "@/components/dashboard/user-dangerzone";
import { prisma } from "@/lib/prisma";

const getUsername = async (id: string) => {
	const result = await prisma.user.findUnique({
		where: { id },
		select: { username: true },
	});
	return result?.username;
};

const getSubscription = async (id: string) => {
	// const result = await prisma.subscription.findFirst({
	// 	where: { userId: id },
	// });
	// return result;
	return false;
};

export default async function DashboardPage() {
	const timeStart = new Date();

	const session = await auth();
	if (!session || !session.user) {
		return notFound();
	}

	const [username, subscription] = await Promise.all([
		getUsername(session.user.id),
		getSubscription(session.user.id),
	]);

	console.log(
		`Dashboard render time: ${new Date().getTime() - timeStart.getTime()}ms`,
	);

	return (
		<>
			<div className="bg-gray-100 w-full min-h-[100dvh] pb-10">
				<DashboardHeader />
				<main className="pt-4 px-4 flex flex-col max-w-screen-lg mx-auto gap-4">
					<UserInGameName username={username ?? null} />
					<UserSubscription />
					<UserBillings />
					<UserDangerZone />
				</main>
			</div>
			<Footer />
		</>
	);
}
