import * as React from "react";
import {
	Html,
	Button,
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";

export function WelcomeEmailTemplate({
	email,
	username,
}: { email: string; username: string }) {
	return (
		<Tailwind>
			<Html lang="en">
				<Head />
				<Preview>Welcome to Our Minecraft Server!</Preview>
				<Body className="font-sans">
					<Container className="bg-white mx-auto py-5 pb-12 mb-16">
						<Heading className="text-gray-900 text-2xl font-bold text-center my-8">
							Welcome to Our Server!
						</Heading>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							Hi {username},
						</Text>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							Thank you for joining our Minecraft server community! We're
							excited to have you on board.
						</Text>

						<Section className="text-center my-6">
							<Button
								href="https://pureminecraft.me/dashboard"
								className="bg-black px-6 py-3 text-white text-base no-underline inline-block hover:bg-black/90"
							>
								Visit Dashboard
							</Button>
						</Section>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							If you have any questions or need assistance, feel free to join
							our Discord server or contact support.
						</Text>

						<Hr className="border-gray-200 my-5" />

						<Text className="text-gray-500 text-xs leading-4">
							This email was sent to {email}
						</Text>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
