import React from 'react';
import './information.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Information({ logement }) {
	// Composant qui prend 'logement' comme prop
	return (
		<div className="information">
			{/* Conteneur principal */}
			<div className="information__logement">
				{/* Informations sur le logement */}
				<h2 className="information__logement--title">{logement.title}</h2>
				{/* Titre du logement */}
				<p className="information__logement--location">{logement.location}</p>
				{/* Localisation du logement */}
				<div className="information__logement--tags">
					{/* Tags du logement */}
					{logement.tags.map((tag) => (
						<span key={tag} className="information__logement--tags--tag">
							{/* Affiche le contenu de chaque tag */}
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="information__hostreview">
				{/* Section contenant les informations et évaluations de l'hôte */}
				<div className="information__hostreview--info">
					{/* Conteneur des informations sur l'hôte */}
					<p className="information__hostreview--info--name">
						{logement.host.name} {/* Affiche le nom de l'hôte */}
					</p>
					<img
						className="information__hostreview--info--img"
						src={logement.host.picture} // Photo de l'hôte
						alt={logement.host.name} // Texte alternatif pour l'image
					/>
				</div>
				<div className="information__hostreview--rating">
					{Array.from({ length: 5 }).map(
						(
							_,
							index //_ignoré car les valeurs du tableau ne sont pas utilisée, juste les index de 0 à 4
						) => (
							<FontAwesomeIcon
								key={index}
								icon={faStar}
								className={
									index < logement.rating // Si l'indice de l'étoile est inférieur à la note
										? 'information__hostreview--rating--star' // étoile remplie
										: 'information__hostreview--rating--stargrey' // étoile vide
								}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default Information; //
