import { useEffect, useState } from 'react';
import ArticleMenu from './ArticleMenu';
import './Article.css';

export default function Article() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getArticle() {
			const request = await fetch(
				'https://api.spaceflightnewsapi.net/v3/articles?_limit=200'
			);
			const responses = await request.json();

			var arr = [];
			while (arr.length < 10) {
				var r = Math.floor(Math.random() * 200);
				if (arr.indexOf(r) === -1) arr.push(r);
			}

			const dataTemp = arr.map(i => {
				return responses[i];
			});
			console.log(dataTemp);
			setLoading(false);
			setData(dataTemp);
		}
		getArticle();
	}, []);

	return (
		<div className='articleContainer'>
			{loading ? <progress /> : <ArticleMenu data={data} />}
		</div>
	);
}
