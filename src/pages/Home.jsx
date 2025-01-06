import React from 'react';
import './App.scss';
import Banner from '../components/banner/banner.jsx';
import Logo from '../assets/paysage.svg';
import Galery from '../components/galery/galery.jsx';

function Home() {
	return (
		<div className="main">
			<Banner title="Chez vous, partout et ailleurs" image={Logo} />
			<Galery />
		</div>
	);
}

export default Home;
