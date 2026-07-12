import useLocalStorage from '../hooks/useLocalStorage'

function ThemeCard() {
	const [theme, settheme] = useLocalStorage('theme', 'dark')

	return (
		<section className='theme-card'>
			<h2 className='theme-title'>Theme Settings</h2>

			<p className='theme-description'>
				Current Theme:
				<span className='theme-badge'>{theme}</span>
			</p>

			<div className='theme-actions'>
				<button
					type='button'
					className='theme-button'
					onClick={() => settheme('light')}
				>
					Light
				</button>

				<button
					type='button'
					className='theme-button'
					onClick={() => settheme('dark')}
				>
					Dark
				</button>
			</div>
		</section>
	)
}

export default ThemeCard