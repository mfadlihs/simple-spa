import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext, loginKey, setLoginContext } from '../Routes';
import './Login.css';

export default function Login() {
	const Navigate = useNavigate();
	const isLogin = useContext(loginContext);
	const setLogin = useContext(setLoginContext);

	const Submit = event => {
		setLogin(!isLogin);
		Navigate('/');
		sessionStorage.setItem(loginKey, true);
		event.preventDefault();
	};

	useEffect(() => {
		let loginTemp = sessionStorage.getItem(loginKey);
		loginTemp === 'true' ? Navigate('/') : Navigate('/login');
		console.log(isLogin);
	}, []);

	return (
		<div className='login-container'>
			<div className='loginCard'>
				<div className='heading'>
					<h2>Login</h2>
				</div>
				<div className='content'>
					<form onSubmit={Submit}>
						<div className='username'>
							<label htmlFor='username'>Username </label>
							<br />
							<input type='text' id='username' placeholder='username' />
						</div>
						<div className='password'>
							<label htmlFor='password'>Password</label>
							<br />
							<input type='password' id='password' placeholder='password' />
						</div>
						<button>Login</button>
						<div className='clear' />
					</form>
				</div>
			</div>
			<p>*Pencet login aja langsung</p>
		</div>
	);
}
