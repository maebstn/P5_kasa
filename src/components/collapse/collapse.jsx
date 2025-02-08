import './collapse.scss';
import React, { useState } from 'react'; // Hook de React pour gérer l'état local
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Le composant collapse reçoit deux props title et content
function Collapse({ title, content }) {
	//useState pour définir l'ouverture et la fermeture d'une collapse et donc si le contenu est visible, l'état initial est false donc fermé / contenu non visible.
	const [Switch, setSwitch] = useState(false);
	//Au clic, on va utiliser la fonction setSwitch et donc inverser l'état inital de la collapse, si ouvert alors fermé, si fermé alors ouvert.
	const handleClick = () => {
		setSwitch(!Switch);
	};
	//Rendu du composant
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
				{Array.isArray(content) ? ( //Vérifie si content est un tableau
					//Si c'est un tableau, le code affiche une liste ul et utilise map pour afficher chaque li/equipement en associant une clé unique
					<ul className="collapse__content--visible--list">
						{content.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				) : (
					//Sinon, le code affiche un paragraphe
					<p>{content}</p>
				)}
			</div>
		</div>
	);
}

export default Collapse;
