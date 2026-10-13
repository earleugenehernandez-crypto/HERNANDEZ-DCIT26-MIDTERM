import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button'
import { users } from '../data/users'

function UserDetails() {
	const { id } = useParams()
	const [isArchived, setIsArchived] = useState(false)
	const user = users.find((candidate) => String(candidate.id) === id)

	if (!user) {
		return (
			<section className="page empty-state">
				<p className="eyebrow">User not found</p>
				<h1>That profile does not exist.</h1>
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
			<div className="profile-action">
				<Button label="Archive profile" variant="danger" onClick={() => setIsArchived(true)}>
					<span aria-hidden="true">!</span>
				</Button>
				{isArchived && <p className="action-message">Profile marked for archiving.</p>}
			</div>
		</section>
	)
}

export default UserDetails
