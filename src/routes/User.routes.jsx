import { lazy } from 'react'

import UserAdd from '../pages/user/UserAdd'
import UserUpdate from '../pages/user/UserUpdate'
import UserDelete from '../pages/user/UserDelete'
// import UserList from '../pages/user/UserList'
const UserList = lazy(() => import('../pages/user/UserList'))

const UserRoutes = [
	{ path: 'user-add', element: <UserAdd /> },
	{ path: 'user-update', element: <UserUpdate /> },
	{ path: 'user-delete', element: <UserDelete /> },
	{ path: 'user-list', element: <UserList /> },
]

export default UserRoutes