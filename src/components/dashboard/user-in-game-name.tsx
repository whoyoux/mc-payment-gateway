import { Button } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function UserInGameName() {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>My In-Game Name</CardTitle>
					<CardDescription>
						Update your in-game name <br />
						Changing name here will change your whitelist slot on server!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Your current in-game name is: Notch</p>
					<p>
						Updating your in-game name will update your profile in the game
						server.
					</p>
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-2">
					<input
						type="text"
						placeholder="Enter your new in-game name"
						className="border border-gray-300 rounded-md p-2 w-full"
					/>
					<Button>Update my in-game name</Button>
				</CardFooter>
			</Card>
		</>
	);
}
