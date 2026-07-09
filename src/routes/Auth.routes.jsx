import Signup from '../pages/auth/Signup'
import Signin from '../pages/auth/Signin'

const AuthRoutes = [
	{ path: 'user-signup', element: <Signup /> },
	{ path: 'user-signin', element: <Signin /> },
]

export default AuthRoutes