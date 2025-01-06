import React, { useState } from 'react';
import './slideshow.scss';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slideshow({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image active

	// Fonction pour passer à l'image suivante
	function nextPicture() {
		setCurrentIndex(
			currentIndex + 1 === pictures.length ? 0 : currentIndex + 1
		);
	}

	// Fonction pour passer à l'image précédente
	function prevPicture() {
		setCurrentIndex(
			currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
		);
	}

	return (
		<div className="carrousel">
			{pictures.length > 1 && (
				<FontAwesomeIcon
					icon={faAngleLeft}
					className="carrousel__arrow carrousel__arrow--prev"
					onClick={prevPicture}
				/>
			)}
			<img
				src={pictures[currentIndex]}
				alt={`Illustration n° ${currentIndex + 1}`}
				className="carrousel__image"
			/>
			{pictures.length > 1 && (
				<div className="carrousel__counter">
					{currentIndex + 1} / {pictures.length}
				</div>
			)}
			{pictures.length > 1 && (
				<FontAwesomeIcon
					icon={faAngleRight}
					className="carrousel__arrow carrousel__arrow--next"
					onClick={nextPicture}
				/>
			)}
		</div>
	);
}

export default Slideshow;
