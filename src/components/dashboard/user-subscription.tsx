import { Button } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function UserSubscription() {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-4">
						My Subscription{" "}
						<Badge className="bg-green-500 hover:bg-green-600">ACTIVE</Badge>
					</CardTitle>
					<CardDescription>Manage your subscription</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Your current subscription: Pro Plan</p>
					<p>Next billing date: June 1, 2023</p>
					<p>Monthly cost: $19.99</p>
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-2">
					<p className="text-sm text-gray-500 mb-2">
						Canceling your subscription will end your access to premium features
						at the end of your current billing cycle.
					</p>
					<Button variant="destructive">Cancel my subscription</Button>
				</CardFooter>
			</Card>
		</>
	);
}
