import { Link } from 'react-router'

function Unauthorized() {
	return (
		<main className='status-page'>
			<div className='status-card'>
				<h1 className='status-code'>403</h1>

				<h2 className='status-title'>Unauthorized</h2>

				<p className='status-description'>
					You don't have permission to access this page.
				</p>

				<Link to='/' className='status-button'>
					Return Home
				</Link>
			</div>
		</main>
	)
}

export default Unauthorized