import React from 'react'

const Card = ({text}) => {
	return (
		<div>
			<div className='flex gap-[10px] mt-[40px] lg:mt-[80px]'>
				<div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]'></div>
				<h1 className=' flex items-center text-[20px] font-bold text-[#DB4444]'>
					{text}
				</h1>
			</div>
		</div>
	)
}

export default Card
