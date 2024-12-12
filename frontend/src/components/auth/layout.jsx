

import React from 'react'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (


    <div className="flex h-screen bg-gray-900">
      
      <div className="flex-1 bg-gradient-to-b from-purple-800 via-pink-700 to-red-600 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-8">
            <h1 className="text-4xl font-extrabold">
              Don't have an account?
            </h1>
            <p className="text-lg font-medium leading-relaxed">
              Register to unlock all the amazing features. <br />
              Manage your business in one place for free!
            </p>
            
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-1 flex items-center justify-center">        
        {<Outlet />}
      </div>
    </div>


  )
}

export default layout