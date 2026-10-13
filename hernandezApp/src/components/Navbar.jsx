import { NavLink } from 'react-router-dom'

function Navbar({ favoriteCount, darkMode, onToggleTheme }) {
	return (
		<header className="navbar">
			<NavLink className="brand" to="/">People Directory</NavLink>
			<nav aria-label="Main navigation">
				<NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
				<NavLink className="nav-link" to="/users">Users</NavLink>
				<NavLink className="nav-link" to="/about">About</NavLink>
				<span className="favorites-count">Favorites: {favoriteCount}</span>
				<button className="theme-button" type="button" onClick={onToggleTheme}>
					{darkMode ? 'Light mode' : 'Dark mode'}
				</button>
			</nav>
		</header>
	)
}

export default Navbar
