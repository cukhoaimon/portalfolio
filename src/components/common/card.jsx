import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";
import { useNavigate } from "react-router-dom";

const Card = props => {
	const {
		icon,
		title,
		children,
		customBodyStyle,
		customCardStyle,
		linkTo,
		stringLink
	} = props;
	const navigate = useNavigate();
	return (
		<div
			className="card"
			style={customCardStyle || {}}
			onClick={stringLink ? () => window.open(stringLink) : null}
		>
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div
						className="card-title"
						onClick={linkTo ? () => navigate(`${linkTo.toLowerCase()}`) : null}
					>
						{title}
					</div>
				</div>
				<div className="card-body" style={customBodyStyle || {}}>
					<div className="card-text">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
