import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'
import './App.css'

function App() {
	const [favoriteIds, setFavoriteIds] = useState([])
  const [darkMode, setDarkMode] = useState(false)

	function toggleFavorite(id) {
		setFavoriteIds((currentIds) => currentIds.includes(id)
			? currentIds.filter((favoriteId) => favoriteId !== id)
			: [...currentIds, id])
	}

  return (
    <div className={`app-shell${darkMode ? ' dark-mode' : ''}`}>
      <BrowserRouter>
        <Navbar
          favoriteCount={favoriteIds.length}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((currentMode) => !currentMode)}
        />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
