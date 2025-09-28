import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../components/Buttons'

const NotFound = () => {
	return (
		<div className='text-center py-[100px] lg:py-[150px]'>
			<h1 className='text-[50px] lg:text-[140px]'>404 Not Found</h1>
			<p className='py-[20px] w-[200px] m-auto lg:w-[600px] lg:text-[25px] lg:py-[40px]'>
				Your visited page not found. You may go home page.
			</p>
			<Link to={'/'}>
				<Buttons text='Back to home page' />
			</Link>
		</div>
	)
}

export default NotFound
