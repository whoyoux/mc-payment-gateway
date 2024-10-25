import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth();
	if (!session || !session.user) {
		return notFound();
	}
	return (
		<SidebarProvider>
			<AppSidebar user={session.user} />
			<main className="w-full">
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
				</header>

				{children}
			</main>
		</SidebarProvider>
	);
}
