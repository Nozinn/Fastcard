import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../reducers/productSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Link } from 'react-router-dom'
import { addToCart } from '../../reducers/cartSlice'
import { Eye } from 'lucide-react'
const Products = ({wish, setWish}) => {
	const { productData } = useSelector(state => state.product)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProduct())
	}, [dispatch])

	return (
		<div className='lg:w-[86%] m-auto py-[50px] lg:py-[100px] p-[20px]'>
			<div className='lg:flex justify-between items-center'>
				<p className='text-[22px] py-[20px]'>
					<span className='text-gray-500'>Home / </span>Explore Our Products
				</p>
				<div>
					<FormControl sx={{ width: 350 }} className='dark:invert'>
						<InputLabel id='demo-simple-select-label'>Category</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							label='Category'
						>
							<MenuItem value=''>Populary</MenuItem>
							<MenuItem value=''>All</MenuItem>
							<MenuItem value=''>Nepopulary</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className=' w-[100%] m-auto grid grid-cols-1 lg:grid-cols-4 gap-[40px] mt-[50px] lg:mt-[100px]'>
					{productData?.products?.map(el => {
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
		</div>
	)
}

export default Products
