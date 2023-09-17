import React from "react";

import Article from "./article";

function ArticleList({ articles }) {
	return (
		<div className="articles-container">
			<div className="articles-wrapper">
				{articles.map((article, index) => (
					<div className="articles-article" key={(index + 1).toString()}>
						<Article
							key={(index + 1).toString()}
							date={article.date}
							title={article.title}
							description={article.description}
							link={article.link}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ArticleList;
