"use client";

import { goToCheckout } from "@/app/actions";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
	customText?: string;
	className?: string;
};

export function PurchaseButton({ customText, className }: Props) {
	const [isPending, setIsPending] = useState(false);
	return (
		<Button
			className={cn(className)}
			onClick={async () => {
				if (isPending) return;
				setIsPending(true);
				try {
					const result = await goToCheckout();
					if (result.status === "error") toast.error(result.message);
				} catch (err) {
					console.error(err);
				}
				setIsPending(false);
			}}
			disabled={isPending}
		>
			{isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
			{customText ? customText : "Buy now"}
		</Button>
	);
}
