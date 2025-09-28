import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import About from './pages/about/About'
import Account from './pages/account/Account'
import Carts from './pages/carts/Carts'
import CheckOut from './pages/checkout/CheckOut'
import Contacts from './pages/contact/Contacts'
import Home from './pages/home/Home'
import LogIn from './pages/login/LogIn'
import NotFound from './pages/notFound/NotFound'
import ProductById from './pages/productById/productById'
import Products from './pages/products/Products'
import SignUp from './pages/signup/SignUp'
import Wishlist from './pages/wishlist/Wishlist'

const App = () => {
	const local = JSON.parse(localStorage.getItem('wish')) || []
	const [wish, setWish] = useState(local)

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout wish={wish} setWish={setWish} />}>
					<Route index element={<Home wish={wish} setWish={setWish} />} />
					<Route path='about' element={<About />} />
					<Route path='carts' element={<Carts />} />
					<Route path='login' element={<LogIn />} />
					<Route path='signup' element={<SignUp />} />
					<Route path='*' element={<NotFound />} />
					<Route path='contact' element={<Contacts />} />
					<Route path='products' element={<Products />} />
					<Route
						path='wishlist'
						element={<Wishlist wish={wish} setWish={setWish} />}
					/>
					<Route path='productById/:id' element={<ProductById />} />
					<Route path='checkout' element={<CheckOut />} />
					<Route path='account' element={<Account />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
