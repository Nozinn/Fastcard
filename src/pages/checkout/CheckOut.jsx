import React, { useEffect, useState } from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import bank1 from '../../assets/Bkash.svg'
import bank2 from '../../assets/Visa.svg'
import bank3 from '../../assets/Mastercard.svg'
import bank4 from '../../assets/Nagad.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../reducers/cartSlice'

const CheckOut = () => {
  const dispatch = useDispatch()
  const { cartData } = useSelector(state => state.cart)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  const subtotal = cartData?.[0]?.productsInCart?.reduce((acc, elem) => {
    return acc + elem.product.price * elem.quantity
  }, 0) || 0

  const handlePlaceOrder = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className='mb-[100px]'>
      <div>
        <Link to={'/home'}>
          <p className='text-[22px] p-[20px]'>
            <span className='text-gray-500'>Home / </span>My Account
          </p>
        </Link>
      </div>

      <div className='w-[90%] m-auto flex flex-col md:flex-row md:gap-[40px] lg:gap-[80px] px-4 md:px-10 py-10'>
        
        <div className='p-[30px] rounded-[8px] shadow-2xl md:w-1/2 flex flex-col gap-5'>
          <h1 className='text-[22px] font-semibold'>Billing Details</h1>
          <TextField label='First name' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Last name' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Street address' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Apartment, floor, etc. (optional)' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Town/City' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Phone number' variant='outlined' fullWidth size='small' className='dark:invert' />
          <TextField label='Email address' variant='outlined' fullWidth size='small' className='dark:invert' />
          <FormControlLabel
            control={<Checkbox defaultChecked color='error' />}
            label='Save this information for faster check-out next time'
          />
        </div>

        <div className='p-[30px] md:w-1/2 flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            {cartData?.[0]?.productsInCart?.map(elem => (
              <div key={elem.product.id} className='flex justify-between items-center border-b pb-2'>
                <div className='flex gap-3 items-center'>
                  <img
                    className='w-[50px] h-[40px] object-contain'
                    src={`https://store-api.softclub.tj/images/${elem.product.image}`}
                    alt={elem.product.productName}
                  />
                  <p>{elem.product.productName}</p>
                </div>
                <p>${elem.product.price} × {elem.quantity}</p>
              </div>
            ))}
          </div>

          <div className='flex justify-between text-[16px]'>
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>

          <div className='flex justify-between text-[16px] border-b pb-2'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>

          <div className='flex justify-between text-[20px] font-semibold'>
            <p>Total:</p>
            <p>${subtotal}</p>
          </div>

          <RadioGroup defaultValue='cash' className='flex flex-col gap-2'>
            <FormControlLabel value='bank' control={<Radio />} label='Bank' />
            <div className='flex gap-2 ml-8'>
              <img src={bank1} alt='bkash' />
              <img src={bank2} alt='visa' />
              <img src={bank3} alt='mastercard' />
              <img src={bank4} alt='nagad' />
            </div>
            <FormControlLabel
              value='cash'
              control={<Radio />}
              label='Cash on delivery'
            />
          </RadioGroup>

          <div className='flex gap-2'>
            <TextField
              placeholder='Coupon Code'
              variant='outlined'
              size='small'
              className='flex-1 dark:invert'
            />
            <Button variant='outlined' color='error'>
              Apply
            </Button>
          </div>

          <Button
            variant='contained'
            color='error'
            className='w-full md:w-[200px] mt-4'
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Your Check</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you! Your order has been placed successfully.
          </Typography>
          <Typography mt={1}>
            Total: ${subtotal}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color='error'>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CheckOut
