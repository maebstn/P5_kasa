import React from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Logement from '../../pages/Logement';
import ErrorPage from '../../pages/Error';
import { Routes, Route } from 'react-router-dom'; // Importation correcte

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/logement/:id" element={<Logement />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}

export default AppRouter;
