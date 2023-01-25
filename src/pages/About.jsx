import React from "react";

import "../styles/About.css";

import { group_icons, social_icons } from "../data/aboutData";

const About = () => {
	return (
		<div className="about-page">
			<div className="about-infos">
				<div className="about-img-icon">
					<img
						src="./assets/images/hana-img.png"
						className="about-img"
						alt="hannah pic"
					/>
					<div className="about-social-icons">
						{social_icons.map((icon, index) => {
							return (
								<a
									href={icon.link}
									key={index}
									target="_blank"
									rel="noreferrer"
								>
									<img src={icon.logo} alt={icon.alt} />
								</a>
							);
						})}
					</div>
				</div>
				<div className="about-text">
					<h1 className="about-text-title">ABOUT</h1>
					<span className="about-text-subtitle">myself</span>
					<p className="about-text-info">
						I'm a junior full stack developer. I studied marketing, but I found my passion for web development. I started my journey by
						self-training and then successfully completed an intensive coding bootcamp with Boolean, UK.
					</p>
					<br />
					<p className="about-text-info">
						My first role as a junior frontend developer started with Ecodesk. Throughout my time at Ecodesk, I designed and developed new featuers using angular and I look forward to continuing the development of my technical skills even further. 
						<span className="about-subtext">I describe myself as someone who always has a positive attitude and is not afraid to try new things.</span>
					</p>
				</div>
			</div>
			<div className="about-skills">
				<h2>My Skills</h2>
				<div className="skills-container">
					<div className="skill-row">
						{group_icons.map((icon, index) => {
							return (
								<div className="skill-groups" key={index}>
									<img src={icon.img} alt={icon.alt} />
									<span>{icon.title}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
