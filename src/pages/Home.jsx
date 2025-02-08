import React from 'react';
import Banner from '../components/banner/banner.jsx';
import HomeBanner from '../assets/paysage.svg';
import Galery from '../components/gallery/gallery.jsx';

function Home() {
	return (
		<div className="main">
			<Banner title="Chez vous, partout et ailleurs" image={HomeBanner} />
			<Galery />
		</div>
	);
}

export default Home;
