import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import axios from 'axios'
import { AxiosNozina, BaseApi, SaveToken } from '../../utils/token'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [errorMsg, setErrorMsg] = useState(null)

	const handleClickShowPassword = () => setShowPassword(prev => !prev)

	const navigate = useNavigate()

	async function handleLogin(user) {
		try {
			const { data } = await axios.post(`${BaseApi}/Account/login`, user)
			SaveToken(data.data)
			navigate(-1)
		} catch (error) {
			setErrorMsg('Invalid username or password')
			console.error(error)
		}
	}

	async function getCart() {
		try {
			const { data } = await AxiosNozina.get(`/Cart/get-products-from-cart`)
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		handleLogin({ userName, password })
	}

	return (
		<div className='lg:w-[30%] m-auto p-[20px] lg:p-0 py-[20px] lg:py-[100px] mb-[80px] lg:mb-[100px]'>
			<h1 className='text-[40px] lg:text-[55px]'>Log in to Exclusive</h1>
			<p>Enter your details below</p>

			<form
				onSubmit={handleSubmit}
				className='mt-6 grid grid-cols-1 gap-[20px] '
			>
				<TextField
					label='Name'
					variant='outlined'
					className='dark:invert'
					value={userName}
					onChange={e => setUserName(e.target.value)}
				/>

				<FormControl variant='outlined'
         className='dark:invert'>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={e => setPassword(e.target.value)}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton onClick={handleClickShowPassword} edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>

				{errorMsg && <p className='text-red-500'>{errorMsg}</p>}

				<button
					type='button'
					className='rounded-[5px] p-[14px] bg-transparent text-[#DB4444]'
				>
					<Link to={'/signup'}>Dont have account?</Link>
				</button>

				<button
					type='submit'
					className='rounded-[5px] p-[14px] bg-[#DB4444] text-white'
				>
					Log In
				</button>
			</form>

			{/* <button
				className='mt-4 rounded-[5px] p-[14px] bg-[#DB4444] text-white'
				onClick={getCart}
			>
				GetCart
			</button> */}
		</div>
	)
}

export default LogIn
