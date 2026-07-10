import React from 'react'
import { NavLink } from 'react-router'

function Header() {
	return (
		<div className='header'>
			<h2>
				<NavLink className='header-logo' to='/'>
					Header Component
				</NavLink>
			</h2>
			<ul>
				<li>
					<NavLink className='nav-link' to='/dashboard'>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-add'>
						Add User
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-update'>
						Update User
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-delete'>
						Delete User
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-list'>
						User List
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-signup'>
						User Signup
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/user-signin'>
						User Signin
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Header