"use client";

import { removeAccountAction } from "@/app/actions";
import { AlertDialogAction } from "../ui/alert-dialog";
import { toast } from "sonner";

export default function RemoveAccountButton() {
	return (
		<AlertDialogAction
			className="bg-red-500 hover:bg-red-600"
			onClick={async () => {
				await removeAccountAction();
			}}
		>
			Yes, delete my account permanently
		</AlertDialogAction>
	);
}
