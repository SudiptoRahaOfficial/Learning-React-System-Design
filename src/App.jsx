import React from 'react'
import { Route, Routes } from 'react-router'

import Header from './components/Header'

import AuthRoutes from './routes/Auth.routes'
import UserRoutes from './routes/User.routes'

function App() {
	const AllRoutes = [...AuthRoutes, ...UserRoutes]

	return (
		<>
			<h1
				style={{
					fontFamily: 'arial',
					fontSize: '28px',
					textAlign: 'center',
					margin: '40px 0',
				}}
			>
				Learning React Application System Design
			</h1>

			<Header />
			<Routes>
				{AllRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</>
	)
}

export default App