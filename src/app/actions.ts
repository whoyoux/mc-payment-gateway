"use server";

import { signIn, signOut } from "@/lib/auth";

export async function signInViaDiscord() {
	await signIn("discord");
}

export async function logOut() {
	await signOut();
}
