import React from 'react'

function ProfileImage({ imgSrc, imageSize }) {
	const { width, height } = imageSize

	return (
		<>
			<img
				style={{
					width: width,
					height: height,
					borderRadius: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				className='profile-img'
				src={imgSrc}
				alt='user-profile-image'
			/>
		</>
	)
}

export default ProfileImage