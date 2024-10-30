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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import {
	CreditCard as CreditCardIcon,
	Printer as PrinterIcon,
} from "lucide-react";

type Props = {
	accessBoughtDate: Date | null;
	paymentId: string | null;
	boughtAccess: boolean;
};

export default function UserBillings({
	accessBoughtDate,
	boughtAccess,
	paymentId,
}: Props) {
	if (!boughtAccess || !paymentId || !accessBoughtDate) {
		return (
			<Card id="billing">
				<CardHeader>
					<CardTitle>Purchase History</CardTitle>
					<CardDescription>Your server access purchase</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-gray-500">
						You haven&apos;t made any purchases yet. Buy server access to see
						your purchase history.
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<>
			<Card id="billing">
				<CardHeader>
					<CardTitle>Purchase History</CardTitle>
					<CardDescription>Your server access purchase</CardDescription>
				</CardHeader>
				<CardContent className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="whitespace-nowrap">Date</TableHead>
								<TableHead className="whitespace-nowrap">Description</TableHead>
								{/* <TableHead className="whitespace-nowrap">
									Payment Method
								</TableHead> */}
								<TableHead className="text-right whitespace-nowrap">
									Amount
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="whitespace-nowrap">
									{new Date(accessBoughtDate || new Date()).toDateString()}
								</TableCell>
								<TableCell>Server Access - Permanent</TableCell>
								{/* <TableCell>
									<span className="flex items-center gap-2">
										TODO: get method what user has used
										<CreditCardIcon className="hidden sm:inline" />
										<span className="whitespace-nowrap">Credit Card</span>
									</span>
								</TableCell> */}
								<TableCell className="text-right whitespace-nowrap">
									5.99 zł
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	);
}
