import React from "react";

import "./styles/works.css";

function Work(props) {
	const { title, subtitle, duration, img } = props;

	return (
		<div className="work">
			{img || (
				<img src="./working.png" alt="work" className="work-image" />
			)}
			<div className="work-title">{title}</div>
			<div className="work-subtitle">{subtitle}</div>
			<div className="work-duration">{duration}</div>
		</div>
	);
}

export default Work;
