import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProduct, productById } from '../../reducers/productSlice'
import Five from '../../assets/Four Star.svg'
import p1 from '../../assets/Icon-return.svg'
import p2 from '../../assets/icon-delivery.svg'
import { Eye, Heart } from 'lucide-react'
import Button from '@mui/material/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Card from '../../components/carts'
import { addToCart } from '../../reducers/cartSlice'
const ProductById = ({ wish=[], setWish }) => {
	const { id } = useParams()
	const { productData } = useSelector(state => state.product)

	const { productDataById } = useSelector(state => state.product)
	const dispatch = useDispatch()
	const [state, setState] = useState('')
	const [count, setCount] = useState(0)
	useEffect(() => {
		dispatch(getProduct())
	}, [dispatch])

	useEffect(() => {
		if (id) {
			dispatch(productById(id))
		}
	}, [dispatch, id])

	return (
		<div className='py-[30px] lg:text-start'>
			{/* путь */}
			<p className='text-[22px] text-center lg:text-start lg:ml-[50px]'>
				<span className='text-gray-500'>Account / Gaming / </span>
				{productDataById?.productName}
			</p>

			<div className='lg:w-[90%] m-auto lg:flex justify-between gap-[40px] mt-[10px] lg:mt-[60px]'>
				<div className='hidden lg:flex'>
					<Swiper
						direction='vertical'
						className='w-[170px] z-10 relative h-[500px] mt-[20px] gap-10'
						slidesPerView={3.5}
					>
						{productDataById?.images?.map((img, index) => {
							return (
								<SwiperSlide key={index} className='relative'>
									<img
										src={`https://store-api.softclub.tj/images/${img?.images}`}
										className='w-full object-cover rounded-lg shadow-xl'
										onError={e => {
											e.target.src = '/default-product.png'
										}}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
				<div className='flex justify-center'>
					<img
						src={`https://store-api.softclub.tj/images/${productDataById?.images?.[0]?.images}`}
						alt={productDataById?.productName}
						className='w-[500px] lg:h-[500px] h-[280px] mt-[50px] lg:mt-[20px] mb-3'
						onError={e => {
							e.target.src = '/default-product.png'
						}}
					/>
				</div>
				<div className='lg:hidden mt-4 ml-[20px]'>
					<Swiper
						direction='horizontal'
						spaceBetween={10}
						slidesPerView={4} // сколько превьюшек помещается
						className=''
					>
						{productDataById?.images?.map((img, index) => {
							return (
								<SwiperSlide key={index} className='flex justify-center'>
									<img
										src={`https://store-api.softclub.tj/images/${img.images}`}
										className='w-[70px] h-[70px] object-cover rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-105 transition-transform'
										onError={e => {
											e.target.src = '/default-product.png'
										}}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
				{/* Инфо */}
				<div className='w-[90%] mt-[50px] mb-[70px] lg:mt-0 m-auto text-start lg:w-[37%]'>
					<h2 className='text-[30px] mb-[10px] '>
						{productDataById?.productName}
					</h2>

					{/* рейтинг */}
					<div className='flex gap-[10px] items-center text-[grey] mb-[20px]'>
						<img src={Five} alt='rating' />
						<p>(150 Reviews) |</p>
						<p className='text-[#12CA5B]'>In Stock</p>
					</div>

					{/* цена */}
					<h2 className='text-[35px] mb-[20px] font-bold'>
						${productDataById?.price}.00
					</h2>

					{/* описание */}
					<p className='text-[grey] text-[20px] mb-[20px]'>
						{productDataById?.description}
					</p>

					<hr className='mb-[20px]' />

					{/* цвет */}
					<div className='flex items-center gap-[10px] mb-[20px]'>
						<p className='text-[20px]'>Colors:</p>
						<div
							style={{ backgroundColor: productDataById?.color }}
							className='w-[22px] h-[22px] rounded-full '
						></div>
					</div>

					{/* размеры */}
					<div className='flex items-center gap-[20px] mb-[30px]'>
						<p className='text-[20px]'>Size:</p>
						<div className='flex gap-[10px]'>
							{['XS', 'S', 'M', 'L', 'XL'].map(size => (
								<button
									key={size}
									onClick={() => setState(size)}
									style={{
										backgroundColor: state === size ? '#DB4444' : '',
										color: state === size ? 'white' : '',
									}}
									className='border-[1px] w-[40px] h-[32px] rounded-[5px]'
								>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* korzinka */}

					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-[10px] text-[30px]'>
							<Button
								variant='outlined'
								sx={{ fontSize: '23px', color: 'black', borderColor: 'black' }}
								className='dark:invert'
								onClick={() => setCount(count - 1)}
							>
								-
							</Button>
							<Button
								variant='outlined'
								sx={{
									fontSize: '23px',
									paddingRight: '40px',
									paddingLeft: '40px',
									color: 'black',
									borderColor: 'black',
								}}
								className='dark:invert'
								onClick={() => setCount(count - 1)}
							>
								{count}
							</Button>
							<Button
								sx={{
									fontSize: '24px',
									color: 'white',
									border: 'none',
									backgroundColor: '#DB4444',
								}}
								variant='outlined'
								className='py-[5px] px-[20px] border border-gray-400 rounded-[5px] bg-[#DB4444]'
								onClick={() => setCount(count + 1)}
							>
								+
							</Button>
						</div>
						<div className='hidden lg:flex'>
							<button className='text-[#FAFAFA] bg-[#DB4444] py-[14px] px-[60px] rounded-[5px]'>
								<Link to={'/carts'}>Buy Now</Link>
							</button>
						</div>
						<div className='border py-[12px] px-[13px] rounded-[4px]'>
							<Heart />
						</div>
					</div>
					<div className='lg:hidden flex'>
						<button className='text-[#FAFAFA] bg-[#DB4444] w-[100%] py-[14px] px-[60px] rounded-[5px] mt-[30px]'>
							<Link to={'/carts'}>Buy Now</Link>
						</button>
					</div>

					{/* доставка */}
					<div className='mt-[30px]'>
						<div className='flex gap-[10px] p-[15px] border-[2px] border-solid border-black rounded-t-[3px] dark:border-gray-300'>
							<img src={p2} alt='' className='dark:invert' />
							<div className='text-start'>
								<p>Free Delivery</p>
								<p className='text-[12px] text-gray-800'>
									Enter your postal code for Delivery Availability
								</p>
							</div>
						</div>

						<div className='flex gap-[10px] p-[15px] border-[2px] border-solid border-black rounded-b-[3px] border-t-0 dark:border-gray-300'>
							<img src={p1} alt='' className='dark:invert' />
							<div className='text-start'>
								<p className='text-[18px] pb-[7px]'>Return Delivery</p>
								<p className='text-[14px] text-gray-800'>
									Free 30 Days Delivery Returns. Details
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[90%] m-auto mt-[40px]'>
				<Card text='Related Item' />
			</div>
			<div className='mt-[50px] mb-[50px]'>
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
						const id = wish?.find(e => e.id === el.id)

						const handleHeartClick = () => {
							if (!id) {
								const sokhran = [...wish, el]
								localStorage.setItem('wish', JSON.stringify(sokhran))
								setWish(sokhran)
							} else {
								const update = wish.filter(v => v.id !== el.id)
								localStorage.setItem('wish', JSON.stringify(update))
								setWish(update)
							}
						}

						return (
							<SwiperSlide key={el.id}>
								<div className='group relative flex flex-col justify-between w-[300px] h-[260px]  bg-white dark:bg-gray-900 rounded-[8px] shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
									{/* бейдж скидки */}
									<div className='absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-xs font-semibold'>
										-40%
									</div>

									{/* картинка */}
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
											<Heart
												onClick={handleHeartClick}
												className={`cursor-pointer w-6 h-6 ${
													id ? 'fill-red-700' : 'fill-transparent'
												}`}
											/>
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
			</div>
		</div>
	)
}

export default ProductById
