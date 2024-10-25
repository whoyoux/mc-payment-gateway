// import {
// 	Collapsible,
// 	CollapsibleContent,
// 	CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuGroup,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Separator } from "@/components/ui/separator";
// import {
// 	Sidebar,
// 	SidebarContent,
// 	SidebarFooter,
// 	SidebarGroup,
// 	SidebarGroupContent,
// 	SidebarGroupLabel,
// 	SidebarHeader,
// 	SidebarInset,
// 	SidebarMenu,
// 	SidebarMenuAction,
// 	SidebarMenuButton,
// 	SidebarMenuItem,
// 	SidebarMenuSub,
// 	SidebarMenuSubButton,
// 	SidebarMenuSubItem,
// 	SidebarProvider,
// 	SidebarTrigger,
// } from "@/components/ui/sidebar";

// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import {
// 	BadgeCheck,
// 	Bell,
// 	Calendar,
// 	ChevronsUpDown,
// 	Command,
// 	CreditCard,
// 	Home,
// 	Inbox,
// 	LogOut,
// 	Search,
// 	Settings,
// 	Sparkles,
// } from "lucide-react";
// import type { User } from "next-auth";

// const items = [
// 	{
// 		title: "Home",
// 		url: "#",
// 		icon: Home,
// 	},
// 	{
// 		title: "Inbox",
// 		url: "#",
// 		icon: Inbox,
// 	},
// 	{
// 		title: "Calendar",
// 		url: "#",
// 		icon: Calendar,
// 	},
// 	{
// 		title: "Search",
// 		url: "#",
// 		icon: Search,
// 	},
// 	{
// 		title: "Settings",
// 		url: "#",
// 		icon: Settings,
// 	},
// ];

// export function AppSidebar({ user }: { user: User }) {
// 	return (
// 		<Sidebar>
// 			<SidebarHeader>
// 				<SidebarMenu>
// 					<SidebarMenuItem>
// 						<SidebarMenuButton size="lg" asChild>
// 							<div>
// 								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
// 									<Command className="size-4" />
// 								</div>
// 								<div className="grid flex-1 text-left text-sm leading-tight">
// 									<span className="truncate font-semibold">Acme Inc</span>
// 									<span className="truncate text-xs">Enterprise</span>
// 								</div>
// 							</div>
// 						</SidebarMenuButton>
// 					</SidebarMenuItem>
// 				</SidebarMenu>
// 			</SidebarHeader>
// 			<SidebarContent>
// 				<SidebarGroup>
// 					<SidebarGroupLabel>Application</SidebarGroupLabel>
// 					<SidebarGroupContent>
// 						<SidebarMenu>
// 							{items.map((item) => (
// 								<SidebarMenuItem key={item.title}>
// 									<SidebarMenuButton asChild>
// 										<a href={item.url}>
// 											<item.icon />
// 											<span>{item.title}</span>
// 										</a>
// 									</SidebarMenuButton>
// 								</SidebarMenuItem>
// 							))}
// 						</SidebarMenu>
// 					</SidebarGroupContent>
// 				</SidebarGroup>
// 			</SidebarContent>
// 			<SidebarFooter>
// 				<SidebarMenu>
// 					<SidebarMenuItem>
// 						<DropdownMenu>
// 							<DropdownMenuTrigger asChild>
// 								<SidebarMenuButton
// 									size="lg"
// 									className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
// 								>
// 									<Avatar className="h-8 w-8 rounded-lg">
// 										<AvatarImage
// 											src={user.image ?? ""}
// 											alt={`User ${user.name} profile image`}
// 										/>
// 										<AvatarFallback className="rounded-lg">
// 											{user.name?.slice(0, 2)}
// 										</AvatarFallback>
// 									</Avatar>
// 									<div className="grid flex-1 text-left text-sm leading-tight">
// 										<span className="truncate font-semibold">{user.name}</span>
// 										<span className="truncate text-xs">{user.email}</span>
// 									</div>
// 									<ChevronsUpDown className="ml-auto size-4" />
// 								</SidebarMenuButton>
// 							</DropdownMenuTrigger>
// 							<DropdownMenuContent
// 								className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
// 								side="bottom"
// 								align="end"
// 								sideOffset={4}
// 							>
// 								<DropdownMenuLabel className="p-0 font-normal">
// 									<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
// 										<Avatar className="h-8 w-8 rounded-lg">
// 											<AvatarImage
// 												src={user.image ?? ""}
// 												alt={`User ${user.name} profile image`}
// 											/>
// 											<AvatarFallback className="rounded-lg">CN</AvatarFallback>
// 										</Avatar>
// 										<div className="grid flex-1 text-left text-sm leading-tight">
// 											<span className="truncate font-semibold">
// 												{user.name}
// 											</span>
// 											<span className="truncate text-xs">{user.email}</span>
// 										</div>
// 									</div>
// 								</DropdownMenuLabel>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuGroup>
// 									<DropdownMenuItem>
// 										<Sparkles />
// 										Upgrade to Pro
// 									</DropdownMenuItem>
// 								</DropdownMenuGroup>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuGroup>
// 									<DropdownMenuItem>
// 										<BadgeCheck />
// 										Account
// 									</DropdownMenuItem>
// 									<DropdownMenuItem>
// 										<CreditCard />
// 										Billing
// 									</DropdownMenuItem>
// 									<DropdownMenuItem>
// 										<Bell />
// 										Notifications
// 									</DropdownMenuItem>
// 								</DropdownMenuGroup>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem>
// 									<LogOut />
// 									Log out
// 								</DropdownMenuItem>
// 							</DropdownMenuContent>
// 						</DropdownMenu>
// 					</SidebarMenuItem>
// 				</SidebarMenu>
// 			</SidebarFooter>
// 		</Sidebar>
// 	);
// }
