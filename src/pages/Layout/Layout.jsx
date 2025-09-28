import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import icon from '../../../public/Icon (21).svg'
import useDarkMode from '../../useDarkMode'
import icon2 from '../../../public/Logo (14).svg'
import logoWhite from '../../../public/Logo (15).svg'
import iconFacebook from '../../../public/Icon-Facebook.svg'
import iconTwitter from '../../../public/Icon-Twitter.svg'
import iconInstagram from '../../../public/icon-instagram.svg'
import iconLinkedin from '../../../public/Icon-Linkedin.svg'
import liniya from '../../../public/Frame 66.svg'
import { Heart, MenuIcon, ShoppingCart, User } from 'lucide-react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
const Layout = ({ wish }) => {
	const [theme, toggleTheme] = useDarkMode()
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const [anchorUser, setAnchorUser] = useState(null)
	const openUser = Boolean(anchorUser)
	const handleClickUser = event => {
		setAnchorUser(event.currentTarget)
	}
	const handleCloseUser = () => {
		setAnchorUser(null)
	}

	const [search, setSearch] = useState('')

	return (
		<div className='dark:text-white dark:bg-gray-800'>
			<header className='w-[90%] m-auto flex justify-between items-center py-[10px] lg:py-[20px]'>
				<img src={icon} alt='logo' className='hidden lg:flex dark:invert' />
				<div className='flex justify-between items-center gap-[0px] lg:hidden'>
					<div>
						<MenuIcon
							id='basic-button'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						/>

						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							className=''
							slotProps={{
								list: {
									'aria-labelledby': 'basic-button',
								},
							}}
						>
							<Link to={'/'}>
								<MenuItem onClick={handleClose}>Home</MenuItem>
							</Link>
							<Link to={'contact'}>
								<MenuItem onClick={handleClose}>Contact</MenuItem>
							</Link>
							<Link to={'about'}>
								<MenuItem onClick={handleClose}>About</MenuItem>
							</Link>
							<Link to={'signUp'}>
								<MenuItem onClick={handleClose}>Sign Up</MenuItem>
							</Link>

							<Link to={'wishlist'}>
								<MenuItem onClick={handleClose}>
									<div className='relative'>
							<div className='bg-red-600 rounded-full w-[20px] h-[20px] flex items-center justify-center absolute -right-2 -top-1.5 '>
											{wish.length || 0}
										</div>
							<Heart />
									</div>
								</MenuItem>
							</Link>
						</Menu>
					</div>

					<img src={icon2} alt='logo' className='dark:hidden' />
					<img src={logoWhite} alt='logoWhite' className='hidden dark:flex ' />
				</div>
				<ul className='hidden lg:flex items-center gap-[40px]'>
					<Link to={'/'}>
						<li className='hover:underline'>Home</li>
					</Link>
					<Link to={'/contact'}>
						<li className='hover:underline'>Contact</li>
					</Link>
					<Link to={'/about'}>
						<li className='hover:underline'>About</li>
					</Link>
					<Link to={'/signUp'}>
						<li className='hover:underline'>Sign Up</li>
					</Link>
				</ul>
				<div className='md:flex items-center gap-[30px]'>
					<div className='hidden lg:flex items-center w-[300px] px-4 py-3 bg-gray-100 rounded-[5px] dark:bg-gray-900'>
						<input
							type='search'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder='What are you looking for?'
							className='flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 '
						/>
						<button className='text-black dark:text-gray-400'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z'
								/>
							</svg>
						</button>
					</div>
					<Link to={'wishlist'}>
						<div className='relative hidden lg:flex'>
							<div className='bg-red-600 rounded-full w-[20px] h-[20px] flex items-center justify-center absolute -right-2 -top-1.5 '>
								{wish.length || 0}
							</div>
							<Heart />
						</div>
					</Link>
					<div className='hidden lg:flex'>
						<Link to={'carts'}>
							<ShoppingCart />
						</Link>
					</div>

					<div>
						<User
							id='basic-button'
							aria-controls={openUser ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={openUser ? 'true' : undefined}
							onClick={handleClickUser}
						/>

						<Menu
							id='basic-menu'
							anchorEl={anchorUser}
							open={openUser}
							onClose={handleCloseUser}
							className=''
							slotProps={{
								list: {
									'aria-labelledby': 'basic-button',
								},
							}}
						>
							<Link to={'/account'}>
								<MenuItem onClick={handleCloseUser}>Account</MenuItem>
							</Link>
							<Link to={'carts'}>
								<MenuItem onClick={handleCloseUser}>Cart</MenuItem>
							</Link>
							<Link to={'about'}>
								<MenuItem onClick={handleCloseUser}>About</MenuItem>
							</Link>
							<Link to={'signUp'}>
								<MenuItem onClick={handleCloseUser}>Sign Up</MenuItem>
							</Link>
							<Link to={'wishlist'}>
								<MenuItem onClick={handleCloseUser}>
									<div className='relative'>
										<div className='bg-red-600 rounded-full w-[20px] h-[20px] flex items-center justify-center absolute -right-2 -top-1.5 '>
												{wish.length || 0}
											</div>
										<Heart />
									</div>
								</MenuItem>
							</Link>
						</Menu>
					</div>
				</div>
				
				<div className='text-black'>
					<IconButton
						className='dark:invert'
						onClick={toggleTheme}
						sx={{
							width: '45px',
							height: '45px',
							bgcolor: 'transparent',
							'&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
						}}
					>
						{theme === 'dark' ? (
							<LightModeIcon sx={{ fontSize: 24 }} />
						) : (
							<DarkModeIcon sx={{ fontSize: 24 }} />
						)}
					</IconButton>
				</div>
			</header>
			<hr className='my-4 border-t-2 border-gray-200 shadow dark:border-gray-700 dark:shadow-2xl' />
			<div className='flex justify-center py-[20px] lg:hidden'>
				<div className='flex  items-center w-[300px] px-4 py-3 border rounded-[5px]'>
					<input
						type='search'
						placeholder='Search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='flex-grow bg-transparent outline-none text-gray-900 placeholder-gray-900 dark:placeholder-gray-400 dark:text-white'
					/>
					<button className='text-black dark:text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z'
							/>
						</svg>
					</button>
				</div>
			</div>
			<main>
				<Outlet context={{search}} />
			</main>
			<footer className='bg-[#000000]  lg:p-[100px] text-white '>
				<div className='p-[30px] grid grid-cols-1 lg:grid-cols-4 gap-[30px] lg:gap-[50px]'>
					<div>
						<img src={logoWhite} alt='logoWhite' />
						<p className='text-[20px] pt-[15px] pb-[10px]'>Subscribe</p>
						<p>Get 10% off your first order</p>
						<div className='relative w-64 mt-[20px]'>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full px-4 pr-10 py-2 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none'
							/>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-white  cursor-pointer'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M14 5l7 7-7 7M21 12H3'
								/>
							</svg>
						</div>
					</div>
					<div>
						<h4 className='text-[24px]'>Support</h4>
						<p className='pt-[15px]'>
							111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
						</p>
						<p className='py-[10px]'>exclusive@gmail.com</p>
						<p>+88015-88888-9999</p>
					</div>
					<div className='grid grid-cols-2 gap-[40px]'>
						<div>
							<h4 className='text-[24px]'>Account</h4>
							<p className='pt-[15px]'>My Account</p>
							<p className='py-[10px]'>Cart</p>
							<p>Wishlist</p>
							<p className='pt-[10px]'>Shop</p>
						</div>
						<div>
							<h4 className='text-[24px]'>Quick Link</h4>
							<p className='pt-[15px]'>Privacy Policy</p>
							<p className='py-[10px]'>Terms Of Use</p>
							<p>FAQ</p>
							<p className='pt-[10px]'>Contact</p>
						</div>
					</div>
					<div>
						<h4 className='text-[24px]'>Social </h4>
						<div className='pt-[15px] grid grid-cols-4 gap-[px]'>
							<img src={iconFacebook} alt='icon' />
							<img src={iconTwitter} alt='icon' />
							<img src={iconInstagram} alt='icon' />
							<img src={iconLinkedin} alt='icon' />
						</div>
					</div>
				</div>
				<hr className='text-gray-800' />
				<img src={liniya} alt='liniya' className='p-[40px]' />
			</footer>
		</div>
	)
}

export default Layout
