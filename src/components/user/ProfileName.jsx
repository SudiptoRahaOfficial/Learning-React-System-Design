import React from 'react'

function ProfileName({ name, styles }) {
	const { color } = styles

	return (
		<>
			<h3 style={{ color: color }} className='profile-name'>
				{name}
			</h3>
		</>
	)
}

export default ProfileName