import './collapse.scss';
import React, { useState } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Collapse({ title, content }) {
	const [Switch, setSwitch] = useState(false);

	const handleClick = () => {
		setSwitch(!Switch);
	};

	return (
		<div onClick={handleClick} className="collapse">
			<div className="collapse__header">
				<h3>{title}</h3>
				<FontAwesomeIcon
					icon={faAngleUp}
					className={`angle__up ${Switch ? 'angle__up--rotated' : ''}`}
				/>
			</div>
			<div
				className={`collapse__content ${
					Switch ? 'collapse__content--visible' : ''
				}`}
			>
				{Array.isArray(content) ? ( //Vérification si tableau
					<ul className="collapse__content--visible--list">
						{content.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				) : (
					<p>{content}</p>
				)}
			</div>
		</div>
	);
}

export default Collapse;
