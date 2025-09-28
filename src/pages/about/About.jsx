import React from 'react'
import pic1 from '../../assets/picture1 (2).png'
import pic2 from '../../assets/Services.png'
import pic3 from '../../assets/Services (1).png'
import pic4 from '../../assets/Services (2).png'
import pic5 from '../../assets/Services (3).png'
import pic6 from '../../assets/Services (4).png'
import pic7 from '../../assets/Services (5).png'
import pic8 from '../../assets/Services (6).png'
import icon1 from '../../assets/Icon-Twitter (1).svg'
import icon2 from '../../assets/icon-instagram (1).svg'
import icon3 from '../../assets/Icon-Linkedin (1).svg'
import pic9 from '../../assets/Frame 874.png'
import pic10 from '../../assets/Frame 875.png'
import pic11 from '../../assets/Frame 876.png'

const About = () => {
	return (
		<div className='lg:w-[88%] m-auto lg:py-[100px]'>
			<p className='text-[22px] p-[20px]'>
				<span className='text-gray-500'>Home / </span>About
			</p>
			<div className='lg:flex justify-between items-center lg:gap-[100px]'>
				<div className='p-[20px]'>
					<h1 className='text-[35px] lg:text-[55px] lg:pb-[50px] lg:p-0'>Our Story</h1>
					<p className='lg:text-[20px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p> <br />
					<p className='lg:text-[20px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
				</div>
				<img src={pic1} alt="" />
			</div>
			<div className='p-[20px] py-[45px] lg:py-[100px] grid grid-cols-1 lg:grid-cols-4 gap-[40px]'>
				<div className='text-center p-[30px] border-[2px] rounded-2xl border-gray-400 hover:bg-[#DB4444] hover:border-none hover:text-white'>
					<img src={pic2} alt="pic" className='hover:invert mx-auto dark:invert' />
					<h3 className='text-[40px]'>10.5k </h3>
					<p>Sallers active our site</p>
				</div>
				<div className='text-center p-[30px] border-[2px] rounded-2xl border-gray-400 hover:bg-[#DB4444] hover:border-none hover:text-white'>
					<img src={pic3} alt="pic" className='invert mx-auto hover:invert-0 dark:invert-0' />
					<h3 className='text-[40px]'>33k</h3>
					<p>Mopnthly Produduct Sale</p>
				</div>
				<div className='text-center p-[30px] border-[2px] rounded-2xl border-gray-400 hover:bg-[#DB4444] hover:border-none hover:text-white'>
					<img src={pic4} alt="pic" className=' mx-auto dark:invert hover:invert' />
					<h3 className='text-[40px]'>45.5k</h3>
					<p>Customer active in our site</p>
				</div>
				<div className='text-center p-[30px] border-[2px] rounded-2xl border-gray-400 hover:bg-[#DB4444] hover:border-none hover:text-white'>
					<img src={pic5} alt="pic" className='hover:invert mx-auto dark:invert' />
					<h3 className='text-[40px]'>25k</h3>
					<p>Anual gross sale in our site</p>
				</div>
			</div>
			<div className='lg:ml-[110px] lg:grid grid-cols-3'>
				<div className='p-[20px] lg:p-0'>
					<img src={pic9} alt="pic" />
					<h4 className='py-[20px] text-[30px]'>Tom Cruise</h4>
					<p>Founder & Chairman</p>
					<div className='pt-[10px] flex items-center gap-[10px]'>
						<img src={icon1} alt="icon"  className='dark:invert'/>
						<img src={icon2} alt="icon" className='dark:invert' />
						<img src={icon3} alt="icon"  className='dark:invert'/>
					</div>
				</div>
				<div className='hidden lg:block'>
					<img src={pic10} alt="pic" />
					<h4 className='py-[20px] text-[30px]'>Emma Watson</h4>
					<p>Managing Director</p>
					<div className='pt-[10px] flex items-center gap-[10px]'>
						<img src={icon1} alt="icon" className='dark:invert'/>
						<img src={icon2} alt="icon" className='dark:invert' />
						<img src={icon3} alt="icon" className='dark:invert' />
					</div>
				</div>
				<div className='hidden lg:block'>
					<img src={pic11} alt="pic" />
					<h4 className='py-[20px] text-[30px]'>Will Smith</h4>
					<p>Product Designer</p>
					<div className='pt-[10px] flex items-center gap-[10px]'>
						<img src={icon1} alt="icon" className='dark:invert' />
						<img src={icon2} alt="icon" className='dark:invert' />
						<img src={icon3} alt="icon"  className='dark:invert'/>
					</div>
				</div>
			</div>
			<div className='w-[80%] m-auto py-[50px] lg:py-[100px] grid grid-cols-1 lg:grid-cols-3 gap-[40px]'>
				<div className='p-[20px] text-center'>
					<img src={pic6} alt="pic" className='dark:invert mx-auto' />
					<h3 className='text-[25px] py-[20px]'>FREE AND FAST DELIVERY</h3>
					<p>Free delivery for all orders over $140</p>
				</div>
				<div className='p-[20px] text-center'>
					<img src={pic7} alt="pic" className='dark:invert mx-auto' />
					<h3 className='text-[25px] py-[20px]'>24/7 CUSTOMER SERVICE</h3>
					<p>Friendly 24/7 customer support</p>
				</div>
				<div className='p-[20px] text-center'>
					<img src={pic8} alt="pic" className='dark:invert mx-auto' />
					<h3 className='text-[25px] py-[20px]'>MONEY BACK GUARANTEE</h3>
					<p>We reurn money within 30 days</p>
				</div>

			</div>
		</div>
	)
}

export default About
