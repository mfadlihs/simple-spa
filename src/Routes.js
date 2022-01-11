import React, { createContext, useEffect, useState } from 'react';
import Login from './Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import App from './App';
import Home from './Component/Home';
import About from './Component/About';
import Article from './Component/Article';
import Contact from './Component/Contact';
import { ArticleDetail } from './Component/ArticleDetail';

export const loginContext = createContext();
export const setLoginContext = createContext();
export const loginKey = 'login';

export default function Root() {
	let [login, setLogin] = useState(false);
	const Navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem(loginKey) === null) {
			sessionStorage.setItem(loginKey, false);
		} else {
			let loginKeyTemp = sessionStorage.getItem(loginKey);
			if (loginKeyTemp === 'true') {
				setLogin(true);
			} else {
				setLogin(false);
			}
		}

		let loginTemp = sessionStorage.getItem(loginKey);
		loginTemp === 'true' ? Navigate('/') : Navigate('/login');
	}, []);

	return (
		<div id='container'>
			<loginContext.Provider value={login}>
				<setLoginContext.Provider value={setLogin}>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/' element={<App />}>
							<Route path='' element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='contact' element={<Contact />} />
							<Route path='article' element={<Article />} />
							<Route path='article/:id' element={<ArticleDetail />} />
						</Route>
					</Routes>
				</setLoginContext.Provider>
			</loginContext.Provider>
		</div>
	);
}
