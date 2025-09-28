import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../reducers/productSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Eye, ShoppingCart, Trash2 } from 'lucide-react'
import Card from '../../components/carts'
import { addToCart } from '../../reducers/cartSlice'

const Wishlist = ({ wish, setWish }) => {
	const { productData } = useSelector(state => state.product)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProduct())
	}, [dispatch])
	return (
		<div className='lg:py-[100px] w-[80%] m-auto mb-[80px]'>
			<div className='flex justify-between items-center p-[20px] lg:p-0'>
				<p>Wishlist ({wish.length || 0})</p>
				<button className='border  py-[5px] px-[15px] lg:py-[10px] lg:px-[60px] rounded-[5px] '>
					Move All To Bag
				</button>
			</div>
			<div className='ml-[10px] mt-[40px]'>
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
					<div className=''>
						{wish?.slice(0, 5)?.map(el => (
							<SwiperSlide key={el.id}>
								<div className='relative w-[250px] bg-white dark:bg-gray-900 rounded-[5px] shadow-md p-4 h-[235px]  transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
									<div className='absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm'>
										{' '}
										-40%{' '}
									</div>
									<div className='flex justify-center mt-6'>
										<img
											src={`https://store-api.softclub.tj/images/${el.image}`}
											alt={el.productName}
											className='w-[160px] h-[120px] mb-3
														mt-[10px]'
											onError={e => {
												e.target.src = '/default-product.png'
											}}
										/>
										<div className='absolute top-2 right-2 flex flex-col gap-2'>
											<button
												onClick={() => {
													const update = wish.filter(v => v.id !== el.id)
													localStorage.setItem('wish', JSON.stringify(update))
													setWish(update)
												}}
											>
												
												<Trash2 className='cursor-pointer w-5 h-5' />
											</button>
										</div>
									</div>
									<div
									onClick={() => dispatch(addToCart(el.id))}
									 className='w-[248px] ml-[-15px] mt-[13px]   bg-[black] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]'>
										<ShoppingCart />
										<span>Add To Cart</span>
									</div>
								</div>

								<h2 className='text-22 font-bold mt-4'>{el.productName}</h2>

								<div className='flex items-center gap-3 mt-2'>
									<p className='text-red-500 font-bold'>${el.price}</p>
									<p className='text-gray-400 line-through'>$160</p>
								</div>

								<div className='flex items-center gap-1 mt-2 text-yellow-400 text-lg'>
									★★★★☆
									<span className='text-gray-500 text-sm ml-2'>
										({el.quantity})
									</span>
								</div>
							</SwiperSlide>
						))}
					</div>
				</Swiper>
			</div>
			<div className='flex justify-between items-center p-[20px] lg:p-0 py-[40px] lg:py-[70px]'>
				<Card text='Just For You' />
				<button className='border  py-[5px] px-[15px] lg:py-[10px] lg:px-[60px] rounded-[5px] mt-[40px] lg:mt-0'>
					See All
				</button>
			</div>
			<div>
				<div className='ml-[10px] mt-[40px]'>
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
						<div className=''>
							{productData?.products?.slice(0, 5)?.map(el => (
								<SwiperSlide key={el.id}>
									<div className='relative w-[250px] bg-white dark:bg-gray-900 rounded-[5px] shadow-md p-4 h-[235px]  transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
										<div className='absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm'>
											{' '}
											-40%{' '}
										</div>
										<div className='flex justify-center mt-6'>
											<img
												src={`https://store-api.softclub.tj/images/${el.image}`}
												alt={el.productName}
												className='w-[160px] h-[120px] mb-3
														mt-[10px]'
												onError={e => {
													e.target.src = '/default-product.png'
												}}
											/>
											<div className='absolute top-2 right-2 flex flex-col gap-2'>
												<Link to={`productById/${el.id}`}>
													<Eye style={{ marginTop: '10px' }} className='cursor-pointer w-5 h-5' />
												</Link>
											</div>
										</div>
										<div className='w-[248px] ml-[-15px] mt-[13px]   bg-[black] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]'>
											<ShoppingCart />
											<span>Add To Cart</span>
										</div>
									</div>

									<h2 className='text-22 font-bold mt-4'>{el.productName}</h2>

									<div className='flex items-center gap-3 mt-2'>
										<p className='text-red-500 font-bold'>${el.price}</p>
										<p className='text-gray-400 line-through'>$160</p>
									</div>

									<div className='flex items-center gap-1 mt-2 text-yellow-400 text-lg'>
										★★★★☆
										<span className='text-gray-500 text-sm ml-2'>
											({el.quantity})
										</span>
									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>
			
		</div>
	)
}

export default Wishlist
