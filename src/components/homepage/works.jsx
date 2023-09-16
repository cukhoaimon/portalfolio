import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import Work from "./work";

const Works = () => {
	return (
		<div className="works">
			<Card icon={faBriefcase} title="Work" hasRef={null}>
				<div className="works-body">
					<Work
						title="Computer Security Club - FIT@HCMUS"
						subtitle="Researcher"
						duration="March 2023 - Present"
						img={
							<img
								src="./blackpinker.jpg"
								alt="work"
								className="work-image"
							/>
						}
					/>

					<Work
						title="Google Developer Clubs VNUHCM-US"
						subtitle="Backend specialist"
						duration="November 2022 - Present"
						img={
							<img
								src="./gdsc.png"
								alt="work"
								className="work-image"
							/>
						}
					/>

					<Work
						title="Freelancer"
						subtitle="Data Analyst"
						duration="August 2022 - January 2023"
					/>
				</div>
			</Card>
		</div>
	);
};

export default Works;
