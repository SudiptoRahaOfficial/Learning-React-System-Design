import NotFound from '../pages/auth/NotFound'
import Unauthorized from '../pages/auth/Unauthorized'

const OtherRoutes = [
	{ path: '*', element: <NotFound /> },
]

export default OtherRoutes