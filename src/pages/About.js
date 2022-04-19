import React from 'react'
import '../styles/About.css'
import { Link } from "react-router-dom"

const HannahLinkedin = "https://www.linkedin.com/in/reihaneh-naderi-58b136112/";
const HannahGithub = "https://github.com/hannah68";
const HannahGmail = "mailto:reihaneh.naderi1989@gmail.com";


const About = () => {

  return (
		<div className="about-page">
			<div className="about-infos">
				<div className="about-img-icon">
					<img src="./assets/images/mypic.png" className="about-img" alt='hannah pic'/>
					<div className="about-social-icons">
						<Link to={HannahGithub}>
							<img src='./assets/images/fa_github-square.svg' alt='github icon'/>
						</Link>
						<Link to={HannahLinkedin}>
                            <img src='./assets/images/linkedin.svg' alt='linkedin icon'/>
						</Link>
						<Link to={HannahGmail}>
                            <img src='./assets/images/gmail.svg' alt='gmail icon'/>
						</Link>
					</div>
				</div>
				<div className="about-text">
					<h1 className="about-text-title">ABOUT</h1>
                    <span className="about-text-subtitle">myself</span>
					<p className="about-text-info">
						I'm a self-taught junior front end developer. I studied marketing,
						but I found my passion for web development. I love to challenge
						myself and find solutions to problems. I build responsive websites
						with clean and modern designs.My goal is to learn more about UI
						effects and animations.
					</p>
				</div>
			</div>
			<div className="about-skills">
                <h2>My Skills</h2>
                <div className="skills-container">
                    <div className="skill-row1">
                        <div className="skill-groups1">
                            <img src="./assets/images/javascript.svg" alt="javascript icon" />
                            <span>Javascript</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/react.svg" alt="react icon" />
                            <span>React</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/typescript.svg" alt="typescript icon" />
                            <span>Typescript</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/node.svg" alt="node icon" />
                            <span>Node.js</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/express.svg" alt="express icon" />
                            <span>Express</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/prisma.svg" alt="prisma icon" />
                            <span>Prisma</span>
                        </div>
                        
                        
                    </div>
                    <div className="skill-row2">
                        {/* <div className="skill-groups1">
                            <img src="./assets/images/mongodb.svg" alt="" />
                            <span>MongoDB</span>
                        </div> */}
                         <div className="skill-groups1">
                            <img src="./assets/images/postgresql.svg" alt="postgress icon" />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/sass.svg" alt="sass icon" />
                            <span>SASS</span>
                        </div>
                        
                        <div className="skill-groups1">
                            <img src="./assets/images/figma.svg" alt="figma icon" />
                            <span>Figma</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/html.svg" alt="html icon" />
                            <span>HTML</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/css.svg" alt="css icon" />
                            <span>CSS</span>
                        </div>
                        <div className="skill-groups1">
                            <img src="./assets/images/bootstrap.svg" alt="bootstrap icon" />
                            <span>Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default About