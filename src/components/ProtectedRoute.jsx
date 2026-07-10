import React from 'react'
import { Navigate } from 'react-router'
import Unauthorized from '../pages/auth/Unauthorized'

function ProtectedRoute({ children, allowedRoles }) {
	// login from token/locastorage/api
	const user = { login: true, role: 'user' }
	// uncomment the line below & commentout the line above to see runtime error handling
	// const user = undefined

	// 401 -> not logged in
	if (!user?.login) {
		return <Navigate to='/user-signin' replace />
	}

	// 403 -> logged in but no premission
	if (user?.role !== 'admin') {
		return <Unauthorized />
	}
	return children
}

export default ProtectedRoute