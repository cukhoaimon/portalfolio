import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ArticleList from "../components/articles/ArticleList";

import INFO from "../data/user";
import SEO from "../data/seo";
import articles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find(item => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<Logo width={46} localClass="articles-logo" />
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">{INFO.articles.title}</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<ArticleList articles={articles} />
					</div>
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
