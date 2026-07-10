import { Link } from 'react-router'

function NotFound() {
	return (
		<main className='status-page'>
			<div className='status-card'>
				<h1 className='status-code'>404</h1>

				<h2 className='status-title'>Page Not Found</h2>

				<p className='status-description'>
					The page you are looking for doesn't exist or may have been
					moved.
				</p>

				<Link to='/' className='status-button'>
					Go Back Home
				</Link>
			</div>
		</main>
	)
}

export default NotFound