import { SessionProvider } from "next-auth/react";

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
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PurchaseButton } from "@/components/purchase-button";

export default function Home() {
	return (
		<>
			<SessionProvider>
				<Header />
				<main className="w-full">
					<Hero />
					<Features />
					<ServerGallery />

					<Plugins />
					<Pricing />
					<ServerRules />
					<Commands />
					<FAQ />
				</main>
				<Footer />
			</SessionProvider>
		</>
	);
}

function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="flex items-center justify-center gap-2 mb-4">
							<div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
							<span className="text-green-500 font-semibold">
								Server Online
							</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
							Get Exclusive Access to Our Minecraft Server
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
							Join our thriving community and experience Minecraft like never
							before. Limited whitelist spots available!
						</p>
					</div>
					<div className="space-x-4">
						<Button asChild variant="outline">
							<Link href="#pricing">Buy Whitelist Spot</Link>
						</Button>
						<Button variant="ghost" className="text-white">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

function Features() {
	const features = [
		{
			id: "feature-1",
			icon: "⚡",
			title: "24/7 Uptime",
			description:
				"Our server is always online, ensuring you can play whenever you want.",
		},
		{
			id: "feature-2",
			icon: "🔧",
			title: "Custom Plugins",
			description:
				"Enjoy unique gameplay experiences with our carefully selected plugins.",
		},
		{
			id: "feature-3",
			icon: "👥",
			title: "Active Community",
			description:
				"Join a friendly and active player base for the best multiplayer experience.",
		},
	];

	return (
		<section
			id="features"
			className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Server Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature) => (
						<Card key={feature.id}>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<span className="text-green-600">{feature.icon}</span>{" "}
									{feature.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

import Image1 from "@/assets/img1.webp";
import Image2 from "@/assets/img2.webp";
import Image3 from "@/assets/img3.webp";
import Image from "next/image";

function ServerGallery() {
	const images = [
		{
			id: "img-1",
			src: Image1,
			alt: "Server spawn area",
			caption: "Our beautiful spawn area",
		},
		{
			id: "img-2",
			src: Image2,
			alt: "Community builds",
			caption: "Amazing community creations",
		},
		{
			id: "img-3",
			src: Image3,
			alt: "Server events",
			caption: "Fun community events",
		},
	];

	return (
		<section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Server Gallery
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{images.map((image) => (
						<div key={image.id} className="">
							<div className="relative aspect-video">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="w-full aspect-video object-cover rounded-lg  bg-gray-100"
									placeholder="blur"
									sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 400px"
								/>
							</div>

							<p className="mt-2 text-center text-gray-600">{image.caption}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Commands() {
	const commands = [
		{
			id: "cmd-1",
			command: "/spawn",
			description: "Teleport to the server spawn point",
		},
		{
			id: "cmd-2",
			command: "/tpa <player>",
			description: "Request to teleport to another player",
		},
		{
			id: "cmd-3",
			command: "/sethome",
			description: "Set your home location for quick teleporting",
		},
		{
			id: "cmd-4",
			command: "/msg <player>",
			description: "Send a private message to another player",
		},
	];

	return (
		<section id="commands" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Useful Commands
				</h2>
				<div className="space-y-4">
					{commands.map((cmd) => (
						<div key={cmd.id} className="flex items-start gap-4">
							<span className="text-gray-400 mt-1">•</span>
							<div>
								<code className="font-mono text-lg">{cmd.command}</code>
								<p className="text-gray-600 mt-1">{cmd.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ServerRules() {
	const rules = [
		{
			id: "rule-1",
			title: "No Griefing",
			description:
				"Respect other players' builds and properties. Any form of griefing will result in a ban.",
		},
		{
			id: "rule-2",
			title: "Be Respectful",
			description:
				"Treat all players with respect. Harassment, hate speech, or excessive toxicity is not tolerated.",
		},
		{
			id: "rule-3",
			title: "No Cheating",
			description:
				"Use of hacks, exploits, or any unfair advantages is strictly prohibited.",
		},
		{
			id: "rule-4",
			title: "Keep Chat Clean",
			description:
				"Maintain family-friendly communication. No spamming or inappropriate content.",
		},
	];

	return (
		<section id="rules" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Server Rules
				</h2>
				<div className="space-y-6">
					{rules.map((rule) => (
						<div key={rule.id} className="flex items-start gap-4">
							<span className="text-gray-400 mt-1">•</span>
							<div>
								<h3 className="text-xl font-semibold">{rule.title}</h3>
								<p className="text-gray-600 mt-1">{rule.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Plugins() {
	const plugins = [
		{
			id: "plugin-1",
			name: "GriefPrevention",
			description: "Protect your builds with advanced claim system",
		},
		{
			id: "plugin-2",
			name: "McMMO",
			description: "Level up various skills and unlock special abilities",
		},
		{
			id: "plugin-3",
			name: "DynMap",
			description: "View the server map in real-time through your web browser",
		},
		{
			id: "plugin-4",
			name: "CustomEnchants",
			description: "Discover unique enchantments for your tools and weapons",
		},
	];

	return (
		<section id="plugins" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Our Plugins
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{plugins.map((plugin) => (
						<Card key={plugin.id}>
							<CardHeader>
								<CardTitle>{plugin.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">{plugin.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

function Pricing() {
	return (
		<section id="pricing" className="w-full py-12 md:py-24 lg:py-32 ">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
						Join Our Community
					</h2>
					<p className="text-gray-500 max-w-xl mx-auto">
						Get permanent access to our premium Minecraft server with a one-time
						payment
					</p>
				</div>

				<div className="flex items-center justify-center">
					<Card className="w-full max-w-screen-md border-2 border-green-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
						<CardHeader className="text-center space-y-2">
							<div className="bg-green-100 text-green-700 text-sm font-medium py-1 px-3 rounded-full w-fit mx-auto">
								MOST POPULAR
							</div>
							<CardTitle className="text-2xl">
								Permanent Server Access
							</CardTitle>
							<CardDescription className="text-base">
								Experience Minecraft like never before
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="text-center">
								<p className="text-5xl font-bold text-green-600 flex items-center justify-center gap-1">
									5.99 <span className="text-2xl">zł</span>
								</p>
								<p className="text-sm text-gray-500 mt-1">
									One-time payment • Lifetime access
								</p>
							</div>

							<ul className="space-y-3">
								<li className="flex items-center gap-2 text-gray-700">
									<div className="bg-green-100 p-1 rounded-full">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									Instant server access
								</li>
								<li className="flex items-center gap-2 text-gray-700">
									<div className="bg-green-100 p-1 rounded-full">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									Join a friendly community
								</li>
								<li className="flex items-center gap-2 text-gray-700">
									<div className="bg-green-100 p-1 rounded-full">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									Permanent whitelist spot
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<PurchaseButton className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-200" />
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}

function FAQ() {
	return (
		<section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Frequently Asked Questions
				</h2>
				<Accordion
					type="single"
					collapsible
					className="w-full max-w-3xl mx-auto"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger>What is a whitelist?</AccordionTrigger>
						<AccordionContent>
							A whitelist is a list of approved players who are allowed to join
							the Minecraft server. It helps maintain a high-quality community
							and prevents unwanted players from joining.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							How long does my whitelist access last?
						</AccordionTrigger>
						<AccordionContent>
							Your whitelist access is permanent. Once you purchase a spot,
							you&apos;ll have access to the server as long as it&apos;s running
							and you follow the server rules.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							Can I transfer my whitelist spot to another player?
						</AccordionTrigger>
						<AccordionContent>
							Whitelist spots are non-transferable. They are tied to your
							Minecraft account and cannot be given or sold to other players.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							What happens if I break the server rules?
						</AccordionTrigger>
						<AccordionContent>
							If you break the server rules, you may be temporarily or
							permanently banned from the server. In case of a permanent ban,
							you will lose your whitelist spot without a refund.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
