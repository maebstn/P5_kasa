import React from 'react';
import './banner.scss';

function Banner(props) {
	return (
		<div className="banner">
			<h1 className="banner__title">{props.title}</h1>
			<img src={props.image} alt="Paysage Bannière" className="banner__img" />
			<div className="banner__overlay"></div>
		</div>
	);
}

export default Banner;
