import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login/Login';
import jumbotron from './Image/jumbotron.jpg';
import { Link, Outlet } from 'react-router-dom';
import Nav from './Component/Navigasi';
import Header from './Component/Header';

function App() {
	return (
		<>
			<div id='container-menu'>
				<Header />
				<Nav />
				<Outlet />
			</div>
		</>
	);
}

export default App;
