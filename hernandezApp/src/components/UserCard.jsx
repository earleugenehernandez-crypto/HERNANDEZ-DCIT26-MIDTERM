import { Link } from 'react-router-dom'

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
	return (
		<article className="user-card">
			<span className="user-avatar">{name.charAt(0)}</span>
			<span className="user-card-copy">
				<strong>{name}</strong>
				<span>{email}</span>
				<span>{company}</span>
			</span>
			<button className="favorite-button" type="button" onClick={onToggleFavorite} aria-pressed={isFavorite}>
				{isFavorite ? 'Favorited' : 'Favorite'}
			</button>
			<Link className="view-details" to={`/users/${id}`}>View Details</Link>
		</article>
	)
}

export default UserCard
