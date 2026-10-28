import { PAGE_LINK } from "../config/config";

export const professionalWork = [
	{
		title: "Visual Protocol Builder",
		company: "BiologIC Technologies",
		summary:
			"A visual workflow builder for configuring complex bioprocessing protocols. I designed and built the frontend, working with software engineers and scientists to shape how protocol steps, triggers and connections should work.",
		tags: ["React", "TypeScript", "React Flow", "React Hook Form", "Zod"],
		link: PAGE_LINK.protocolBuilder,
	},
	{
		title: "Real-Time Bioreactor Monitoring",
		company: "BiologIC Technologies",
		summary:
			"A monitoring experience for scientists to follow experiments and explore live bioreactor data. The work involved real-time data visualisation, configurable time ranges and workflows shaped by scientist and customer feedback.",
		tags: [
			"React",
			"TypeScript",
			"TanStack Query",
			"Chart.js",
			"Real-time data",
		],
		link: PAGE_LINK.monitoring,
	},
	{
		title: "Touchscreen Control Interface",
		company: "BiologIC Technologies",
		summary:
			"A touchscreen interface for controlling laboratory equipment. I worked with a software engineer, embedded engineer and biologist to define the workflow, then designed and built the frontend around the constraints of a physical device.",
		tags: [
			"React",
			"TypeScript",
			"Electron",
			"Touch UI",
			"Hardware integration",
		],
		link: PAGE_LINK.touchscreen,
	},
];

export const personalProjects = [
	{
		title: "MoodLifter",
		img: "./assets/images/moodlifter.png",
		text: "A full-stack wellbeing application where users can discover motivational content, save favourites and keep a personal journal.",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
		demo_link: "",
		github_link: "YOUR_EXISTING_GITHUB_LINK",
	},
	{
		title: "Woodland",
		img: "./assets/images/woodland.png",
		text: "A full-stack e-commerce application with product discovery, filtering, user accounts, basket management and reviews.",
		tags: ["React", "Node.js", "Express", "MongoDB"],
		demo_link: "",
		github_link: "YOUR_EXISTING_GITHUB_LINK",
	},
	{
		title: "Pokimo & King",
		img: "./assets/images/pokemon.png",
		text: "A full-stack Pokémon community platform built as a group project. I focused mainly on the React frontend and its integration with our API.",
		tags: ["React", "Express", "PostgreSQL", "Prisma"],
		demo_link: "",
		github_link: "YOUR_EXISTING_GITHUB_LINK",
	},
	{
		title: "Shoprime",
		img: "./assets/images/shopprime.png",
		text: "An Angular e-commerce application with product filtering, sorting, basket management and a checkout flow.",
		tags: ["Angular", "TypeScript", "Material UI", "Tailwind CSS"],
		demo_link: "",
		github_link: "YOUR_EXISTING_GITHUB_LINK",
	},
];
