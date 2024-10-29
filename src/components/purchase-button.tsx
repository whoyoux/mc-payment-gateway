"use client";

import { goToCheckout } from "@/app/actions";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Props = {
	customText?: string;
	className?: string;
};

export function PurchaseButton({ customText, className }: Props) {
	return (
		<Button
			className={cn(className)}
			onClick={async () => {
				try {
					const result = await goToCheckout();
					if (result.status === "error") toast.error(result.message);
				} catch (err) {
					console.error(err);
				}
			}}
		>
			{customText ? customText : "Buy now"}
		</Button>
	);
}
