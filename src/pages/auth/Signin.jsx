import { useRef } from 'react'
import { Link } from 'react-router'

function Signin() {
	const email = useRef('')
	const password = useRef('')

	const handleSubmit = (event) => {
		event.preventDefault()
		alert(`${email.current.value} | ${password.current.value}`)
	}

	return (
		<main className='auth-page'>
			<section className='auth-card'>
				<h1 className='auth-title'>Sign In</h1>

				<p className='auth-description'>
					Sign in to access your account - Uncontrolled
				</p>

				<form className='auth-form' onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>

						<input
							ref={email}
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email'
							autoComplete='email'
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Password</label>

						<input
							ref={password}
							id='password'
							type='password'
							name='password'
							placeholder='Enter your password'
							autoComplete='current-password'
							required
						/>
					</div>

					<button type='submit' className='auth-button'>
						Sign In
					</button>
				</form>

				<p className='auth-footer'>
					Don't have an account?{' '}
					<Link to='/user-signup'>Sign Up</Link>
				</p>
			</section>
		</main>
	)
}

export default Signin