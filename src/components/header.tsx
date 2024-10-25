"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./sign-in-button";
import { DesktopNav, MobileNav } from "./nav";
import UserDropdown from "./user-dropdown";

export function Header() {
	const session = useSession();
	return (
		<header className="flex px-4 md:px-8 py-6 border-b justify-between items-center sticky top-0 bg-background">
			<h1 className="font-semibold">McServer</h1>
			<div className="flex items-center gap-4">
				<DesktopNav className="hidden md:flex" />
				{session.status === "authenticated" ? (
					<UserDropdown user={session.data.user} />
				) : (
					<SignInButton />
				)}
				<MobileNav className="flex md:hidden" />
			</div>
		</header>
	);
}
