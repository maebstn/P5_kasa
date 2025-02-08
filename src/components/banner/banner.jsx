import React from 'react';
import './banner.scss';

function Banner({ title, image }) {
	return (
		<div className="banner">
			<h1 className="banner__title">{title}</h1>
			<img src={image} alt="Paysage Bannière" className="banner__img" />
			<div className="banner__overlay"></div>
		</div>
	);
}

export default Banner;
