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

export default function UserBillings() {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Billing History</CardTitle>
					<CardDescription>Your recent billing transactions</CardDescription>
				</CardHeader>
				<CardContent className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="whitespace-nowrap">Date</TableHead>
								<TableHead className="whitespace-nowrap">Description</TableHead>
								<TableHead className="whitespace-nowrap">
									Payment Method
								</TableHead>
								<TableHead className="text-right whitespace-nowrap">
									Amount
								</TableHead>
								<TableHead className="text-right whitespace-nowrap">
									Action
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{[...Array(10)].map((_, index) => {
								const date = new Date();
								date.setMonth(date.getMonth() - index);
								return (
									// biome-ignore lint/suspicious/noArrayIndexKey: Will be changed in future
									<TableRow key={index}>
										<TableCell className="whitespace-nowrap">
											{date.toLocaleDateString()}
										</TableCell>
										<TableCell>Pro Plan Subscription</TableCell>
										<TableCell>
											<span className="flex items-center gap-2">
												<CreditCardIcon className="hidden sm:inline" />
												<span className="whitespace-nowrap">Credit Card</span>
											</span>
										</TableCell>
										<TableCell className="text-right whitespace-nowrap">
											$19.99
										</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="whitespace-nowrap"
												// onClick={() => {
												// 	// Add logic to print invoice
												// 	console.log(
												// 		`Print invoice for ${date.toLocaleDateString()}`,
												// 	);
												// }}
											>
												<PrinterIcon className="w-4 h-4 mr-2" />
												Print Invoice
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					<Button variant="default" className="w-full sm:w-auto">
						Print All Invoices
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
