import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import AppRouter from './components/approuter/approuter.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import du BrowserRouter pour le routage

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<AppRouter />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
