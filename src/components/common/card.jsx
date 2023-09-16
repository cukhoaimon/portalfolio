import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
	const { icon, title, children, customBodyStyle, hasRef } = props;
	const navigate = useNavigate();
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div
						className="card-title"
						onClick={
							hasRef
								? () => navigate(`${title.toLowerCase()}`)
								: null
						}
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
