"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignOutButton() {
	return <Button onClick={() => signOut({ redirectTo: "/" })}>Sign out</Button>;
}
