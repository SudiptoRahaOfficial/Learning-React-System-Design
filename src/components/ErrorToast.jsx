import { useEffect, useState } from 'react'

function ErrorToast({ message, duration = 5000 }) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (!message) return

		setVisible(true)

		const timer = setTimeout(() => {
			setVisible(false)
		}, duration)

		return () => clearTimeout(timer)
	}, [message, duration])

	if (!message || !visible) return null

	return (
		<div
			style={{
				position: 'fixed',
				top: '20px',
				right: '20px',
				minWidth: '300px',
				padding: '15px 20px',
				borderRadius: '4px',
				backgroundColor: '#b30000',
				color: '#fff',
				fontFamily: 'Arial, sans-serif',
			}}
		>
			<span>{message}</span>
		</div>
	)
}

export default ErrorToast