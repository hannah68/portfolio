import React from "react";
import { BsArrowRight, BsGithub } from "react-icons/bs";

import "../styles/Project.css";

import { professionalWork, personalProjects } from "../data/projectData";
import { Link } from "react-router-dom";

const Project = () => {
	return (
		<div className="work-page">
			{/* =========================
			    PROFESSIONAL WORK
			========================= */}

			<section className="professional-work">
				<div className="work-heading">
					<span className="section-number">03 /</span>
					<h1>Work</h1>
				</div>

				<p className="work-intro">
					A few of the products and features I worked on at BiologIC, where I
					was responsible for designing and building frontend experiences for
					scientists working with bioprocessing equipment.
				</p>

				<div className="case-study-list">
					{professionalWork.map((project, index) => (
						<article className="case-study-card" key={project.title}>
							<div className="case-study-number">
								{String(index + 1).padStart(2, "0")}
							</div>

							<div className="case-study-content">
								<p className="case-study-company">{project.company}</p>

								<h2>{project.title}</h2>

								<p className="case-study-summary">{project.summary}</p>

								<div className="case-study-tags">
									{project.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>

								<Link
									className="case-study-link"
									to={project.link}
									aria-label={`Read ${project.title} case study`}
								>
									Read case study
									<BsArrowRight />
								</Link>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* =========================
			    PERSONAL PROJECTS
			========================= */}

			<section className="personal-projects">
				<div className="personal-projects-heading">
					<span className="section-number">04 /</span>
					<h2>Personal Projects</h2>
				</div>

				<p className="personal-projects-intro">
					A few projects I built while developing my frontend and full-stack
					skills.
				</p>

				<div className="personal-project-grid">
					{personalProjects.map((project) => (
						<article className="personal-project-card" key={project.title}>
							<div className="personal-project-image">
								<img src={project.img} alt="" />
							</div>

							<div className="personal-project-content">
								<h3>{project.title}</h3>

								<p>{project.text}</p>

								<div className="personal-project-tags">
									{project.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>

								<div className="personal-project-links">
									{project.demo_link && (
										<a
											href={project.demo_link}
											target="_blank"
											rel="noreferrer"
										>
											Live demo
											<BsArrowRight />
										</a>
									)}

									{project.github_link && (
										<a
											href={project.github_link}
											target="_blank"
											rel="noreferrer"
										>
											<BsGithub />
											View on GitHub
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
};

export default Project;
