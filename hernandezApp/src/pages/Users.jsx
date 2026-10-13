import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { users as initialUsers } from '../data/users'

function Users({ favoriteIds, onToggleFavorite }) {
	const [loadedUsers, setLoadedUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')

	const normalizedSearchTerm = searchTerm.trim().toLowerCase()
	const filteredUsers = loadedUsers.filter((user) => user.name.toLowerCase().includes(normalizedSearchTerm))

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadedUsers(initialUsers)
			setIsLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		document.title = `Users (${filteredUsers.length})`
	}, [filteredUsers.length])

	return (
		<section className="page">
			<div className="page-heading">
				<p className="eyebrow">The directory</p>
				<h1>All users</h1>
				<p className="intro">{filteredUsers.length} people in the directory.</p>
			</div>
			{isLoading && <Loader />}
			{!isLoading && (
				<label className="search-field">
					<span>Search by name</span>
					<input
						type="search"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						placeholder="Search users..."
					/>
				</label>
			)}
			{!isLoading && filteredUsers.length === 0 && <ErrorMessage />}
			{!isLoading && filteredUsers.length > 0 && (
				<div className="user-grid">
					{filteredUsers.map((user) => (
						<UserCard
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							company={user.company}
							isFavorite={favoriteIds.includes(user.id)}
							onToggleFavorite={() => onToggleFavorite(user.id)}
						/>
					))}
				</div>
			)}
		</section>
	)
}

export default Users
