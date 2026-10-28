import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "../styles/CaseStudy.css";
import { PAGE_LINK } from "../config/config";

const ProtocolGraphDiagram = () => {
	return (
		<div className="cs-diagram cs-protocol-diagram">
			<p className="cs-diagram-label">Simplified protocol structure</p>

			<div className="cs-protocol-flow">
				<div className="cs-diagram-node">
					<span>01</span>
					<strong>Module Task</strong>
				</div>

				<div className="cs-diagram-arrow">→</div>

				<div className="cs-diagram-node">
					<span>02</span>
					<strong>Transfer</strong>
				</div>

				<div className="cs-diagram-arrow">→</div>

				<div className="cs-diagram-node">
					<span>03</span>
					<strong>Module Task</strong>
				</div>

				<div className="cs-diagram-branch">
					<div className="cs-diagram-arrow cs-diagram-arrow--down">↓</div>

					<div className="cs-diagram-node">
						<span>04</span>
						<strong>User Step</strong>
					</div>
				</div>
			</div>

			<p className="cs-diagram-caption">
				Simplified illustration of the graph-based protocol model. Not the
				production interface.
			</p>
		</div>
	);
};

const TransformationDiagram = () => {
	return (
		<div className="cs-diagram cs-transformation-diagram">
			<div className="cs-transformation-block">
				<span>Frontend</span>
				<strong>Visual Graph</strong>
				<p>Nodes + connections + positions</p>
			</div>

			<div className="cs-transformation-arrow">
				<span>↓</span>
			</div>

			<div className="cs-transformation-block cs-transformation-block--middle">
				<span>Frontend logic</span>
				<strong>Transformation Layer</strong>
				<p>Translate between representations</p>
			</div>

			<div className="cs-transformation-arrow">
				<span>↓</span>
			</div>

			<div className="cs-transformation-block">
				<span>Backend</span>
				<strong>API Model</strong>
				<p>Steps + connections + vessel slots</p>
			</div>

			<p className="cs-diagram-caption">
				The frontend and API represent the same protocol differently, so a
				transformation layer keeps the two models separate.
			</p>
		</div>
	);
};

const renderDiagram = (diagram) => {
	switch (diagram) {
		case "protocol":
			return <ProtocolGraphDiagram />;

		case "transformation":
			return <TransformationDiagram />;

		default:
			return null;
	}
};

const CaseStudy = ({ study }) => {
	return (
		<article className="cs-page">
			<Link to={PAGE_LINK.work} className="cs-back">
				<BsArrowLeft />
				Back to work
			</Link>

			<header className="cs-hero">
				<div className="cs-label">
					<span>{study.number} /</span>
					<span>Case Study</span>
				</div>

				<h1 className="cs-title">{study.title}</h1>

				<p className="cs-subtitle">{study.subtitle}</p>

				<div className="cs-meta">
					<div className="cs-meta-item">
						<span className="cs-meta-label">Role</span>
						<p>{study.role}</p>
					</div>

					<div className="cs-meta-item">
						<span className="cs-meta-label">Timeline</span>
						<p>{study.development}</p>
					</div>

					<div className="cs-meta-item cs-meta-stack">
						<span className="cs-meta-label">Stack</span>

						<div className="cs-stack">
							{study.stack.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>
					</div>
				</div>
			</header>

			<div className="cs-body">
				{study.sections.map((section, index) => (
					<section
						className={`cs-section ${
							section.highlight ? "cs-section--highlight" : ""
						}`}
						key={`${section.title}-${index}`}
					>
						{section.eyebrow && <p className="cs-eyebrow">{section.eyebrow}</p>}

						<div className="cs-section-content">
							<h2>{section.title}</h2>

							{section.intro && (
								<p className="cs-section-intro">{section.intro}</p>
							)}

							{section.paragraphs?.map((paragraph, paragraphIndex) => (
								<p key={paragraphIndex}>{paragraph}</p>
							))}

							{section.diagram && renderDiagram(section.diagram)}

							{section.quote && (
								<blockquote className="cs-highlight">
									{section.quote}
								</blockquote>
							)}

							{section.items && (
								<ul className="cs-list">
									{section.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							)}

							{section.subsections?.map((subsection, subsectionIndex) => (
								<div
									className="cs-subsection"
									key={`${subsection.title}-${subsectionIndex}`}
								>
									{subsection.number && (
										<span className="cs-subsection-number">
											{subsection.number}
										</span>
									)}

									<h3>{subsection.title}</h3>

									{subsection.paragraphs?.map((paragraph, paragraphIndex) => (
										<p key={paragraphIndex}>{paragraph}</p>
									))}

									{subsection.quote && (
										<blockquote className="cs-highlight cs-highlight--small">
											{subsection.quote}
										</blockquote>
									)}

									{subsection.items && (
										<ul className="cs-list">
											{subsection.items.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>
					</section>
				))}
			</div>

			{study.next && (
				<footer className="cs-next">
					<span>Next case study</span>

					<Link to={study.next.link}>
						{study.next.title}
						<BsArrowRight />
					</Link>
				</footer>
			)}
		</article>
	);
};

export default CaseStudy;
