"use client";

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
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usernameFormSchema } from "@/schemas/user.schema";
import type { z } from "zod";
import { toast } from "sonner";
import { updateUsernameAction } from "@/app/actions";

type Props = {
	username: string | null;
};

export default function UserInGameName({ username }: Props) {
	const form = useForm<z.infer<typeof usernameFormSchema>>({
		resolver: zodResolver(usernameFormSchema),
		defaultValues: {
			username: username || "",
		},
	});

	async function onSubmit(values: z.infer<typeof usernameFormSchema>) {
		const result = await updateUsernameAction(values);

		if (!result?.data?.success) {
			toast.error("Failed to update username!");
			return;
		}
		toast.success("Username updated successfully!");
	}
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>My In-Game Name</CardTitle>
					<CardDescription>
						{/* Update your in-game name <br />
						Changing name here will change your whitelist slot on server! */}
						{username ? (
							<>
								Update your in-game name <br />
								Changing name here will change your whitelist slot on server!
							</>
						) : (
							<>You don&apos;t have a username yet! </>
						)}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{username ? (
						<p className="text-muted-foreground">
							Your current in-game name is:{" "}
							<span className="font-semibold text-primary">{username}</span>
						</p>
					) : (
						<Alert variant="destructive">
							<CircleAlert className="h-4 w-4" />
							<AlertTitle>Warning!</AlertTitle>
							<AlertDescription>
								You haven&apos;t set your in-game name yet. Please set it before
								buying a subscription!
							</AlertDescription>
						</Alert>
					)}
					{/* <p>
						Updating your in-game name will update your profile in the game
						server.
					</p> */}
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-2">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full space-y-4"
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your new in-game name"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This has to be your Minecraft nickname.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* No need to change when username in database is equals to username in field */}
							<Button disabled={username === form.getValues().username}>
								Update my in-game name
							</Button>
						</form>
					</Form>
				</CardFooter>
			</Card>
		</>
	);
}
