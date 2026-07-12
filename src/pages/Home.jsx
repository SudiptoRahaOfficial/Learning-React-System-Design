import React from 'react'
import UserProfile from '../components/user/UserProfile'
import ThemeCard from '../components/ThemeCard'

function Home() {
	return (
		<div>
			<h2>Home Page</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
				<UserProfile />
				<ThemeCard />
			</div>
		</div>
	)
}

export default Home