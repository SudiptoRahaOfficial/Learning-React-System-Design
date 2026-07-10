import UserAdd from '../pages/user/UserAdd'
import UserUpdate from '../pages/user/UserUpdate'
import UserDelete from '../pages/user/UserDelete'
import UserList from '../pages/user/UserList'

import ProtectedRoute from '../components/ProtectedRoute'

const UserRoutes = [
	{ path: 'user-add', element: <UserAdd /> },
	{ path: 'user-update', element: <UserUpdate /> },
	{ path: 'user-delete', element: <UserDelete /> },
	{
		path: 'user-list',
		element: (
			<ProtectedRoute>
				<UserList />
			</ProtectedRoute>
		),
	},
]

export default UserRoutes