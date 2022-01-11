import jumbotron from '../Image/jumbotron.jpg';
import './Header.css';

export default function Header() {
	return (
		<header>
			<div className='imageContainer'>
				<img src={jumbotron} alt='jumbotron' />
			</div>
			<div className='container'>
				<div>
					<h1>Welcome to My Website</h1>
				</div>
			</div>
		</header>
	);
}
