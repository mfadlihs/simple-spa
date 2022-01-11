import './Contact.css';

export default function Contact() {
	return (
		<div className='contactContainer'>
			<div className='layer'>
				<h2>You can contact me at : </h2>
				<ul>
					<li className='instagram'>
						<i className='fab fa-instagram' />
						Instagram
					</li>
					<li className='facebook'>
						<i className='fab fa-facebook-square' />
						Facebook
					</li>
					<li className='discord'>
						<i className='fab fa-discord' />
						Discord
					</li>
					<li className='email'>
						<i className='far fa-envelope' />
						Email
					</li>
				</ul>
			</div>
		</div>
	);
}
