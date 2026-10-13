import { Link } from 'react-router-dom'

function UserCard({ user }) {
	return (
		<Link className="user-card" to={`/users/${user.id}`}>
			<span className="user-avatar">{user.name.charAt(0)}</span>
			<span className="user-card-copy">
				<strong>{user.name}</strong>
				<span>{user.role} at {user.company}</span>
			</span>
			<span className="user-card-arrow" aria-hidden="true">-&gt;</span>
		</Link>
	)
}

export default UserCard
