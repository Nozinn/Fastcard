import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const Account = () => {
	return (
		<>
			<div>
				<div className='w-[90%] m-auto lg:pb-[90px] pb-[45px]'>
					<Link to={'/home'}>
						<p className='text-[22px] p-[20px]'>
							<span className='text-gray-500'>Home / </span>My Account
						</p>
					</Link>
				</div>
				<div className='flex flex-col lg:flex-row justify-center items-start lg:gap-[220px] gap-8 lg:mb-[300px] mb-[90px] px-4'>
					<div className='flex flex-col gap-[15px] w-full lg:w-auto ml-[30px]'>
						<p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>
							Manage My Account
						</p>
						<ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
							<li className='hover:text-[#DB4444] transition-all duration-500 '>
								My Profile
							</li>
							<li className='hover:text-[#DB4444] transition-all duration-500'>
								Address Book
							</li>
							<li className='hover:text-[#DB4444] transition-all duration-500'>
								My Payment Options
							</li>
						</ul>
						<p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>
							Manage My Orders
						</p>
						<ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
							<li className='hover:text-[#DB4444] transition-all duration-500'>
								My Returns
							</li>
							<li className='hover:text-[#DB4444] transition-all duration-500'>
								My Cancellations
							</li>
						</ul>
						<p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>
							Manage My Wishlist
						</p>
					</div>
					<div className='w-full lg:w-[850px] h-auto lg:h-[530px] border-[whitesmoke] shadow-lg p-6 lg:p-[50px]'>
						<h1 className='text-[24px] text-[#DB4444] font-[500]'>Profile</h1>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-[30px]'>
							<TextField
								id='outlined-suffix-shrink'
								label='First name'
								variant='outlined'
							/>
							<TextField
								id='outlined-suffix-shrink'
								label='Email address'
								variant='outlined'
								type='email'
							/>
						</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-[50px]'>
							<TextField
								id='outlined-suffix-shrink'
								label='Last name'
								variant='outlined'
							/>
							<TextField
								id='outlined-suffix-shrink'
								label='Street address'
								variant='outlined'
							/>
						</div>
						<h1 className='text-[24px] font-[500]'>Password Changes</h1>
						<div className='grid grid-cols-1'>
							<TextField
							id='outlined-password-input'
							label='Password'
							type='password'
							autoComplete='current-password'
						/>
						</div>
						<div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
							<TextField
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
							/>
							<TextField
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
							/>
						</div>
						<div className='flex flex-col lg:flex-row gap-3 lg:gap-[5px] pt-8 lg:pt-[35px] lg:justify-end'>
							<Button variant='outlined' sx={{color: 'gray', borderColor: 'gray'}}>
								Cancel
							</Button>
							<Button variant='contained' sx={{backgroundColor: 'crimson'}}>
								Save Changes
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Account
