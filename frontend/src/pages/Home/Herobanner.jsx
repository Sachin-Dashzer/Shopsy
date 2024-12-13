import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <>
            
            <Navbar />
            
            <div className="bg-amber-50 min-h-screen flex items-center px-10 lg:px-20">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-utensils text-white"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">Bites</h1>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                        We Serve The Taste <br /> You Love{" "}
                        <span className="text-yellow-500">
                            <i className="fas fa-smile"></i>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600">
                        This is a type of restaurant that typically serves food and drinks, in
                        addition to light refreshments such as baked goods or snacks. The term
                        comes from the French word meaning food.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600">
                            Explore Food
                        </button>
                        <button className="bg-white border border-gray-300 px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-md">
                            <i className="fas fa-search"></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 relative">
                    {/* Image */}
                    <img
                        src="https://via.placeholder.com/500x500"
                        alt="Food Plate"
                        className="rounded-full shadow-lg w-3/4 mx-auto lg:mx-0"
                    />

                    {/* Category List */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 space-y-4">
                        {[
                            { name: "Dishes", icon: "fas fa-apple-alt" },
                            { name: "Dessert", icon: "fas fa-ice-cream" },
                            { name: "Drinks", icon: "fas fa-coffee" },
                            { name: "Platter", icon: "fas fa-pizza-slice" },
                            { name: "Snacks", icon: "fas fa-cookie" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 bg-white shadow-md p-3 rounded-full hover:shadow-lg cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-yellow-100 flex items-center justify-center rounded-full">
                                    <i className={`${item.icon} text-yellow-500`}></i>
                                </div>
                                <span className="font-semibold text-gray-700">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
