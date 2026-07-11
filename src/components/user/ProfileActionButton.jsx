import React from 'react'

function ProfileActionButton({ actionType, onClickHandler }) {
	return (
		<>
			<button
				onClick={onClickHandler}
				style={{
					fontFamily: 'arial',
					fontSize: '14px',
					fontWeight: '600',
					padding: '4px 10px',
					borderRadius: '2px',
					border: 'none',
					outline: 'none',
					backgroundColor: '#242424',
					color: '#fff',
					cursor: 'pointer',
				}}
				className='action-button btn-hover'
			>
				{actionType}
			</button>
		</>
	)
}

export default ProfileActionButton