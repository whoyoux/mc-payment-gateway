import SignOutButton from "./signout-button";
// import { signOut } from "@/lib/auth";

// const navItems = [
// 	{
// 		label: "Billing",
// 		href: "/billing",
// 	},
// 	{
// 		label: "Subscription",
// 		href: "/subscription",
// 	},
// ];

export default function DashboardHeader() {
	return (
		<header className="flex px-4 md:px-8 py-6 border-b justify-between items-center sticky top-0 bg-background">
			<h1 className="font-semibold">Dashboard</h1>
			<div className="flex items-center gap-2">
				{/* <nav>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(buttonVariants({ variant: "link" }))}
						>
							{item.label}
						</Link>
					))}
				</nav> */}
				<SignOutButton />
			</div>
		</header>
	);
}
