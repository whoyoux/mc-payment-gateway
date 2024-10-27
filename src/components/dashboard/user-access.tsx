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
	hasAccess: boolean;
};

export default function UserAccess({ hasAccess }: Props) {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-4">
						Server Access{" "}
						{hasAccess && (
							<Badge className="bg-green-500 hover:bg-green-600">ACTIVE</Badge>
						)}
					</CardTitle>
					<CardDescription>
						{hasAccess
							? "You have permanent access to our server"
							: "Purchase access to join our server"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{hasAccess ? (
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Status</TableCell>
									<TableCell className="text-right">Active</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Access Type</TableCell>
									<TableCell className="text-right">Permanent</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Price Paid</TableCell>
									<TableCell className="text-right">5.99 zł</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Bought Date</TableCell>
									<TableCell className="text-right">March 15, 2024</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					) : (
						<p>
							You don&apos;t have access to our server yet. Purchase a permanent
							spot to join our community!
						</p>
					)}
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-2">
					{!hasAccess && (
						<>
							<p className="text-sm text-gray-500 mb-2">
								One-time payment for permanent access to our Minecraft server.
							</p>
							<Button variant="default">Purchase Access (5.99 zł)</Button>
						</>
					)}
				</CardFooter>
			</Card>
		</>
	);
}
