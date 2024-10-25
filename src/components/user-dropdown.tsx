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
import { logOut } from "@/app/actions";

export default function UserDropdown({ user }: { user: User }) {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar>
						<AvatarImage src={user.image ?? ""} />
						<AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<UserIcon />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard />
						<span>Billing</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Star />
						<span>Subscription</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<form action={logOut} className="w-full">
						<button type="submit" className="w-full">
							<DropdownMenuItem>
								<LogOut />
								<span>Log out</span>
							</DropdownMenuItem>
						</button>
					</form>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
