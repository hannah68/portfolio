import React from "react";
import { BsArrowRight } from "react-icons/bs";

import "../styles/Project.css";

import { projects } from "../data/projectData";

const Project = () => {
	return (
		<div className="project-page">
			<h1>My Projects</h1>
			<div className="project-container">
				{projects.map((project, index) => {
					return (
						<div className="project" key={index}>
							<div className="project-image">
								<img src={project.img} alt={project.title} />
							</div>
							<div className="project-text">
								<h2 className="project-text-title">{project.title}</h2>
								<div className="project-text-tags">
									{project.tags.map((tag, index) => {
										return <span key={index}>{tag}</span>;
									})}
								</div>
								<p className="project-text-detail">{project.text}</p>
								<div className="project-text-show">
									<div className="project-text-demo">
										<a
											href={project.demo_link}
											className="demo-link"
											target="_blank"
											rel="noreferrer"
										>
											<span>Demo</span>
											<span>
												<BsArrowRight />
											</span>
										</a>
									</div>
									<div className="project-text-code">
										<a
											href={project.github_link}
											className="github-link"
											target="_blank"
											rel="noreferrer"
										>
											<span>Code</span>
											<span>
												<BsArrowRight />
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
