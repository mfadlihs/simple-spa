import { Link, Navigate, useNavigate } from 'react-router-dom';
import './ArticleMenu.css';

export default function ArticleMenu(props) {
	return (
		<div className='articleMenu'>
			<h1>Some article you may be like</h1>
			{props.data.map(article => {
				return (
					<div className='list' key={article.id}>
						<Link to={`/article/${article.id}`} state={props.data}>
							{article.title}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
