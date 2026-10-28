import React from "react";

import "../styles/About.css";
import { social_icons } from "../data/aboutData";

const skillGroups = [
	{
		title: "Frontend",
		skills: ["React", "TypeScript", "JavaScript", "Next.js", "Angular"],
	},
	{
		title: "State & Data",
		skills: [
			"TanStack Query",
			"Zustand",
			"Redux",
			"React Hook Form",
			"REST APIs",
		],
	},
	{
		title: "UI & Visualisation",
		skills: [
			"React Flow",
			"Chart.js",
			"Plotly",
			"Tailwind CSS",
			"Figma",
			"Accessibility",
		],
	},
	{
		title: "Testing",
		skills: ["Vitest", "React Testing Library", "Jest", "Playwright"],
	},
	{
		title: "Platform & Tools",
		skills: ["Git", "Vite", "Docker", "AWS"],
	},
];

const About = () => {
	return (
		<section className="about-page" id="about">
			{/* ABOUT */}
			<div className="about-infos">
				<div className="about-profile">
					<img
						src="./assets/images/hana-img.png"
						className="about-img"
						alt="Reihaneh Naderi"
					/>

					<div className="about-social-icons">
						{social_icons.map((icon) => (
							<a
								href={icon.link}
								key={icon.link}
								target="_blank"
								rel="noreferrer"
							>
								<img src={icon.logo} alt={icon.alt} />
							</a>
						))}
					</div>
				</div>

				<div className="about-text">
					<div className="section-heading">
						<span className="section-number">01 /</span>
						<h1 className="about-text-title">About</h1>
					</div>

					<h2 className="about-intro">
						I enjoy turning complex ideas into interfaces that feel simple and
						intuitive to use.
					</h2>

					<p className="about-text-info">
						Over the last four years, I’ve worked on very different products,
						from data-heavy web applications to software used with laboratory
						equipment. It’s taught me that good frontend development is as much
						about understanding the problem as it is about writing code.
					</p>

					<p className="about-text-info">
						I didn’t start my career in tech. I studied marketing before
						discovering that I really enjoyed building things for the web, which
						led me to teach myself to code and later complete a coding bootcamp
						at Boolean UK.
					</p>

					<p className="about-text-info">
						Since then, I’ve kept that same curiosity. I like understanding how
						things work, trying new technologies and learning more about the
						systems that sit around the frontend.
					</p>

					<p className="about-personal">
						Outside of coding, I enjoy drawing, photography and anything that
						gives me an excuse to be creative.
					</p>
				</div>
			</div>

			{/* TOOLKIT */}
			<div className="about-skills">
				<div className="about-skills-content">
					<div className="section-heading toolkit-heading">
						<span className="section-number">02 /</span>
						<h2 className="toolkit-title">Toolkit</h2>
					</div>

					<div className="skill-categories">
						{skillGroups.map((group) => (
							<div className="skill-category" key={group.title}>
								<h3>{group.title}</h3>

								<div className="skill-list">
									{group.skills.map((skill) => (
										<span className="skill-pill" key={skill}>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
