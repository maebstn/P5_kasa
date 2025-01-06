import React, { useState, useEffect } from 'react';
import Collapse from '../components/collapse/collapse.jsx';
import Slideshow from '../components/slideshow/slideshow.jsx';
import Information from '../components/information/information.jsx';
import { useParams } from 'react-router-dom'; // Pour récupérer l'ID depuis l'URL
import '../index.scss';

function Logement() {
	const { id } = useParams(); // Récupère l'ID depuis l'URL
	const [logement, setLogement] = useState(null);

	useEffect(() => {
		// Charger les données du fichier JSON
		fetch('/logement.json')
			.then((response) => response.json())
			.then((data) => {
				// Trouver le logement avec l'ID correspondant
				const logementData = data.find((item) => item.id === id); // Comparer les IDs comme des chaînes de caractères
				setLogement(logementData);
			})
			.catch((error) =>
				console.error('Erreur lors de la récupération des données :', error)
			);
	}, [id]); // Rechargement lorsque l'ID change

	// Vérification si 'logement' est null ou undefined avant d'afficher les Collapses
	if (!logement) {
		return <div>Chargement en cours...</div>; // Affiche un message  pendant le chargement
	}

	return (
		<div className="main">
			<div>
				<Slideshow pictures={logement.pictures} />
				<Information logement={logement} />
				<div className="logement__collapse">
					<Collapse title={'Description'} content={logement.description} />
					<Collapse title={'Equipements'} content={logement.equipments} />
				</div>
			</div>
		</div>
	);
}

export default Logement;
