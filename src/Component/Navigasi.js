import { Link } from 'react-router-dom';
import './Navigasi.css';

export default function Nav() {
	return (
		<nav>
			<div>
				<Link to='/'>Home</Link>
			</div>
			<div>
				<Link to='about'>About</Link>
			</div>
			<div>
				<Link to='contact'>Contact</Link>
			</div>
			<div>
				<Link to='article'>Article</Link>
			</div>
		</nav>
	);
}
