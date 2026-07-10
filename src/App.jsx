import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

import Home from './pages/Home'
// importing dashboard page using lazy loading
const Dashboard = lazy(() => import('./pages/Dashboard'))

import Header from './components/Header'
const Products = lazy(() => import('./components/Products'))
import SuspenseLoader from './components/SuspenseLoader'

import AuthRoutes from './routes/Auth.routes'
import UserRoutes from './routes/User.routes'
import OtherRoutes from './routes/Other.routes'

function App() {
	const AllRoutes = [
		{ path: '/', element: <Home /> },
		{
			path: '/dashboard',
			element: (
				<Suspense fallback={<SuspenseLoader />}>
					<Dashboard />
				</Suspense>
			),
		},
		{
			path: '/products',
			element: (
				<Suspense fallback={<SuspenseLoader />}>
					<Products />
				</Suspense>
			),
		},
		...AuthRoutes,
		...UserRoutes,
		...OtherRoutes,
	]

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