import { Link } from 'react-router'

function Dashboard() {
	return (
		<main className='dashboard-page'>
			<section className='dashboard-card'>
				<h1 className='dashboard-title'>Dashboard</h1>

				<p className='dashboard-description'>
					Welcome! You have successfully accessed the protected
					dashboard.
				</p>

				<div className='dashboard-actions'>
					<Link to='/' className='dashboard-button'>
						Home
					</Link>

					<Link to='/profile' className='dashboard-button'>
						Profile
					</Link>

					<Link to='/settings' className='dashboard-button'>
						Settings
					</Link>
				</div>
			</section>
		</main>
	)
}

export default Dashboard