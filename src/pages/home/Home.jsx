import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import iconApple from '../../assets/Apple_logo 1.svg'
import shopNow from '../../assets/Frame 562.svg'
import playstation1 from '../../assets/Frame 684 (1).svg'
import playstation from '../../assets/Frame 684.svg'
import woman1 from '../../assets/Frame 685 (1).svg'
import woman from '../../assets/Frame 685.svg'
import kolonki1 from '../../assets/Frame 686 (1).svg'
import kolonki from '../../assets/Frame 686.svg'
import gucci1 from '../../assets/Frame 687 (1).svg'
import gucci from '../../assets/Frame 687.svg'
import dictophone from '../../assets/Frame 694.svg'
import phone from '../../assets/phone.svg'
import krug1 from '../../assets/Services (1).svg'
import krug2 from '../../assets/Services (2).svg'
import krug from '../../assets/Services.svg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Buttons from '../../components/Buttons'
import Card from '../../components/carts'
import { getCategory } from '../../reducers/categorySlice'
import { getProduct } from '../../reducers/productSlice'
import { Eye } from 'lucide-react'
import { addToCart } from '../../reducers/cartSlice'
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"



const Home = ({ wish, setWish }) => {
	const [second, setSecond] = useState(new Date().getSeconds())

	const { categoryData, isLoading, error } = useSelector(
		state => state.category
	)
	const { productData } = useSelector(state => state.product)
	
	
	
	const dispatch = useDispatch()

	useEffect(() => {
		const interval = setInterval(() => {
			setSecond(prev => (prev - 1 + 60) % 60)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		dispatch(getCategory())
		dispatch(getProduct())
	}, [dispatch])
	return (
		<div>
			<div className='lg:w-[80%] m-auto lg:mt-[50px] lg:flex justify-between items-center '>
				<div className='flex flex-wrap gap-[20px] p-[30px] lg:block lg:p-0'>
					{categoryData?.slice(0, 9).map(el => {
						return (
							<div key={el.id}>
								<Link to={'products'}>
									<p className='dark:bg-gray-600 text-[20px] hover:bg-[#F5F5F5] lg:bg-transparent bg-[#F5F5F5] py-[4px] px-[13px] dark:hover:bg-gray-900 rounded-[5px] dark:lg:bg-transparent'>
										{el.categoryName}
									</p>
								</Link>
							</div>
						)
					})}
				</div>
				<div className='lg:w-[70%]'>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination, Navigation]}
						className='mySwiper'
					>
						<SwiperSlide>
							<div className='flex flex-col lg:flex-row items-center justify-between  bg-black text-white rounded-xl overflow-hidden'>
								<div className='p-8 lg:p-16'>
									<div className='flex items-center gap-4'>
										<img
											src={iconApple}
											alt='icon'
											className='w-8 h-8 lg:w-12 lg:h-12'
										/>
										<p className='text-xl lg:text-2xl font-semibold'>
											iPhone 14 Series
										</p>
									</div>
									<h1 className='text-3xl lg:text-6xl font-bold py-6'>
										Up to 10% off Voucher
									</h1>
									<img src={shopNow} alt='shopNow' className='cursor-pointer' />
								</div>
								<img
									src={phone}
									alt='phone'
									className='w-[250px] lg:w-[400px]'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col lg:flex-row items-center justify-between  bg-black text-white rounded-xl overflow-hidden'>
								<div className='p-8 lg:p-16'>
									<div className='flex items-center gap-4'>
										<img
											src={iconApple}
											alt='icon'
											className='w-8 h-8 lg:w-12 lg:h-12'
										/>
										<p className='text-xl lg:text-2xl font-semibold'>
											iPhone 14 Series
										</p>
									</div>
									<h1 className='text-3xl lg:text-6xl font-bold py-6'>
										Up to 10% off Voucher
									</h1>
									<img src={shopNow} alt='shopNow' className='cursor-pointer' />
								</div>
								<img
									src={phone}
									alt='phone'
									className='w-[250px] lg:w-[400px]'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col lg:flex-row items-center justify-between  bg-black text-white rounded-xl overflow-hidden'>
								<div className='p-8 lg:p-16'>
									<div className='flex items-center gap-4'>
										<img
											src={iconApple}
											alt='icon'
											className='w-8 h-8 lg:w-12 lg:h-12'
										/>
										<p className='text-xl lg:text-2xl font-semibold'>
											iPhone 14 Series
										</p>
									</div>
									<h1 className='text-3xl lg:text-6xl font-bold py-6'>
										Up to 10% off Voucher
									</h1>
									<img src={shopNow} alt='shopNow' className='cursor-pointer' />
								</div>
								<img
									src={phone}
									alt='phone'
									className='w-[250px] lg:w-[400px]'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col lg:flex-row items-center justify-between  bg-black text-white rounded-xl overflow-hidden'>
								<div className='p-8 lg:p-16'>
									<div className='flex items-center gap-4'>
										<img
											src={iconApple}
											alt='icon'
											className='w-8 h-8 lg:w-12 lg:h-12'
										/>
										<p className='text-xl lg:text-2xl font-semibold'>
											iPhone 14 Series
										</p>
									</div>
									<h1 className='text-3xl lg:text-6xl font-bold py-6'>
										Up to 10% off Voucher
									</h1>
									<img src={shopNow} alt='shopNow' className='cursor-pointer' />
								</div>
								<img
									src={phone}
									alt='phone'
									className='w-[250px] lg:w-[400px]'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col lg:flex-row items-center justify-between  bg-black text-white rounded-xl overflow-hidden'>
								<div className='p-8 lg:p-16'>
									<div className='flex items-center gap-4'>
										<img
											src={iconApple}
											alt='icon'
											className='w-8 h-8 lg:w-12 lg:h-12'
										/>
										<p className='text-xl lg:text-2xl font-semibold'>
											iPhone 14 Series
										</p>
									</div>
									<h1 className='text-3xl lg:text-6xl font-bold py-6'>
										Up to 10% off Voucher
									</h1>
									<img src={shopNow} alt='shopNow' className='cursor-pointer' />
								</div>
								<img
									src={phone}
									alt='phone'
									className='w-[250px] lg:w-[400px]'
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className='w-[90%] m-auto mt-[30px] lg:mt-[60px]'>
				<Card text='Today’s' />
				<div className='lg:flex mt-[30px] lg:mt-[50px]  gap-[70px]'>
					<h2 className='text-[45px] lg:text-[50px] '>Flash Sales</h2>
					<div className='flex items-center gap-[15px] mt-[20px] lg:mt-0 mb-[30px] '>
						<div className='flex items-center gap-[15px]'>
							<div>
								<p>Days</p>
								<h3 className=' text-[42px] font-bold'>
									{String(new Date().getDate()).padStart(2, '0')}
								</h3>
							</div>
							<h3 className='text-[42px] font-bold text-[#E07575] mt-[10px]'>
								:
							</h3>
						</div>
						<div className='flex items-center gap-[15px]'>
							<div>
								<p>Hours</p>
								<h3 className=' text-[42px] font-bold'>
									{String(new Date().getHours()).padStart(2, '0')}
								</h3>
							</div>
							<h3 className='text-[42px] font-bold text-[#E07575] mt-[10px]'>
								:
							</h3>
						</div>
						<div className='flex items-center gap-[15px]'>
							<div>
								<p>Minutes</p>
								<h3 className=' text-[42px] font-bold'>
									{String(new Date().getMinutes()).padStart(2, '0')}
								</h3>
							</div>
							<h3 className='text-[42px] font-bold text-[#E07575] mt-[10px]'>
								:
							</h3>
						</div>
						<div className='flex items-center gap-[15px]'>
							<div>
								<p>Seconds</p>
								<h3 className=' text-[42px] font-bold'>
									{String(second).padStart(2, '0')}
								</h3>
							</div>
						</div>
					</div>
				</div>
				<Swiper
					spaceBetween={30}
					slidesPerView={4}
					breakpoints={{
						0: { slidesPerView: 1.2, spaceBetween: 15 },
						640: { slidesPerView: 2, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 30 },
					}}
					className='mySwiper w-[90%] mx-auto mt-10'
				>
					{productData?.products?.slice(0, 8)?.map(el => {
						const isWish = wish?.some(w => w.id === el.id)

						const handleHeartClick = () => {
							if (!isWish) {
								const updated = [...wish, el]
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							} else {
								const updated = wish.filter(w => w.id !== el.id)
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							}
						}
						return (
							<SwiperSlide key={el.id}>
								<div className='group relative flex flex-col justify-between w-[300px] h-[260px]  bg-white dark:bg-gray-900 rounded-[8px] shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
									{/* бейдж скидки */}
									<div className='absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-xs font-semibold'>
										-40%
									</div>

									<div className='flex justify-center items-center h-[180px] relative'>
										<img
											src={`https://store-api.softclub.tj/images/${el.image}`}
											alt={el.productName}
											className='w-[160px] h-[150px] object-contain'
											onError={e => {
												e.target.src = '/default-product.png'
											}}
										/>
										<div className='absolute top-2 right-2 flex flex-col gap-2'>
											<button
												onClick={handleHeartClick}
												className=''
											>
												{isWish ? (
													<FavoriteIcon className='text-red-500' />
												) : (
													<FavoriteBorderIcon />
												)}
											</button>
											<Link to={`productById/${el.id}`}>
												<Eye className='w-6 h-6 cursor-pointer' />
											</Link>
										</div>
									</div>

									{/* кнопка Add to Cart */}
									<button
										onClick={() => dispatch(addToCart(el.id))}
										className='opacity-0 group-hover:opacity-100 absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[100%] bg-black text-white py-2 rounded transition duration-300 text-sm'
									>
										Add To Cart
									</button>

									{/* текстовое описание */}
								</div>
								<div className='flex flex-col justify-end flex-grow p-[10px] '>
									<h2 className='text-s font-semibold truncate'>
										{el.productName}
									</h2>

									<div className='flex items-center gap-3 mt-2'>
										<p className='text-red-500 font-bold'>${el.price}</p>
										<p className='text-gray-400 line-through text-sm'>$160</p>
									</div>

									<div className='flex items-center gap-1 mt-2 text-yellow-400 text-sm'>
										★★★★☆
										<span className='text-gray-500 text-xs ml-2'>
											({el.quantity})
										</span>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>

				<div>
					<Card text='Categories' />
					<h2 className='text-center lg:text-left text-[34px] lg:text-[50px] py-[30px]'>
						Browse By Category
					</h2>
					<div className='w-[80%] m-auto'>
						<Swiper
							spaceBetween={40}
							slidesPerView={6}
							breakpoints={{
								0: {
									slidesPerView: 1.5,
									spaceBetween: 30,
								},
								640: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 6,
								},
							}}
							className='mySwiper mt-10'
						>
							<div className=''>
								{categoryData?.slice(0, 6).map(el => {
									return (
										<SwiperSlide key={el.id}>
											<div className='p-[40px] border-[2px] border-gray-300 text-center rounded-[5px] px-[5px] hover:bg-[#DB4444] hover:border-none'>
												{el.categoryImage && (
													<img
														src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
														alt={el.categoryName}
														className='mx-auto dark:invert '
													/>
												)}
												<p className='pt-[10px]'>{el.categoryName}</p>
											</div>
										</SwiperSlide>
									)
								})}
							</div>
						</Swiper>
					</div>
					<hr className='text-gray-300 dark:text-gray-600 text-[0.5px] my-[35px] lg:my-[70px]' />
				</div>
				<div>
					<Card text='This Month' />
					<div className='lg:flex justify-between items-center mb-[30px] lg:mb-[60px]'>
						<h3 className='text-[34px] lg:text-[50px] py-[20px] lg:py-0'>
							Best Selling Products
						</h3>
						<Link to={'products'}>
							<Buttons text='View All' />
						</Link>
					</div>

					<Swiper
						spaceBetween={30}
						slidesPerView={4}
						breakpoints={{
							0: { slidesPerView: 1.1, spaceBetween: 10 }, // 👈 мобильный
							480: { slidesPerView: 1.5, spaceBetween: 15 }, // 👈 маленькие телефоны
							640: { slidesPerView: 2, spaceBetween: 20 },
							1024: { slidesPerView: 4, spaceBetween: 30 },
						}}
						className='mySwiper w-[90%] mx-auto mt-10'
					>
						{productData?.products?.slice(0, 6).map(el => {
							const isWish = wish?.some(w => w.id === el.id)

						const handleHeartClick = () => {
							if (!isWish) {
								const updated = [...wish, el]
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							} else {
								const updated = wish.filter(w => w.id !== el.id)
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							}
						}
							return (
								<SwiperSlide key={el.id}>
									<div className='group relative flex flex-col justify-between w-[300px] h-[260px]  bg-white dark:bg-gray-900 rounded-[8px] shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
										{/* картинка */}
										<div className='flex justify-center items-center h-[150px] relative'>
											<img
												src={`https://store-api.softclub.tj/images/${el.image}`}
												alt={el.productName}
												className='w-[160px] h-[150px] object-contain'
												onError={e => {
													e.target.src = '/default-product.png'
												}}
											/>
											<div className='absolute top-2 right-2 flex flex-col gap-2'>
												<button
												onClick={handleHeartClick}
												className=''
											>
												{isWish ? (
													<FavoriteIcon className='text-red-500' />
												) : (
													<FavoriteBorderIcon />
												)}
											</button>

												<Link to={`productById/${el.id}`}>
													<Eye className='w-6 h-6 cursor-pointer' />
												</Link>
											</div>
										</div>

										{/* текстовое описание */}
									</div>
									<div className='flex flex-col justify-end flex-grow p-[10px] '>
										<h2 className='text-s font-semibold truncate'>
											{el.productName}
										</h2>

										<div className='flex items-center gap-3 mt-2'>
											<p className='text-red-500 font-bold'>${el.price}</p>
											<p className='text-gray-400 line-through text-sm'>$160</p>
										</div>

										<div className='flex items-center gap-1 mt-2 text-yellow-400 text-sm'>
											★★★★☆
											<span className='text-gray-500 text-xs ml-2'>
												({el.quantity})
											</span>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
			<div className='my-[40px] lg:w-[90%] m-auto lg:my-[90px] bg-black p-[10px] py-[30px] lg:p-[100px] lg:flex justify-between items-center'>
				<div className=''>
					<h4 className='text-[#00FF66]'>Categories</h4>
					<h2 className='text-white text-[35px] lg:text-[60px] py-[20px]'>
						Enhance Your Music Experience
					</h2>
					<div>
						<div className='flex items-center gap-[10px] lg:py-[40px]'>
							<div className='text-black   bg-white w-[90px] h-[85px] text-center pt-[12px] rounded-[50%]'>
								<h3 className='text-[20px] font-bold'>23</h3>
								<p>Hours</p>
							</div>
							<div className='text-black   bg-white w-[90px] h-[85px] text-center pt-[12px] rounded-[50%]'>
								<h3 className='text-[20px] font-bold'>05</h3>
								<p>Days</p>
							</div>
							<div className='text-black   bg-white w-[90px] h-[85px] text-center pt-[12px] rounded-[50%]'>
								<h3 className='text-[20px] font-bold'>59</h3>
								<p>Minutes</p>
							</div>
							<div className='text-black   bg-white w-[90px] h-[85px] text-center pt-[12px] rounded-[50%]'>
								<h3 className='text-[20px] font-bold'>35</h3>
								<p>Seconds</p>
							</div>
						</div>
						<button className='text-black bg-[#00FF66] py-[12px] px-[50px] rounded-[4px] mt-[30px]'>
							Buy Now!
						</button>
					</div>
				</div>
				<img
					src={dictophone}
					alt=''
					className='drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_20px_60px_rgba(59,130,246,0.7)] transition-all duration-300'
				/>
			</div>
			<div className='w-[90%] m-auto'>
				<Card text='Our Products' />
				<h2 className='text-center lg:text-left text-[34px] lg:text-[50px] py-[30px]'>
					Browse By Category
				</h2>
				<div className=' w-[80%] m-auto grid grid-cols-1 lg:grid-cols-4 gap-[40px]'>
					{productData?.products?.slice(1, 9).map(el => {
						const isWish = wish?.some(w => w.id === el.id)

						const handleHeartClick = () => {
							if (!isWish) {
								const updated = [...wish, el]
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							} else {
								const updated = wish.filter(w => w.id !== el.id)
								localStorage.setItem('wish', JSON.stringify(updated))
								setWish(updated)
							}
						}
						return (
							<div key={el.id}>
								<div className='group relative flex flex-col justify-between w-[300px] h-[270px]  bg-white dark:bg-gray-900 rounded-[8px] shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
									{/* картинка */}
									<div className='flex justify-center items-center h-[150px] relative'>
										<img
											src={`https://store-api.softclub.tj/images/${el.image}`}
											alt={el.productName}
											className='w-[160px] h-[150px] object-contain'
											onError={e => {
												e.target.src = '/default-product.png'
											}}
										/>
										<div className='absolute top-2 right-2 flex flex-col gap-2'>
											<button
												onClick={handleHeartClick}
												className=''
											>
												{isWish ? (
													<FavoriteIcon className='text-red-500' />
												) : (
													<FavoriteBorderIcon />
												)}
											</button>
											<Link to={`productById/${el.id}`}>
												<Eye className='w-6 h-6 cursor-pointer' />
											</Link>
										</div>
									</div>
									{/* кнопка Add to Cart */}
									<button
										onClick={() => dispatch(addToCart(el.id))}
										className='opacity-0 group-hover:opacity-100 absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[100%] bg-black text-white py-2 rounded transition duration-300 text-sm'
									>
										Add To Cart
									</button>

									{/* текстовое описание */}
								</div>
								<div className='flex flex-col justify-end flex-grow p-[10px] '>
									<h2 className='text-sm font-semibold truncate'>
										{el.productName}
									</h2>

									<div className='flex items-center gap-3 mt-2'>
										<p className='text-red-500 font-bold'>${el.price}</p>
										<p className='text-gray-400 line-through text-sm'>$160</p>
									</div>

									<div className='flex items-center gap-1 mt-2 text-yellow-400 text-sm'>
										★★★★☆
										<span className='text-gray-500 text-xs ml-2'>
											({el.quantity})
										</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className='text-center py-[30px] lg:py-[50px]'>
					<Link to={'products'}>
						<Buttons text='View All Products' />
					</Link>
				</div>
				<Card text='Featured' />
				<h2 className='lg:text-left text-[34px] lg:text-[50px] lg:py-[30px]'>
					New Arrival
				</h2>
				<div>
					<div className='hidden lg:grid grid-cols-2 gap-[40px]'>
						<img src={playstation} alt='kartinka' width='800px' />
						<div className='grid grid-cols-1 gap-[40px]'>
							<img src={woman} alt='kartinka' width='800px' />
							<div className='grid grid-cols-2 gap-[40px]'>
								<img
									src={kolonki}
									alt='kartinka'
									width='400px'
									height='350px'
								/>
								<img src={gucci} alt='kartinka' width='400px' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:hidden grid grid-cols-1 gap-[40px] w-[100%] mb-[50px] lg:mb-[100px]'>
				<img src={playstation1} alt='kartinka' className='w-[100%]' />
				<img src={woman1} alt='kartinka' className='w-[100%]' />
				<img src={kolonki1} alt='kartinka' className='w-[100%]' />
				<img src={gucci1} alt='kartinka' className='w-[100%]' />
			</div>
			<div className='w-[80%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-[40px] my-[100px] lg:my-[200px]'>
				<div className='text-center'>
					<img src={krug} alt='picture' className='mx-auto' />
					<h4 className='text-[30px] font-bold'>FREE AND FAST DELIVERY</h4>
					<p className='text-[15px]'>Free delivery for all orders over $140</p>
				</div>
				<div className='text-center'>
					<img src={krug1} alt='picture' className='mx-auto' />
					<h4 className='text-[30px] font-bold'>24/7 CUSTOMER SERVICE</h4>
					<p className='text-[15px]'>Friendly 24/7 customer support</p>
				</div>
				<div className='text-center'>
					<img src={krug2} alt='picture' className='mx-auto' />
					<h4 className='text-[30px] font-bold'>MONEY BACK GUARANTEE</h4>
					<p className='text-[15px]'>We reurn money within 30 days</p>
				</div>
			</div>
		</div>
	)
}

export default Home
