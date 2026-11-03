import { PAGE_LINK } from "../config/config";

export const protocolBuilderCaseStudy = {
	number: "01",

	title: "Visual Protocol Builder",

	subtitle:
		"Designing complex bioreactor experiments through an interactive graph interface.",

	role: "Frontend Developer — sole frontend developer on the product",

	development: "Initial build: approximately 6 weeks",

	stack: [
		"React 19",
		"TypeScript",
		"React Flow",
		"Zustand",
		"TanStack Query",
		"Tailwind",
		"Vitest",
	],

	sections: [
		{
			eyebrow: "The challenge",
			title: "Turning complex experiments into something scientists could see",
			paragraphs: [
				"Scientists needed to design multi-step bioreactor experiments without writing code. A protocol wasn't simply an ordered list: steps could run across different vessels, execute in parallel, transfer material between vessels and pause for manual intervention.",

				"The backend already represented protocols as collections of steps, connections and vessel slots. What was missing was an intuitive way for people to construct and understand those relationships.",
			],
			quote:
				"The challenge wasn't simply displaying protocol data. It was finding a visual model that matched how scientists needed to reason about an experiment.",
		},

		{
			eyebrow: "Product thinking",
			title: "From backend model to visual workflow",
			paragraphs: [
				"I worked with the other software engineers to define how the experiment-building workflow should operate and then translated those requirements into the frontend design.",

				"Rather than presenting a protocol as a large configuration form, I chose a graph-based interaction where scientists could see individual steps and explicitly connect their dependencies.",

				"I designed the frontend experience and built the implementation using React Flow. During development, I reviewed the workflow with a biologist and scientist. They liked the graph approach because the visual connections made it clearer what the experiment would do and how the steps related to one another.",
			],
			diagram: "protocol",
		},

		{
			eyebrow: "My role",
			title: "Frontend ownership from workflow to implementation",
			intro:
				"I was responsible for the frontend experiment workflow from design through implementation.",
			items: [
				"Worked with the engineering team to define the workflow",
				"Designed the frontend experience",
				"Built the visual protocol builder",
				"Built step configuration and validation",
				"Implemented loading and editing of existing protocols",
				"Built the launch workflow for assigning physical bioreactors",
				"Integrated the frontend with the backend API",
				"Validated the workflow with scientists and biologists",
				"Refined the experience based on feedback",
				"Built the frontend tests",
			],
		},

		{
			eyebrow: "Engineering decisions",
			title: "Designing the frontend architecture",
			subsections: [
				{
					number: "01",
					title: "Giving graph state a clear owner",
					paragraphs: [
						"Several parts of the application needed to interact with the same protocol. The canvas manipulated nodes and connections, configuration panels edited individual steps, the header contained the protocol-level Save action, and existing protocols needed to be loaded into the builder.",

						"I used a small Zustand store as the shared owner of the graph state rather than passing state through unrelated components. Zustand selectors also allowed components to subscribe only to the state they needed while React Flow continuously updated node positions during dragging.",
					],
				},

				{
					number: "02",
					title: "Edit a draft, commit on save",
					paragraphs: [
						"Editing a step doesn't immediately modify the protocol. The configuration panel works with a draft copy of the selected step and only commits it to the graph when the user chooses Save step.",

						"This means Cancel genuinely discards changes, partially configured steps don't silently modify existing data, and the application can warn before unfinished work is lost.",
					],
				},

				{
					number: "03",
					title: "Validation should explain, not just prevent",
					paragraphs: [
						"Protocol validation spans the graph, individual steps and nested configuration. Some rules also depend on relationships between nodes.",

						"I centralised the logic that determines whether a step is complete so the same validation could highlight unfinished nodes, prevent incomplete steps being committed and determine whether the entire protocol could be saved.",
					],
					quote: "Finish configuring 2 incomplete steps.",
				},
			],
		},

		{
			eyebrow: "Hardest engineering problem",
			title: "Translating between two representations of the same protocol",
			paragraphs: [
				"The frontend and backend represented the same protocol differently. The frontend worked with visual nodes, connections and positions, while the API expected steps, connections and vessel slots.",

				"Saving therefore required a transformation layer between those representations. Some information, such as the source and destination of a transfer, could be derived from relationships in the graph rather than copied directly.",

				"Loading created the opposite problem. The backend stored relationships between steps but not their visual positions, so the frontend had to reconstruct a usable layout.",

				"I calculated the depth of each step from its dependencies, positioned dependent steps progressively across the canvas and stacked steps at the same depth vertically. The traversal also protected against cycles so malformed graph data couldn't leave the browser recursively processing dependencies.",
			],
			diagram: "transformation",
			highlight: true,
		},

		{
			eyebrow: "Beyond the builder",
			title: "Launching experiments on real hardware",
			paragraphs: [
				"Building the protocol was only the first part of the workflow. Before launch, the frontend created a run-order preview based on protocol dependencies and abstract vessel slots had to be mapped to physical bioreactors.",

				"Once an experiment was running, the monitor grouped steps according to their dependencies and communicated progress, manual interventions and failures.",

				"Active experiments refreshed every four seconds and stopped polling automatically when the experiment finished.",
			],
		},

		{
			eyebrow: "Testing",
			title: "Putting confidence around the difficult logic",
			paragraphs: [
				"I separated complex logic from React components where practical so it could be tested independently. The highest testing priority was the transformation and workflow logic rather than relying only on component rendering tests.",
			],
			items: [
				"Graph → API transformation",
				"API → graph transformation",
				"Automatic graph layout",
				"Cyclic graph input",
				"Zustand stores",
				"API requests",
				"Server error handling",
				"Experiment stage grouping",
				"Progress calculation",
				"Permission checks",
			],
		},

		{
			eyebrow: "Reflection",
			title: "What I'd do differently today",
			subsections: [
				{
					title: "Generate stable IDs",
					paragraphs: [
						"Use crypto.randomUUID() rather than count-based identifiers.",
					],
				},
				{
					title: "Clean up orphaned state",
					paragraphs: [
						"Automatically remove vessel slots when their associated module task is deleted.",
					],
				},
				{
					title: "Improve dirty-state tracking",
					paragraphs: [
						"Distinguish genuine protocol changes from canvas selection or resizing.",
					],
				},
				{
					title: "Add canvas interaction tests",
					paragraphs: [
						"Test complete workflows such as dropping, configuring, connecting and saving nodes.",
					],
				},
			],
		},

		{
			eyebrow: "What I learned",
			title: "The difficult part wasn't drawing nodes",
			paragraphs: [
				"The difficult part of building the Protocol Builder wasn't drawing nodes on a canvas. It was defining clear boundaries between temporary form state, committed graph state and the backend representation while keeping a complex scientific workflow understandable to the person designing the experiment.",

				"It also reinforced the value of validating technical ideas with domain experts. The graph architecture made sense technically, but feedback from scientists confirmed that the same representation also made the experiment easier to understand.",
			],
			highlight: true,
		},
	],

	next: {
		title: "Real-Time Bioreactor Monitoring",
		link: PAGE_LINK.monitoring,
	},
};
