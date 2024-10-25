import type { User } from "next-auth";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, Star, User as UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserDropdown({ user }: { user: User }) {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="outline" className="rounded-full">
						<Avatar>
							<AvatarImage
								src={user.image ?? ""}
								alt={`User ${user.name} profile image`}
							/>
							<AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<Link href="/dashboard">
						<DropdownMenuItem>
							<UserIcon />
							<span>Dashboard</span>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem>
						<CreditCard />
						<span>Billing</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Star />
						<span>Subscription</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					{/* <form action={logOut} className="w-full"> */}
					<button
						type="submit"
						className="w-full"
						onClick={() => signOut({ redirectTo: "/" })}
					>
						<DropdownMenuItem>
							<LogOut />
							<span>Log out</span>
						</DropdownMenuItem>
					</button>
					{/* </form> */}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
