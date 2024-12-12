

import React from 'react'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (


    <section className="authLayoutContainer w-100 h-64 bg-black flex justify-center align-middle">



      <div className="authLayoutBox w-1/3 rounded-sm bg-slate-200 p-4 text-center">

        <h1>User Authentication</h1>

        <div><Outlet /></div>

      </div>


    </section>



  )
}

export default layout