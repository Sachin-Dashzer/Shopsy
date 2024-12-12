import React from 'react'
import AdminHeader from './header'
import AdminSidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const layout = () => {
    return (
        <>

            <section className="adminLayout w-100 h-screen flex">

                <div className='w-1/3 bg-black text-white py-4'>
                    <AdminSidebar />
                </div>
                <div className='w-2/3'>

                    <AdminHeader />

                    <div>
                        <Outlet />
                    </div>

                </div>

            </section>

        </>
    )
}

export default layout