import { Button } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
				<DeleteModal />
			</CardFooter>
		</Card>
	);
}

function DeleteModal() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="destructive" className="w-full sm:w-auto">
					Remove My Account
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="text-red-500">
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-500">
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction className="bg-red-500 hover:bg-red-600">
						Yes, delete my account permanently
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
