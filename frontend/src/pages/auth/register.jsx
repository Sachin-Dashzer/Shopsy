import React, { useState } from 'react'
import { registerFormControls } from '../../config/index.js'
import CommonForm from '../../components/common/form.jsx'



const initialState = {
  userName : "",
  email: "",
  password: ""
}

const register = () => {
  const [formData, setformData] = useState(initialState)

  return (
    <>
      <div className="w-full max-w-md text-white bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-white">
          Sign In
        </h2>

        <CommonForm
          formControls={registerFormControls}
          buttonText="Sign in"
          formData={formData}
          setFormData={setformData}
        // onSubmit = {onsubmit}
        />

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/auth/login" className="text-pink-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </>
  )
}

export default register