// Importation de React pour pouvoir utiliser JSX et les fonctionnalités de React
import React from 'react';

// Importation de ReactDOM pour pouvoir rendre des éléments React dans le DOM
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import AppRouter from './components/approuter/approuter.jsx';

// Importation de BrowserRouter depuis 'react-router-dom' pour la gestion des routes avec un routage basé sur l'URL du navigateur
import { BrowserRouter } from 'react-router-dom';

// Création de la racine de l'application, en se basant sur l'id root
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendu de l'application dans le DOM
root.render(
	//Utilisation de strict mode pour détecter des problèmes dans l'application pendant le développement
	<React.StrictMode>
		{/* Utilisation BrowserRouter pour permettre la navigation entre les pages de l'application */}
		<BrowserRouter>
			<Header />
			<AppRouter />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
