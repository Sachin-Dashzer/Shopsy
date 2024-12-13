import React from 'react'

const Navbar = () => {
    return (





        <nav className="bg-amber-50 py-4 pb-0 px-10 lg:px-20 flex items-center justify-between shadow-sm">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-utensils text-white"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Bites</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
                {["About Us", "Menu", "Reviews", "Blog", "Contacts"].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="hover:text-yellow-500 transition duration-300"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Reserve Table Button */}
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-600 hidden lg:block">
                Reserve Table
            </button>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
                <i className="fas fa-bars text-gray-700 text-2xl"></i>
            </div>
        </nav>










    )
}

export default Navbar