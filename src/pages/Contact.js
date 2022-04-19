import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
	const HannahGmail = "mailto:reihaneh.naderi1989@gmail.com";
	const HannahLinkedin =
		"https://www.linkedin.com/in/reihaneh-naderi-58b136112/";
	const HannahGithub = "https://github.com/hannah68";

	return (
		<div className="contact-page">
			<h1>Let's Talk!</h1>
			<div className="contacts">
				<div className="contacts-email">
					<Link to={HannahGmail}>
						<img src="./assets/images/gmail-dark.svg" alt="gmail"/>
					</Link>
					<span>Send me an email</span>
				</div>
				<div className="contacts-media">
					<p>Get connected with me</p>
					<div className="contacts-media-link">
						<Link to={HannahLinkedin}>
							<img src="./assets/images/linkedin-dark.svg" alt="linkedin"/>
						</Link>
						<Link to={HannahGithub}>
							<img src="./assets/images/github-dark.svg" alt="github"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
