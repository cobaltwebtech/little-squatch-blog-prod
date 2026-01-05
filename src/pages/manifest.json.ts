import type { APIRoute, ImageMetadata } from "astro";
import icon from "../assets/favicons/icon.png";
import maskableIcon from "../assets/favicons/icon-maskable.png";

interface Favicon {
	purpose: "any" | "maskable" | "monochrome";
	src: ImageMetadata;
	sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
	{
		purpose: "any",
		src: icon,
		sizes,
	},
	{
		purpose: "maskable",
		src: maskableIcon,
		sizes,
	},
];

export const GET: APIRoute = async () => {
	const icons = favicons.flatMap((favicon) =>
		sizes.map((size) => ({
			src: `/icons/${favicon.purpose}-${size}x${size}.png`,
			sizes: `${size}x${size}`,
			type: "image/png",
			purpose: favicon.purpose,
		})),
	);

	const manifest = {
		short_name: "Little Squatch",
		name: "Little Squatch Blog",
		icons,
		display: "minimal-ui",
		id: "/",
		start_url: "/",
		theme_color: "#007595",
		background_color: "#022f2e",
	};

	return new Response(JSON.stringify(manifest));
};
