import React from 'react';
import Banner from '../components/banner/banner.jsx';
import ImgBanner from '../assets/montagne.svg';
import AllCollapse from '../components/allcollapse/allcollapse.jsx';

function About() {
	return (
		<div className="main">
			<Banner image={ImgBanner} />
			<AllCollapse />
		</div>
	);
}

export default About;
