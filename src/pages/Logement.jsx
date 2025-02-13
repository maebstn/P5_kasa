import React, { useState, useEffect } from 'react';
import Collapse from '../components/collapse/collapse.jsx';
import Slideshow from '../components/slideshow/slideshow.jsx';
import Information from '../components/information/information.jsx';
import { useParams, useNavigate } from 'react-router-dom'; // Importation de useNavigate
import '../index.scss';
import '../components/collapse/collapse.scss';

function Logement() {
	const { id } = useParams(); // Récupère l'ID depuis l'URL
	const [logement, setLogement] = useState(null); // Null car les données du logement ne sont pas encore stockées.
	const navigate = useNavigate(); // Initialisation du hook useNavigate

	useEffect(() => {
		fetch('/logement.json') //Demande les données depuis le fichier
			.then((response) => response.json()) //Convertit la réponse en JSON
			.then((data) => {
				// Trouver le logement avec l'ID correspondant
				const logementData = data.find((item) => item.id === id); // Comparaison des IDs comme des chaînes de caractères
				if (logementData) {
					setLogement(logementData);
				} else {
					// Si le logement n'est pas trouvé, redirection vers la page d'erreur
					navigate('/error');
				}
			})
			.catch((error) =>
				console.error('Erreur lors de la récupération des données :', error)
			);
	}, [id, navigate]); //UseEffect sera déclenché quand id ou navigate changera

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
