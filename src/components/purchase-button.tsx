"use client";

import { goToCheckout } from "@/app/actions";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function PurchaseButton() {
	return (
		<Button
			className="w-full"
			onClick={async () => {
				try {
					const result = await goToCheckout();
					if (result.status === "error") toast.error(result.message);
				} catch (err) {
					console.error(err);
				}
			}}
		>
			Buy now
		</Button>
	);
}
