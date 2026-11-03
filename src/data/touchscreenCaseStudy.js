import { PAGE_LINK } from "../config/config";

export const touchscreenCaseStudy = {
	number: "03",

	title: "Touchscreen Control Interface",

	subtitle:
		"Designing and building a guided touchscreen interface for controlling bioreactors and connected laboratory hardware.",

	role: "Frontend Developer — frontend design and implementation",

	development: "Built and evolved across multiple releases",

	stack: [
		"React",
		"TypeScript",
		"TanStack Query",
		"Zustand",
		"REST APIs",
		"Vitest",
		"React Testing Library",
	],

	sections: [
		{
			eyebrow: "The challenge",
			title: "Software that controls something physical",
			paragraphs: [
				"The device interface was different from a typical web application. Scientists were using a fixed touchscreen to configure and control real bioreactors, gas dosing equipment and pumps, so actions in the UI could directly affect physical hardware.",

				"The interface needed to guide users through setup, calibration and experiment preparation while making device state, unavailable actions and failures understandable. It also had to work reliably within the constraints of a fixed touchscreen rather than a normal desktop browser.",
			],
			quote:
				"The challenge wasn't just making controls easy to use. The interface had to make the correct workflow clear when those controls affected real equipment.",
		},

		{
			eyebrow: "Product thinking",
			title: "Designing the workflow with the people who understood the system",
			paragraphs: [
				"I worked with a software engineer, an embedded engineer and a biologist to understand how the device should be operated and what the frontend needed to support.",

				"I used the biologist's domain knowledge to validate both the functionality and the interface design, rather than treating the backend API as the definition of the user experience. I then translated that workflow into the frontend design and built the React application while the software engineer developed the backend.",
			],
			diagram: "deviceWorkflow",
		},

		{
			eyebrow: "My role",
			title: "From workflow and design to implementation",
			intro:
				"I owned the frontend experience and worked across product decisions, interaction design, API integration and testing.",
			items: [
				"Worked with engineering and biology to define the device workflow",
				"Designed the touchscreen interface",
				"Built the React frontend",
				"Integrated typed REST APIs",
				"Built calibration workflows",
				"Built parameter configuration",
				"Implemented run and dosing controls",
				"Created custom touchscreen keyboards",
				"Handled hardware and API error states",
				"Built automated frontend tests",
				"Tested the application on the physical device",
				"Refined the workflow through biologist feedback",
			],
		},

		{
			eyebrow: "Guided workflow",
			title: "Making the next valid action obvious",
			paragraphs: [
				"The interface was organised around the sequence required to prepare and operate the system. Instead of presenting every control at once, the application progressively unlocked parts of the workflow as earlier steps were completed.",
			],
			subsections: [
				{
					number: "01",
					title: "Setup",
					paragraphs: [
						"The application first checked whether the system and connected hardware were ready. Status information covered the cloud connection, gas dosing module and individual bioreactors, with readable states rather than exposing raw device information.",
					],
				},
				{
					number: "02",
					title: "Calibration",
					paragraphs: [
						"Scientists could calibrate sensors for each bioreactor through guided multi-step flows. Required calibration decisions had to be completed before the workflow could continue.",
					],
				},
				{
					number: "03",
					title: "Parameters",
					paragraphs: [
						"Once calibration was complete, users could configure operating parameters such as temperature, stirrer speed, oxygen and CO₂ concentration, flow rate and dosing timings.",
					],
				},
				{
					number: "04",
					title: "Run",
					paragraphs: [
						"After parameters were saved, the Run workflow became available. Scientists could start, pause, resume and stop individual bioreactors while seeing their current status.",
					],
				},
			],
		},

		{
			eyebrow: "Engineering decisions",
			title: "Designing for a touchscreen, not a desktop browser",
			subsections: [
				{
					number: "01",
					title: "A keyboard designed for the application",
					paragraphs: [
						"Using the operating system keyboard would have disrupted the fixed touchscreen experience, so I built custom numeric and alphabetic keyboards inside the application.",

						"Inputs controlled when and where the keyboard appeared, while numeric fields handled rules such as decimal and negative values before committing the input.",
					],
				},
				{
					number: "02",
					title: "Designing around touch",
					paragraphs: [
						"The interface was built for a fixed 1920×720 display with large touch targets and no scrolling. Controls and feedback had to remain clear without relying on desktop interactions such as hover.",

						"Important feedback such as notifications was deliberately prominent and remained visible long enough to be read while operating the equipment.",
					],
				},
				{
					number: "03",
					title: "Confirming physical actions",
					paragraphs: [
						"Some actions had consequences beyond the browser. Stopping an experiment could result in data loss, while dosing triggered physical equipment.",

						"I used confirmation steps around actions where an accidental touch could have a meaningful consequence rather than treating them like ordinary UI buttons.",
					],
				},
			],
		},

		{
			eyebrow: "Hardest engineering problem",
			title: "Keeping the interface aligned with the device workflow",
			paragraphs: [
				"The frontend wasn't a collection of independent screens. What a user was allowed to do depended on what had already happened elsewhere in the workflow.",

				"Parameters became available after calibration, Run became available after parameters were saved, and calibration was restricted while an experiment was running. This meant the UI had to communicate both the current state and why another action was not yet available.",

				"I used shared frontend state to coordinate those transitions across the application, while API requests handled operations against the backend and physical system.",
			],
			diagram: "touchscreenState",
			highlight: true,
		},

		{
			eyebrow: "Hardware boundary",
			title: "Keeping hardware complexity behind the API",
			paragraphs: [
				"The React application never communicated directly with the hardware or MQTT. It interacted with the device backend through REST APIs, while the backend handled communication with the lower-level hardware systems.",

				"API types were generated from the backend's OpenAPI specification, giving the frontend typed request paths and payloads. This created a clear boundary: the UI could focus on workflow and interaction while the backend translated those operations into device behaviour.",
			],
		},

		{
			eyebrow: "Failure states",
			title: "Making hardware problems understandable",
			paragraphs: [
				"Physical systems aren't always immediately available. The application needed to handle devices still initialising, disconnected hardware and operations that failed.",

				"System checks translated backend states into readable statuses, while failed actions produced specific feedback such as calibration or sensor errors. During startup, the application continued checking for hardware even after the initial discovery period had timed out, allowing the interface to recover when the system became available.",
			],
		},

		{
			eyebrow: "Testing & validation",
			title: "Testing in software and on the real device",
			paragraphs: [
				"I used Vitest, React Testing Library and MSW to test the application independently of the physical backend, including the workflows where several pieces of state and API behaviour interacted.",

				"I also tested the interface myself on the physical touchscreen. The biologist tested the application and provided feedback on the workflow and design, giving us another level of validation beyond automated tests. The finished interface was ultimately used by customers.",
			],
			items: [
				"Setup workflow",
				"Calibration flows",
				"Oxygen calibration",
				"Parameter configuration",
				"Dosing interactions",
				"Workflow and tab gating",
				"Frontend state",
				"API behaviour",
			],
		},

		{
			eyebrow: "Reflection",
			title: "What I'd improve today",
			paragraphs: [
				"One architectural decision I would revisit is how much workflow state belonged only in the frontend. State such as whether calibration had been completed or whether an experiment was running could be lost if the application reloaded.",

				"Today I would make the backend the authoritative source for important device workflow state and derive the frontend from it. That would make recovery after a restart more reliable and reduce the possibility of the interface temporarily disagreeing with the physical system.",
			],
		},

		{
			eyebrow: "What I learned",
			title: "The UI becomes part of the physical system",
			paragraphs: [
				"This project changed how I think about frontend state and interaction design. In a normal web application, an incorrect state might show the wrong button. On a device interface, that button may represent something happening to physical equipment.",

				"It reinforced the importance of clear system boundaries, domain-expert feedback, understandable failure states and designing workflows around what the user should safely do next rather than simply exposing everything the API can do.",
			],
			highlight: true,
		},
	],
};
