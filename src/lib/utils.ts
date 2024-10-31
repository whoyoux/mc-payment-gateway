import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getBaseUrl() {
	return process.env.NODE_ENV === "production"
		? "https://www.pureminecraft.me"
		: "http://localhost:3000";
}

export function isDifferenceOneDayOrMore(date1: Date, date2: Date): boolean {
	// Get the absolute difference in milliseconds
	const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

	// Calculate one day in milliseconds (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
	const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

	// Check if the difference is at least one full day
	return differenceInMilliseconds >= oneDayInMilliseconds;
}
