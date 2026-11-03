import React from "react";

import CaseStudy from "../../components/CaseStudy";
import { touchscreenCaseStudy } from "../../data/touchscreenCaseStudy";

const TouchScreen = () => {
	return <CaseStudy study={touchscreenCaseStudy} />;
};

export default TouchScreen;
