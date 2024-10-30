import "server-only";

import { Resend } from "resend";

if (!process.env.RESEND_SECRET) throw new Error("RESEND_SECRET is not defined");

import { WelcomeEmailTemplate } from "@/email-templates/welcome-email-template";
import { AccessEmailTemplate } from "@/email-templates/access-email-template";

const resend = new Resend(process.env.RESEND_SECRET);

export async function sendWelcomeEmail({
	email,
	username,
}: { email: string; username: string }) {
	try {
		await resend.emails.send({
			from: "PureMinecraft <noreply@pureminecraft.me>",
			to: [email],
			subject: "Welcome to Our Minecraft Server!",
			react: WelcomeEmailTemplate({
				email,
				username,
			}),
		});
	} catch (err) {
		console.error(err);
	}
}

export async function sendAccessEmail({
	email,
	username,
}: { email: string; username: string }) {
	try {
		await resend.emails.send({
			from: "PureMinecraft <noreply@pureminecraft.me>",
			to: [email],
			subject: "Thank You For Your Purchase!",
			react: AccessEmailTemplate({
				email,
				username,
			}),
		});
	} catch (err) {
		console.error(err);
	}
}
