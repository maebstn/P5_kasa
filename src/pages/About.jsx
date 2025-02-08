import React, { useState, useEffect } from 'react';
import Banner from '../components/banner/banner.jsx';
import ImgBanner from '../assets/montagne.svg';
import Collapse from '../components/collapse/collapse.jsx';
import '../components/collapse/collapse.scss';

function About() {
	const [collapses, setCollapses] = useState([]); //useState stocke les données des composants Collapse. Initialisé à un tableau vide ([]).

	//useEffect, charge les données depuis le fichier JSON
	useEffect(() => {
		// Utilisation de fetch pour récupérer le fichier JSON depuis le dossier public
		fetch('/about.json')
			// Transforme la réponse en json
			.then((response) => response.json())
			//Met à jour l'état collapses avec les données du fichier JSON.
			.then((data) => setCollapses(data))
			//Gestion des erreurs
			.catch((error) =>
				console.error('Erreur lors de la récupération du fichier JSON:', error)
			);
	}, []); //UseEffect s'exécute qu'une seule fois au montage du composant

	return (
		<div className="main">
			<Banner image={ImgBanner} />
			<div className="about__collapse">
				{/*//On parcourt le tableau collapses définit précédemment avec les données du fichier json. Pour chaque item, une collapse est crée */}
				{collapses.map((item, index) => (
					//Collapse qui reçoit en prop une key, un titre et un contenu
					<Collapse key={index} title={item.title} content={item.content} />
				))}
			</div>
		</div>
	);
}

export default About;
