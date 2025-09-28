import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import deleteIcon from '../../assets/delete.svg'
import updateIcon from '../../assets/update.svg'
import { ClearCart, deleteProductFromCart, getCart } from '../../reducers/cartSlice'

const Carts = () => {
	const { cartData } = useSelector(state => state.cart)
	const dispatch = useDispatch()
	console.log(cartData)

	 const allProducts = useMemo(() => {
    if (!cartData) return []
    return cartData.flatMap(cartItem =>
      cartItem.productsInCart ? cartItem.productsInCart : []
    )
  }, [cartData])


  const subtotal = useMemo(() => {
    return allProducts.reduce((sum, item) => {
      const price =
        (item.product?.discountPrice ?? item.product?.price) || 0
      return sum + price * (item.quantity || 1)
    }, 0)
  }, [allProducts])

  const shipping = 0
  const total = subtotal + shipping

	useEffect(() => {
		dispatch(getCart())
	}, [dispatch])

	return (
		<div className='lg:w-[80%] m-auto py-[50px] lg:py-[100px] p-[20px]'>
			<p className='text-[22px] p-[20px]'>
				<span className='text-gray-500'>Home / </span>Cart
			</p>

			<div className='lg:w-[100%] m-auto '>
				<div className='w-full py-[50px]'>
					<div className='hidden md:grid grid-cols-4 border-b pb-4 font-semibold text-sm md:px-[32px]'>
						<div className='text-start'>Product</div>
						<div className='text-center'>Price</div>
						<div className='text-end mr-[30px]'>Quantity</div>
						<div className='text-end'>Subtotal</div>
					</div>

					{cartData?.length > 0 &&
						cartData.map((e, index) =>
							e?.productsInCart?.map(el => {
								return (
									<div
										key={`${el.product.productName}-${index}`}
										className='border-b md:border-0 md:mb-[10px] md:grid md:grid-cols-4 items-center md:h-[94px] dark:bg-[#00000015] shadow-md dark:shadow-[#242424] rounded-[4px] my-2 md:my-0 px-[16px] py-[12px] md:px-[32px] md:py-0 h-[136px]'
									>
										<div className=' md:flex items-center gap-[20px]'>
											<div className='w-[54px] h-[54px] bg-[#f4f4f4] shrink-0'>
												<img
													className='w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal'
													src={`https://store-api.softclub.tj/images/${el.product.image}`}
													alt={el.product.productName}
												/>
											</div>
											<p>{el.product.productName}</p>
										</div>

										<div className=' md:block text-center'>
											${el.product.price}
										</div>

										<div className='hidden md:flex justify-end'>
											<div className='flex items-center gap-[5px]'>
												<button
													
													className='w-[30px] h-[30px] text-[25px] bg-[#F5F5F5] dark:bg-[#2c2c2c] rounded-full flex items-center justify-center '
												>
													-
												</button>
												<div className='w-[50px] h-[50px] bg-[#F5F5F5] dark:bg-[#2c2c2c] flex items-center justify-center rounded-[5px]'>
													<p className='text-[16px]'>{el.quantity}</p>
												</div>
												<button
													
													className='w-[30px] h-[30px] text-[25px] bg-[#F5F5F5] dark:bg-[#2c2c2c] rounded-full flex items-center justify-center'
												>
													+
												</button>
											</div>
										</div>

										<div className='hidden md:flex justify-end items-center gap-[60px]'>
											<p className='text-[16px] font-semibold'>
												${el.product.price * el.quantity}
											</p>
											<button
												onClick={() => dispatch(deleteProductFromCart(el.id))}
												className='w-[24px] h-[24px] rounded-full bg-[#DB4444] text-white flex items-center justify-center'
											>
												✕
											</button>
										</div>
									</div>
								)
							})
						)}
				</div>
			</div>

			<div className='pt-[20px] lg:mt-[50px] flex justify-between items-center'>
				<button className='border-[2px] lg:border-gray-500 text-gray-800 py-[5px]  px-[20px] lg:py-[10px] lg:px-[60px] rounded-[5px] dark:text-gray-400'>
					Return To Shop
				</button>
				<div className='flex items-center gap-[10px]'>
					<button className='border-[2px] border-gray-500 text-gray-800  py-[10px] px-[60px] rounded-[5px] hidden lg:flex dark:text-gray-400'>
						Update Cart
					</button>
					<button
						onClick={() => {dispatch(ClearCart()), dispatch(getCart())}}
						className='border-[2px] border-[#DB4444] text-[#DB4444] py-[10px] px-[60px] rounded-[5px] hidden lg:flex'
					>
						Remove all
					</button>

					<img src={updateIcon} alt='pic' className='lg:hidden' />
					<img onClick={() => {dispatch(ClearCart()), dispatch(getCart())}} src={deleteIcon} alt='pic' className='lg:hidden' />
				</div>
			</div>
			<div className='flex md:justify-between gap-[20px] flex-wrap py-[100px] w-[100%]'>
				<div className='flex md:gap-[16px] justify-between w-[100%] md:w-[460px]'>
					<input
						type='text'
						className=' border-[2px] border-gray-500 pl-[24px] w-[235px] md:w-[300px] h-[56px] rounded-[4px] dark:placeholder:text-gray-400'
						placeholder='Coupon Code'
					/>
					<button className=' border-[2px] border-[#DB4444] text-[#DB4444] h-[56px] rounded-[4px] w-[95px] md:w-[143px]'>
						Apply
					</button>
				</div>
				<article className='w-[468px] h-[305px] border-black dark:border-[#1c1c1c] border-[2px] rounded-[4px] p-[22px]'>
					<div className='flex flex-col gap-[20px]'>
						<h1 className='text-[20px] font-semibold'>Cart Total</h1>
						<div className='flex justify-between text-[16px]'>
							<p>Subtotal:</p>
							<h1 className=''>${subtotal.toFixed(2)}</h1>
						</div>
						<div className='flex justify-between text-[16px]'>
							<p>Shipping:</p>
							<h1 className=''>${shipping.toFixed(2)}</h1>
						</div>
						<div className='border-t flex flex-col pt-[20px] gap-[20px]'>
							<div className='flex justify-between text-[20px]'>
								<p className='font-bold'>Total:</p>
								<h1 className='font-bold'>${total.toFixed(2)}</h1>
							</div>
							<button className='w-[100%] md:w-[260px] m-auto h-[56px] bg-[#DB4444] text-white font-semibold rounded-[4px]'>
								<Link to={'/checkout'}>Procees to checkout</Link>
							</button>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default Carts
