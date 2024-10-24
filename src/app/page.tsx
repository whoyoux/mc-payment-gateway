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

export default function Home() {
	return (
		<>
			<main className="w-full">
				<Hero />
				<Features />
				<Pricing />
				<FAQ />
			</main>
			<Footer />
		</>
	);
}

function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
							Get Exclusive Access to Our Minecraft Server
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
							Join our thriving community and experience Minecraft like never
							before. Limited whitelist spots available!
						</p>
					</div>
					<div className="space-x-4">
						<Button asChild>
							<Link href="#pricing">Buy Whitelist Spot</Link>
						</Button>
						<Button variant="outline">Learn More</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

function Features() {
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
					<Card>
						<CardHeader>
							<CardTitle>24/7 Uptime</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Our server is always online, ensuring you can play whenever you
								want.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Custom Plugins</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Enjoy unique gameplay experiences with our carefully selected
								plugins.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Active Community</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Join a friendly and active player base for the best multiplayer
								experience.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

function Pricing() {
	return (
		<section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Whitelist Pricing
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardHeader>
							<CardTitle>Basic Access</CardTitle>
							<CardDescription>For casual players</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">$9.99</p>
							<p className="text-sm text-gray-500">One-time payment</p>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Buy Now</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Premium Access</CardTitle>
							<CardDescription>For dedicated players</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">$19.99</p>
							<p className="text-sm text-gray-500">One-time payment</p>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Buy Now</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>VIP Access</CardTitle>
							<CardDescription>For the ultimate experience</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">$29.99</p>
							<p className="text-sm text-gray-500">One-time payment</p>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Buy Now</Button>
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
