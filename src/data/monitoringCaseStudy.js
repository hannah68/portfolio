import { PAGE_LINK } from "../config/config";

export const monitoringCaseStudy = {
	number: "02",

	title: "Real-Time Bioreactor Monitoring",

	subtitle:
		"Replacing Grafana with a product-focused monitoring experience for exploring live and historical bioreactor data.",

	role: "Frontend Developer — sole frontend developer on the product",

	development: "Built and evolved across multiple releases",

	stack: [
		"React 19",
		"TypeScript",
		"TanStack Query",
		"Chart.js",
		"Zustand",
		"Vitest",
	],

	sections: [
		{
			eyebrow: "The challenge",
			title: "Making experiment data useful, not just visible",
			paragraphs: [
				"Bioreactor experiments continuously produce telemetry such as temperature, pH, oxygen, stirrer speed and air saturation. Scientists need to understand what is happening during a live experiment, but they also need to investigate historical behaviour after a run has finished.",

				"The existing monitoring solution relied on Grafana. We decided to replace it completely, partly because of cost and partly because we wanted the flexibility to build monitoring and analysis workflows around our own product rather than a generic dashboard.",
			],
			quote:
				"The goal wasn't simply to recreate Grafana charts. It was to build monitoring around how scientists actually worked with experiments.",
		},

		{
			eyebrow: "Product thinking",
			title: "Designing monitoring around scientists, not dashboards",
			paragraphs: [
				"I designed and built the frontend monitoring experience around two levels of investigation. The dashboard provided a quick view of experiment status and the latest readings, while a dedicated Analysis page supported deeper investigation across longer time ranges and multiple experiments.",

				"I worked with scientists while developing the product and used their feedback to shape functionality. One request was the ability to download experiment data for further analysis, so I added CSV export directly to the monitoring experience.",

				"The resulting interface wasn't only about visualising telemetry. It supported the wider workflow of checking an experiment, investigating behaviour, comparing traces and taking data away for further analysis.",
			],
		},

		{
			eyebrow: "My role",
			title: "Owning the frontend monitoring experience",
			intro:
				"I was responsible for the majority of the monitoring frontend, from the dashboard experience through to the more advanced Analysis workflow.",
			items: [
				"Designed and built the monitoring frontend",
				"Built live and historical telemetry charts",
				"Built the Analysis page",
				"Implemented multi-trace comparison",
				"Integrated telemetry APIs with TanStack Query",
				"Handled live polling and historical caching",
				"Implemented chart zooming and panning",
				"Built CSV data export",
				"Worked with scientists to refine the workflow",
				"Built automated tests around telemetry behaviour",
			],
		},

		{
			eyebrow: "Monitoring experience",
			title: "Moving from overview to investigation",
			subsections: [
				{
					number: "01",
					title: "Dashboard",
					paragraphs: [
						"Each experiment could be expanded to show its latest temperature, pH, oxygen, stirrer speed and air saturation readings. Scientists could open charts for individual parameters, and data from multiple experiments could be displayed together when comparing the same parameter.",

						"Live experiments refreshed every five seconds, while finished experiments stopped polling and could remain cached because their data no longer changed.",
					],
				},

				{
					number: "02",
					title: "Analysis",
					paragraphs: [
						"For deeper investigation, I built an Analysis page where users could construct traces by selecting a company, device, module, task and parameter.",

						"Multiple traces could be displayed on the same chart, including data from different devices and experiments. Rather than comparing absolute timestamps, traces were aligned by seconds since each experiment started, making experiments that began at different times directly comparable.",
					],
				},

				{
					number: "03",
					title: "Navigation through long experiments",
					paragraphs: [
						"The Analysis page combined a detailed chart with a lightweight overview of the whole experiment. A movable selection window showed which part of the experiment was currently being investigated.",

						"Users could move through the experiment using the overview, pan controls, zooming, a full-trace view or jump back to the newest data when following a live experiment.",
					],
				},
			],
		},

		{
			eyebrow: "Engineering decisions",
			title: "Treating live and historical data differently",
			subsections: [
				{
					number: "01",
					title: "Polling where freshness mattered",
					paragraphs: [
						"The monitoring frontend used REST APIs rather than WebSockets. TanStack Query polled live experiments every five seconds, which matched the product's monitoring requirements without introducing a persistent real-time connection.",

						"Once an experiment finished, polling stopped because the dataset was immutable. Historical requests could then benefit from longer caching rather than repeatedly fetching identical telemetry.",
					],
				},

				{
					number: "02",
					title: "Keeping server state out of UI state",
					paragraphs: [
						"Telemetry remained server state and was managed through TanStack Query rather than copied into a client-side store. Query keys represented the task, requested time window and resolution, allowing previously visited windows to be reused from the cache.",
					],
				},

				{
					number: "03",
					title: "Requesting the right amount of data",
					paragraphs: [
						"An experiment could run for many hours or days, so loading every one-second reading into Chart.js was unnecessary and increasingly expensive.",

						"The frontend therefore requested telemetry differently depending on context. Live dashboard views requested recent high-resolution data, while historical and analysis views requested a bounded number of points or an appropriate aggregation resolution. The backend performed the actual bucketing and averaging.",
					],
				},
			],
		},

		{
			eyebrow: "Hardest engineering problem",
			title: "Keeping long-running experiments responsive",
			paragraphs: [
				"A ten-hour experiment sampled every second already contains 36,000 readings for a single parameter. Comparing several traces can multiply that quickly. Fetching and rendering the entire dataset at full resolution would make both network requests and Chart.js unnecessarily expensive.",

				"The Analysis page therefore separates the whole experiment from the detailed view. A lightweight overview represents the complete run, while the main chart normally loads only a 15-minute detail window at approximately the amount of data needed for the available chart resolution.",

				"The frontend calculates an appropriate bucket width for the requested window and asks the backend for aggregated telemetry. Window boundaries are snapped to a consistent grid so overlapping requests produce the same buckets rather than slightly different averages.",

				"Each detail window also has its own TanStack Query cache key. If a scientist moves back to a window they have already inspected, the same request can be served immediately from cache.",
			],
			diagram: "telemetry",
			highlight: true,
		},

		{
			eyebrow: "Live data",
			title: "Following the experiment without fighting the user",
			paragraphs: [
				"A live experiment should normally follow the newest readings automatically. However, that behaviour becomes frustrating if a scientist pans backwards to investigate something that happened earlier.",

				"The Analysis view therefore follows the live tail until the user moves away from it. Once they pan to an earlier window, the view stays there instead of repeatedly jumping back to the newest reading. A Jump to live action lets them explicitly return to the live tail.",

				"Zooming was handled separately from data navigation. Zoom magnified the data already loaded in the chart, while moving to another time window triggered a telemetry request. This avoided unnecessary network requests for every visual zoom interaction.",
			],
		},

		{
			eyebrow: "Customer feedback",
			title: "Taking experiment data beyond the dashboard",
			paragraphs: [
				"Monitoring requirements weren't defined only by engineering. Scientist and customer feedback influenced what the product needed to support.",

				"One request was the ability to download experiment data for further analysis. I implemented CSV generation in the browser, allowing users to select experiments and export their telemetry. Individual charts also provided their own download option.",
			],
		},

		{
			eyebrow: "Testing",
			title: "Testing the behaviour around changing data",
			paragraphs: [
				"The difficult parts of monitoring weren't static chart rendering, so I focused tests on the data and navigation behaviour around the charts.",
			],
			items: [
				"Initial telemetry windows",
				"Window clamping and panning",
				"Aggregation resolution",
				"Window grid snapping",
				"Telemetry cache keys",
				"Live vs finished query behaviour",
				"Multiple telemetry traces",
				"Duplicate trace handling",
				"Live tail behaviour",
				"CSV export",
			],
		},

		{
			eyebrow: "Collaboration",
			title: "Sharing ownership of the difficult parts",
			paragraphs: [
				"I built most of the Analysis page, multi-trace data fetching and chart integration. I also worked with another software engineer on the telemetry windowing behaviour and experiment overview.",

				"That collaboration was particularly useful because the problem crossed frontend interaction, caching strategy and the shape of telemetry requests sent to the backend.",
			],
		},

		{
			eyebrow: "Reflection",
			title: "What I'd improve today",
			subsections: [
				{
					title: "Keyboard-accessible timeline navigation",
					paragraphs: [
						"I'd make the experiment overview fully operable by keyboard rather than relying primarily on pointer interaction.",
					],
				},

				{
					title: "Make the window controls more explicit",
					paragraphs: [
						"I'd make the distinction between moving the fixed detail window and resizing it clearer in the interface, so the controls exactly reflect the behaviour available.",
					],
				},

				{
					title: "Review export resolution",
					paragraphs: [
						"I'd make the resolution of exported historical data explicit and consider a dedicated full-resolution export path when scientists need the rawest available dataset.",
					],
				},
			],
		},

		{
			eyebrow: "What I learned",
			title: "Real-time isn't simply about refreshing faster",
			paragraphs: [
				"Building the monitoring experience changed how I think about real-time interfaces. The challenge isn't simply getting new data onto the screen quickly. It is deciding how much data the user actually needs, how often it should change and what should happen when the user wants to stop following live data and investigate the past.",

				"It also reinforced that performance and product design are closely connected. Windowing, aggregation and caching made the charts more efficient, but they also made long experiments practical for scientists to navigate and understand.",
			],
			highlight: true,
		},
	],

	next: {
		title: "Touchscreen Control Interface",
		link: PAGE_LINK.touchscreen,
	},
};
