import { useEffect, useState } from 'react';
import './ArticleDetail.css';
import { useLocation, useParams, Link } from 'react-router-dom';

export function ArticleDetail(props) {
	const { state } = useLocation();
	const id = useParams().id;
	const [loading, setLoadng] = useState(true);
	const [details, setDetails] = useState([]);
	const [ubah, setUbah] = useState(0);

	useEffect(() => {
		async function requestDetailArticle() {
			const request = await fetch(
				`https://api.spaceflightnewsapi.net/v3/articles/${id}`
			);
			const responses = await request.json();
			setDetails(responses);
			setLoadng(false);
		}
		console.log(state);
		requestDetailArticle();
	}, [ubah]);

	function Ubah() {
		setUbah(Math.random());
		setLoadng(true);
	}

	return (
		<>
			{loading ? (
				<progress />
			) : (
				<div className='articleDetail'>
					<article>
						<h2>{details.title}</h2>
						<img src={`${details.imageUrl}`} alt='gambar' />
						<p>{details.summary}</p>
					</article>
					<aside>
						<ol>
							{state.map(article => {
								return (
									<li onClick={Ubah} key={article.id}>
										<Link to={`/article/${article.id}`} state={state}>
											{article.title}
										</Link>
									</li>
								);
							})}
						</ol>
					</aside>
				</div>
			)}
		</>
	);
}
