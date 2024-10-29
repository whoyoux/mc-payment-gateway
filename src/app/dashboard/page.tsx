import { cachedAuth } from "@/lib/auth";
import { notFound } from "next/navigation";

import DashboardHeader from "@/components/dashboard/dashboard-header";

import { Footer } from "@/components/footer";
import UserBillings from "@/components/dashboard/user-billings";
import UserInGameName from "@/components/dashboard/user-in-game-name";
import UserDangerZone from "@/components/dashboard/user-dangerzone";
import { prisma } from "@/lib/prisma";
import UserAccess from "@/components/dashboard/user-access";

// const getUsername = async (id: string) => {
// 	const result = await prisma.user.findUnique({
// 		where: { id },
// 		select: { username: true },
// 	});
// 	return result?.username;
// };

// const getUserAccess = async (id: string) => {
// 	const result = await prisma.whitelistAccess.findFirst({
// 		where: {
// 			userId: id,
// 		},
// 	});

// 	return result;
// };

const getUserData = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: { id },
		select: {
			username: true,
			boughtAccess: true,
			accessBoughtDate: true,
		},
	});
	return user;
};

export default async function DashboardPage() {
	const session = await cachedAuth();
	if (!session || !session.user) {
		return notFound();
	}

	// const [username, access] = await Promise.all([
	// 	getUsername(session.user.id),
	// 	getUserAccess(session.user.id),
	// ]);

	const userData = await getUserData(session.user.id);
	const boughtAccess = Boolean(userData?.boughtAccess);
	const accessBoughtDate = userData?.accessBoughtDate || null;
	const username = userData?.username;

	return (
		<>
			<div className="bg-gray-100 w-full min-h-[100dvh] pb-10">
				<DashboardHeader />
				<main className="pt-4 px-4 flex flex-col max-w-screen-lg mx-auto gap-4">
					<UserInGameName username={username ?? null} />
					<UserAccess
						boughtAccess={boughtAccess}
						accessBoughtDate={accessBoughtDate}
					/>
					<UserBillings
						boughtAccess={boughtAccess}
						accessBoughtDate={accessBoughtDate}
					/>
					<UserDangerZone />
				</main>
			</div>
			<Footer />
		</>
	);
}
