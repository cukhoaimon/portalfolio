import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faSignature } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import articles from "../data/articles";

import "./styles/homepage.css";
import Card from "../components/common/card";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find(item => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<Logo />

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a href={INFO.socials.github} rel="noopenner">
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a href={INFO.socials.linkedin} rel="noopenner">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>

							<a href={`mailto:${INFO.main.email}`} rel="noopenner">
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects shorten={true} customLink={"projects"} />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								<Card
									icon={faSignature}
									title="Articles"
									customBodyStyle={{ paddingTop: "10px" }}
									linkTo={"/articles"}
								>
									{articles.map((article, index) => (
										<div
											className="homepage-article"
											key={(index + 1).toString()}
										>
											<Article
												key={(index + 1).toString()}
												date={article.date}
												title={article.title}
												description={article.description}
												link={article.link}
											/>
										</div>
									))}
								</Card>
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
