import React from 'react'
import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'
import ProfileRole from './ProfileRole'
import ProfileActionButton from './ProfileActionButton'

function UserProfile() {
	const userData = {
		name: 'Sudipto Raha',
		role: 'Software Engineer',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgfL96OohK57rcIqj-mGqc5vvL1VncrwGIOqFF4FwTw&s',
		imageSize: {
			width: '100px',
			height: '100px',
		},
	}

	function onClickHandler() {
		alert(`You started following ${userData.name}`)
	}

	return (
		<div className='profile-card'>
			<ProfileImage
				imgSrc={userData.image}
				imageSize={userData.imageSize}
			/>
			<ProfileName name={userData.name} styles={{ color: '#000000' }} />
			<ProfileRole role={userData.role} styles={{ color: '#000000' }} />
			<ProfileActionButton
				actionType={'Follow'}
				onClickHandler={onClickHandler}
			/>
		</div>
	)
}

export default UserProfile