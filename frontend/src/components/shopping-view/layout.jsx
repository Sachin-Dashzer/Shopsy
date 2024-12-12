import React from 'react'
import ShoppingHeader from './header.jsx'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <section className='w-100 h-screen'>
      <ShoppingHeader />

      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default layout