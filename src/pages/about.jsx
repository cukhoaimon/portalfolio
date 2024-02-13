import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Card from "../components/common/card";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find(item => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<Logo />
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">{INFO.about.title}</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<Card
									icon={faFilePdf}
									title="Resume"
									stringLink="https://drive.google.com/file/d/1TmjciohSWm2VNqTmhcXd9Xamc8d-TikW/view?usp=sharing"
									customCardStyle={{
										marginTop: "30px",
										marginRight: "40px"
									}}
									customBodyStyle={{
										paddingTop: "0px"
									}}
								>
									<p>
										For more detail about my working experience, please take a
										look at my resume by click on me.
									</p>
								</Card>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img src="about.jpg" alt="about" className="about-image" />
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
