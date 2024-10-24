import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
	return (
		<header className="flex px-4 py-6 border-b justify-between items-center">
			<h1 className="font-semibold">McServer</h1>
			<div className="flex items-center gap-4">
				<DesktopNav className="hidden md:flex" />
				<Button>Sign In</Button>
				<MobileNav className="flex md:hidden" />
			</div>
		</header>
	);
}

function DesktopNav({ className }: { className?: string }) {
	return (
		<>
			<nav className={cn("flex items-center gap-2", className)}>
				<Button variant="link">Features</Button>
				<Button variant="link">Pricing</Button>
				<Button variant="link">FAQ</Button>
			</nav>
		</>
	);
}

function MobileNav({ className }: { className?: string }) {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className={className}>
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>McServer</SheetTitle>
						{/* <SheetDescription>tesdtwehjfgwsety</SheetDescription> */}
					</SheetHeader>
					<nav className="flex flex-col gap-2 mt-4">
						<Button variant="link">Features</Button>
						<Button variant="link">Pricing</Button>
						<Button variant="link">FAQ</Button>
					</nav>
				</SheetContent>
			</Sheet>
		</>
	);
}
