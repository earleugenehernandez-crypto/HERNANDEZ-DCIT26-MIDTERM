import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
  const navigate = useNavigate()

	return (
		<section className="page hero-page">
			<p className="eyebrow">A small, friendly directory</p>
			<h1>Meet the people behind the work.</h1>
			<p className="intro">Browse the directory to learn who is here, what they do, and where they make an impact.</p>
			<Button label="Browse all users" variant="primary" onClick={() => navigate('/users')}>
				<span aria-hidden="true">-&gt;</span>
			</Button>
		</section>
	)
}

export default Home
