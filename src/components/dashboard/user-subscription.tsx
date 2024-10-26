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

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Props = {
	hasSubscription: boolean;
	subscriptionDetails?: {
		plan: string;
		nextBillingDate: string;
		monthlyCost: number;
	};
};

export default function UserSubscription({
	hasSubscription,
	subscriptionDetails,
}: Props) {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-4">
						My Subscription{" "}
						{hasSubscription && (
							<Badge className="bg-green-500 hover:bg-green-600">ACTIVE</Badge>
						)}
					</CardTitle>
					<CardDescription>
						{hasSubscription
							? "Manage your subscription"
							: "Subscribe to access premium features"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{hasSubscription ? (
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Current Plan</TableCell>
									<TableCell className="text-right">
										{subscriptionDetails?.plan}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										Next Billing Date
									</TableCell>
									<TableCell className="text-right">
										{subscriptionDetails?.nextBillingDate}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Monthly Cost</TableCell>
									<TableCell className="text-right">
										${subscriptionDetails?.monthlyCost.toFixed(2)}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					) : (
						<p>
							You don&apos;t have an active subscription. Subscribe now to
							access our server!
						</p>
					)}
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-2">
					{hasSubscription ? (
						<>
							<p className="text-sm text-gray-500 mb-2">
								Canceling your subscription will end your access to premium
								features at the end of your current billing cycle.
							</p>
							<Button variant="destructive">Cancel my subscription</Button>
						</>
					) : (
						<Button variant="default">Subscribe Now</Button>
					)}
				</CardFooter>
			</Card>
		</>
	);
}
