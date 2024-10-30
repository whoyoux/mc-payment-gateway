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

export function AccessEmailTemplate({
	email,
	username,
}: {
	email: string;
	username: string;
}) {
	return (
		<Tailwind>
			<Html lang="en">
				<Head />
				<Preview>Thank you for purchasing server access!</Preview>
				<Body className="font-sans">
					<Container className="bg-white mx-auto py-5 pb-12 mb-16">
						<Heading className="text-gray-900 text-2xl font-bold text-center my-8">
							Thank You For Your Purchase!
						</Heading>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							Hi {username},
						</Text>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							Thank you for purchasing access to our Minecraft server! Your
							payment has been successfully processed and your access has been
							activated.
						</Text>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							Payment Details:
							<br />
							Amount: 5.99 zł
						</Text>

						<Section className="text-center my-6">
							<Button
								href="https://pureminecraft.me/dashboard"
								className="bg-black px-6 py-3 text-white text-base no-underline inline-block hover:bg-black/90"
							>
								Go to Dashboard
							</Button>
						</Section>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							You now have permanent access to our server. You can find the
							server address and connection details on your dashboard.
						</Text>

						<Text className="text-gray-900 text-base leading-6 text-left my-4">
							If you have any questions or need assistance, please don&apos;t
							hesitate to reach out through our Discord server.
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
