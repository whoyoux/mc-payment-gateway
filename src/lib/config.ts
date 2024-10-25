export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export const siteConfig = {
	name: "MinecraftWhitelist - Secure Your Spot on Our Exclusive Server",
	shortName: "MCWhitelist",
	description:
		"Purchase a whitelist spot on our premium Minecraft server. Enjoy a safe, lag-free gaming experience with an active community and regular events.",
	url: new URL(BASE_URL),
	ogImage: `${BASE_URL}/og.jpg`,
	links: {
		discord: "https://discord.gg/minecraftwhitelist",
	},
	keywords: [
		"minecraft whitelist",
		"minecraft server",
		"premium minecraft",
		"exclusive minecraft server",
		"minecraft community",
		"buy minecraft whitelist",
		"minecraft server access",
		"secure minecraft gameplay",
	],
	authors: [
		{
			name: "whx",
			url: "whx.world",
		},
	],
	creator: "whx",
};
