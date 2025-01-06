import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card({ image, title, id }) {
	return (
		<Link to={`/logement/${id}`}>
			<article className="card__logement">
				<img src={image} alt={title} className="card__image" />
				<h3 className="card__title">{title}</h3>
				<div className="card__overlay"></div>
			</article>
		</Link>
	);
}

export default Card;
