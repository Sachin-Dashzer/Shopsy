import React from 'react'
import { Routes, Route } from 'react-router-dom'


import AuthLayout from './components/auth/layout.jsx'
import AuthLogin from './pages/auth/login.jsx'
import AuthRegister from './pages/auth/register.jsx'

import AdminLayout from './components/admin-view/layout.jsx'
import AdminDashboard from './pages/admin-view/dashboard.jsx'
import AdminProducts from './pages/admin-view/products.jsx'
import AdminFeatures from './pages/admin-view/features.jsx'
import AdminOrders from './pages/admin-view/orders.jsx'

import ShopLayout from './components/shopping-view/layout.jsx'
import ShopListing from './pages/shopping-view/listing.jsx'
import ShopCheckout from './pages/shopping-view/checkout.jsx'
import ShopHome from './pages/shopping-view/home.jsx'
import ShopAccount from './pages/shopping-view/account.jsx'

import NotFound from './pages/not-found/notFound.jsx'

import CheckAuth from './components/common/checkAuth.jsx'

import HeroSection from './pages/Home/Herobanner.jsx'

const App = () => {

  const isAuthenticated = false
  const user = {
    role : 'admin'
  }


  return (
    <>


      <Routes>

        <Route path='/' element={<HeroSection />} />

        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>

        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopLayout />
          </CheckAuth>
        }>
          <Route path='home' element={<ShopHome />} />
          <Route path='account' element={<ShopAccount />} />
          <Route path='listing' element={<ShopListing />} />
          <Route path='checkout' element={<ShopCheckout />} />
        </Route>


        <Route path='/*' element={<NotFound />} />

      </Routes>




    </>
  )
}

export default App