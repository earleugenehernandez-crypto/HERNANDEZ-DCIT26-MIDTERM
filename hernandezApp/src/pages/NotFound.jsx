import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<section className="page empty-state">
			<p className="eyebrow">404 error</p>
			<h1>Page not found.</h1>
			<p className="intro">The page you are looking for has moved or never existed.</p>
			<Link className="primary-button" to="/">Return home -&gt;</Link>
		</section>
	)
}

export default NotFound
