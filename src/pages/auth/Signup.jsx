import React, { useState } from 'react'
import { Link } from 'react-router'

function Signup() {
	const [name, setname] = useState('')
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(name, email, password)
	}

	return (
		<main className='auth-page'>
			<section className='auth-card'>
				<h1 className='auth-title'>Create Account</h1>

				<p className='auth-description'>
					Create a new account to get started - Controlled
				</p>

				<form className='auth-form' onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='name'>Full Name</label>

						<input
							onChange={(event) => setname(event.target.value)}
							value={name}
							id='name'
							type='text'
							name='name'
							placeholder='Enter your full name'
							autoComplete='name'
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email</label>

						<input
							onChange={(event) => setemail(event.target.value)}
							value={email}
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
							onChange={(event) =>
								setpassword(event.target.value)
							}
							value={password}
							id='password'
							type='password'
							name='password'
							placeholder='Create a password'
							autoComplete='new-password'
							required
						/>
					</div>

					<button type='submit' className='auth-button'>
						Create Account
					</button>
				</form>

				<p className='auth-footer'>
					Already have an account?{' '}
					<Link to='/user-signin'>Sign In</Link>
				</p>
			</section>
		</main>
	)
}

export default Signup