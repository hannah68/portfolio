import { Routes, Route } from "react-router-dom";

import { PAGE_LINK } from "./config/config";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProtocolBuilder from "./pages/caseStudies/ProtocolBuilder";
import Monitoring from "./pages/caseStudies/Monitoring";

const App = () => {
	return (
		<div className="app">
			<Header />

			<main className="app-content">
				<Routes>
					<Route path={PAGE_LINK.home} element={<Home />} />
					<Route path={PAGE_LINK.about} element={<About />} />
					<Route path={PAGE_LINK.work} element={<Project />} />
					<Route path={PAGE_LINK.contact} element={<Contact />} />

					<Route
						path={PAGE_LINK.protocolBuilder}
						element={<ProtocolBuilder />}
					/>
					<Route path={PAGE_LINK.monitoring} element={<Monitoring />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
