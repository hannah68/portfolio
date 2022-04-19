import React from "react";
import "../styles/Contact.css";
import { social_icons } from "../data/aboutData";

const Contact = () => {
	return (
		<div className="contact-page">
			<h1>Let's Talk!</h1>
			<div className="contacts">
				<div className="contacts-media">
					<p>Get connected with me</p>
					<div className="contacts-media-link">
						{social_icons.map((icon, index) => {
							return (
								<a href={icon.link} key={index}>
									<img src={icon.logo} alt={icon.alt} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
