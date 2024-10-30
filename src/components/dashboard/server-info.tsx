import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SERVER_IP, SERVER_REGION, SERVER_VERSION } from "@/lib/config";

export default function ServerInfo() {
	// TODO: Get the server status and player count
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-4">
					Server Information
					<Badge className="bg-green-500 hover:bg-green-600">ONLINE</Badge>
				</CardTitle>
				<CardDescription>
					Current server status and connection details
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">Server IP</TableCell>
							<TableCell className="text-right">{SERVER_IP}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Version</TableCell>
							<TableCell className="text-right">{SERVER_VERSION}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Players Online</TableCell>
							<TableCell className="text-right">12/50</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Server Location</TableCell>
							<TableCell className="text-right">{SERVER_REGION}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Server Status</TableCell>
							<TableCell className="text-right text-green-600">
								Online
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
