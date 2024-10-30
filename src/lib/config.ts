export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export const SITE_NAME = "PureMinecraft";

export const SERVER_IP = "play.pureminecraft.me";
export const SERVER_VERSION = "1.21.3";
export const SERVER_REGION = "Europe (Poland)";

export const siteConfig = {
	name: `${SITE_NAME} - Premium Minecraft Server`,
	shortName: SITE_NAME,
	description: `${SITE_NAME}. Enjoy a safe, lag-free gaming experience with an active community and regular events.`,
	url: new URL(BASE_URL),
	ogImage: `${BASE_URL}/og.jpg`,
	// links: {
	// 	discord: "https://discord.gg/minecraftwhitelist",
	// },
	keywords: [
		"minecraft whitelist",
		"minecraft server",
		"premium minecraft",
		"exclusive minecraft server",
		"minecraft community",
		"buy minecraft whitelist",
		"minecraft server access",
		"secure minecraft gameplay",
		"pure minecraft",
		"pureminecraft",
		"minecraft pure",
		"minecraftpure",
	],
	authors: [
		{
			name: "whx",
			url: "whx.world",
		},
	],
	creator: "whx",
};
