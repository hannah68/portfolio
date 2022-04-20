import { Link } from "react-router-dom";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

import "../styles/Home.css";

import { PAGE_LINK } from "../config/config";

const Header = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<header>
			<nav className="navbar">
				<div className="navbar__logo">
					<Link to={PAGE_LINK.home}>
						<img
							className="logo-img"
							src="../assets/images/small-logo.png"
							alt="reihaneh naderi"
						/>
					</Link>
				</div>
				<button
					className="hamburger"
					onClick={() => setIsNavExpanded(!isNavExpanded)}
				>
					<GrMenu className="menu" />
				</button>

				<ul
					className={isNavExpanded ? "navbar__lists expanded" : "navbar__lists"}
				>
					<li className="navbar__lists--item">
						<Link to={PAGE_LINK.home} onClick={() => setIsNavExpanded(false)}>
							Home
						</Link>
					</li>
					<li className="navbar__lists--item">
						<Link to={PAGE_LINK.about} onClick={() => setIsNavExpanded(false)}>
							About me
						</Link>
					</li>
					<li className="navbar__lists--item">
						<Link
							to={PAGE_LINK.projects}
							onClick={() => setIsNavExpanded(false)}
						>
							Projects
						</Link>
					</li>
					<li className="navbar__lists--item">
						<Link
							to={PAGE_LINK.contact}
							onClick={() => setIsNavExpanded(false)}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
