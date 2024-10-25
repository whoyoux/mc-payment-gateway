import { Button } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function UserDangerZone() {
	return (
		<Card className="border-red-500">
			<CardHeader>
				<CardTitle className="text-red-500">Danger Zone</CardTitle>
				<CardDescription>
					Actions in this section can lead to permanent data loss. Proceed with
					caution.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-500 mb-4">
					Removing your account will permanently delete all your data and cannot
					be undone.
				</p>
			</CardContent>
			<CardFooter>
				<Button variant="destructive" className="w-full sm:w-auto">
					Remove My Account
				</Button>
			</CardFooter>
		</Card>
	);
}
