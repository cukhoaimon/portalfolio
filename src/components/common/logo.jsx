import React from "react";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = ({ localClass }) => {
	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={80} />
	);

	return (
		<div
			className={localClass}
			style={{
				display: "flex",
				position: "fixed",
				right: "10px",
				bottom: "10px",
				zIndex: 999,
				border: "1px solid white",
				borderRadius: "50%",
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
			}}
			onClick={() => window.scrollTo(0, 0)}
		>
			{imageElement}
		</div>
	);
};

export default Logo;
