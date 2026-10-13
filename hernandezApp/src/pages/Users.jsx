import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { users as initialUsers } from '../data/users'

function Users() {
	const [loadedUsers, setLoadedUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [favoriteIds, setFavoriteIds] = useState([])

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadedUsers(initialUsers)
			setIsLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	function toggleFavorite(id) {
		setFavoriteIds((currentIds) => currentIds.includes(id)
			? currentIds.filter((favoriteId) => favoriteId !== id)
			: [...currentIds, id])
	}

	return (
		<section className="page">
			<div className="page-heading">
				<p className="eyebrow">The directory</p>
				<h1>All users</h1>
				<p className="intro">{loadedUsers.length} people in the directory.</p>
			</div>
			{isLoading && <Loader />}
			{!isLoading && loadedUsers.length === 0 && <ErrorMessage />}
			{!isLoading && loadedUsers.length > 0 && (
				<div className="user-grid">
					{loadedUsers.map((user) => (
						<UserCard
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							company={user.company}
							isFavorite={favoriteIds.includes(user.id)}
							onToggleFavorite={() => toggleFavorite(user.id)}
						/>
					))}
				</div>
			)}
		</section>
	)
}

export default Users
