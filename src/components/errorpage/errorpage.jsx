import './errorpage.scss';
import { Link } from 'react-router-dom';

function Error() {
	return (
		<div className="error">
			<h1 className="error__title">404</h1>
			<p className="error__subtitle">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<p>
				<Link to="/" className="error__redirection">
					Retourner sur la page d’accueil
				</Link>
			</p>
		</div>
	);
}

export default Error;
