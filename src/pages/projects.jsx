import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find(item => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<Logo width={46} localClass="projects-logo" />
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I've made, taught myself a bit. And all of these builds a
							bite.
						</div>

						<div className="subtitle projects-subtitle">
							I have worked on various projects in different fields, both during
							my university studies and my self-taught process. These fields
							include Web backend/frontend, Android security, Android automation
							testing, operating systems, computer networking, AI/ML, and more.
							Working on numerous projects has provided me with a broad
							perspective on the field of Information Technology and has helped
							me identify the future path I will pursue.
						</div>

						<div className="projects-list">
							<AllProjects customFlex={{ width: "100%" }} />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
