import UserCard from '../components/UserCard'
import { users } from '../data/users'

function Users() {
	return (
		<section className="page">
			<div className="page-heading">
				<p className="eyebrow">The directory</p>
				<h1>All users</h1>
				<p className="intro">{users.length} people in the directory.</p>
			</div>
			<div className="user-grid">
				{users.map((user) => <UserCard key={user.id} user={user} />)}
			</div>
		</section>
	)
}

export default Users
