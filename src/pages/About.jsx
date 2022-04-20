import React from "react";
import "../styles/About.css";
import { group_icons1, group_icons2, social_icons } from "../data/aboutData";

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
								<a href={icon.link} key={index} target='_blank' rel="noreferrer">
									<img
										src={icon.logo}
										alt={icon.alt}
									/>
								</a>
							);
						})}
					</div>
				</div>
				<div className="about-text">
					<h1 className="about-text-title">ABOUT</h1>
					<span className="about-text-subtitle">myself</span>
					<p className="about-text-info">
                    I'm a junior full stack developer. I studied marketing, but I found my passion for web development. I started my journey by self-training and then successfully completed an intensive coding bootcamp with Boolean, UK.
					</p>
                    <br/>
                    <p className="about-text-info">Throughout my time with Boolean, I thoroughly enjoyed learning new programming languages and I look forward to continuing the development of my technical skills even further. I describe myself as someone who always has a positive attitude and is not afraid to try new things.</p>
				</div>
			</div>
			<div className="about-skills">
				<h2>My Skills</h2>
				<div className="skills-container">
					<div className="skill-row1">
						{group_icons1.map((icon, index) => {
							return (
								<div className="skill-groups1" key={index}>
									<img src={icon.img} alt={icon.alt} />
									<span>{icon.title}</span>
								</div>
							);
						})}
					</div>
					<div className="skill-row2">
						{group_icons2.map((icon, index) => {
							return (
								<div className="skill-groups1" key={index}>
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
