import React from 'react';
import Logo from '../../assets/logo-white.svg';
import './footer.scss';

function Footer() {
	return (
		<div className="footer">
			<img src={Logo} alt="Logo Kasa" className="footer__logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</div>
	);
}

export default Footer;
