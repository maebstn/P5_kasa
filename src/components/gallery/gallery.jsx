import React, { useState, useEffect } from 'react';
import './gallery.scss';
import Card from '../card/card.jsx';

function Galery() {
	const [logements, setLogements] = useState([]);

	useEffect(() => {
		fetch('/logement.json') // Le fichier JSON est dans le dossier public
			.then((response) => response.json())
			.then((data) => setLogements(data))
			.catch((error) =>
				console.error('Erreur lors de la récupération des données:', error)
			);
	}, []);

	return (
		<div className="card__list">
			{logements.map((item) => (
				<Card
					key={item.id}
					id={item.id}
					image={item.cover}
					title={item.title}
				/>
			))}
		</div>
	);
}

export default Galery;
