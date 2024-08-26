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
						I'm a front-end developer with two years of experience in the
						industry. Although I initially studied marketing, I discovered my
						passion for web development and transitioned into this field. My
						journey began with self-training, followed by successfully
						completing an intensive coding bootcamp with Boolean, UK.
					</p>
					<br />
					<p className="about-text-info">
						I have designed and developed new features using React, and over the
						past two years, I have continued to build my technical skills and
						deepen my expertise in front-end development.
						<span className="about-subtext">
							I describe myself as someone who always has a positive attitude
							and is not afraid to try new things.
						</span>
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
