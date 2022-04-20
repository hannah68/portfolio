import "../styles/Home.css";

import { Link } from "react-router-dom";

import { PAGE_LINK } from "../config/config";

const Home = () => {
	return (
		<div className="name-container">
			<h1 className="name">REIHANEH NADERI</h1>
			<h3 className="info">Software developer based in the UK</h3>
			<div className="btn-container">
				<Link className="btn btn-project" to={PAGE_LINK.projects}>
					View Projects
				</Link>
				<Link className="btn btn-contact" to={PAGE_LINK.contact}>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Home;
