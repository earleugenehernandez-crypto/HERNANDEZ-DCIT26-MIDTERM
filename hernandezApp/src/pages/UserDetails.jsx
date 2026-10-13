import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users } from '../data/users'

function UserDetails() {
	const { id } = useParams()
	const [user, setUser] = useState(null)

	useEffect(() => {
		const timer = setTimeout(() => {
			const matchingUser = users.find((candidate) => String(candidate.id) === id)
			setUser(matchingUser ?? null)
		}, 0)

		return () => clearTimeout(timer)
	}, [id])

	useEffect(() => {
		document.title = user?.name ?? 'User not found'
	}, [user])

	if (!user) {
		return (
			<section className="page empty-state">
				<h1>User not found.</h1>
				<Link className="text-link" to="/users">Back to all users</Link>
			</section>
		)
	}

	return (
		<section className="page detail-page">
			<Link className="text-link" to="/users">&lt;- Back to users</Link>
			<div className="profile-header">
				<span className="profile-avatar">{user.name.charAt(0)}</span>
				<div>
					<p className="eyebrow">User profile</p>
					<h1>{user.name}</h1>
					<p className="intro">{user.role} at {user.company}</p>
				</div>
			</div>
			<dl className="profile-facts">
				<div><dt>Email</dt><dd>{user.email}</dd></div>
				<div><dt>Company</dt><dd>{user.company}</dd></div>
				<div><dt>Role</dt><dd>{user.role}</dd></div>
			</dl>
		</section>
	)
}

export default UserDetails
