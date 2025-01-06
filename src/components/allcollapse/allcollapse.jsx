import React, { useState, useEffect } from 'react';
import Collapse from '../collapse/collapse.jsx';
import './allcollapse.scss';

function AllCollapse() {
	const [collapses, setCollapses] = useState([]);

	useEffect(() => {
		// Utilisation de fetch pour récupérer le fichier JSON depuis le dossier public
		fetch('/about.json')
			.then((response) => response.json())
			.then((data) => setCollapses(data))
			.catch((error) =>
				console.error('Erreur lors de la récupération du fichier JSON:', error)
			);
	}, []);

	return (
		<div className="all-collapse">
			{collapses.map((item, index) => (
				<Collapse key={index} title={item.title} content={item.content} />
			))}
		</div>
	);
}

export default AllCollapse;
