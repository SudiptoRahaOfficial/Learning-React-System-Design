import React from 'react'

function ProfileRole({ role, styles }) {
	const { color } = styles

	return (
		<>
			<p
				style={{ color: color, fontSize: '14px' }}
				className='profile-role'
			>
				{role}
			</p>
		</>
	)
}

export default ProfileRole