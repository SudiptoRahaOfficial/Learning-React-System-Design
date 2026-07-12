import { Link } from 'react-router'

function Signin() {
	const handleSubmit = (event) => {
		event.preventDefault()

		// TODO: Implement sign in logic
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