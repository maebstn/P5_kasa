import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './header.scss';

function Header() {
	return (
		<div className="navbar">
			<img src={Logo} alt="Logo Kasa" className="navbar__logo" />
			<ul className="navbar__link">
				<li>
					<Link to="/" className="navbar__link--style">
						Accueil
					</Link>
				</li>
				<li>
					<Link to="/about" className="navbar__link--style">
						À propos
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
