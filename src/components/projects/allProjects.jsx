import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import { faFolder } from "@fortawesome/free-solid-svg-icons";

import "./styles/allProjects.css";
import Card from "../common/card";

const AllProjects = (props) => {
	const { shorten, customLink, customFlex } = props;
	return (
		<Card
			title="Projects"
			customBodyStyle={{ paddingTop: "0px" }}
			icon={faFolder}
		>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div
						className="all-projects-project"
						key={index}
						style={customFlex}
					>
						<Project
							logo={project.logo}
							title={project.title}
							duration={project.duration}
							description={project.description}
							linkText={project.linkText}
							link={customLink || project.link}
							tag={project.tag}
							shorten={shorten}
						/>
					</div>
				))}
			</div>
		</Card>
	);
};

export default AllProjects;
