import React from "react";

import CaseStudy from "../../components/CaseStudy";
import { protocolBuilderCaseStudy } from "../../data/caseStudyData";

const ProtocolBuilder = () => {
	return <CaseStudy study={protocolBuilderCaseStudy} />;
};

export default ProtocolBuilder;
