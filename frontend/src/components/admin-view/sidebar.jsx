import React from 'react'

const adminSidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 flex flex-col py-6 px-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
          <i className="fas fa-cloud text-white"></i>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">BRESS</h1>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-4">
        {/* Dashboard */}
        <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <i className="fas fa-tachometer-alt text-lg"></i>
          <span className="text-lg">Dashboard</span>
        </div>

        {/* Projects */}
        <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <i className="fas fa-folder-open text-lg"></i>
          <span className="text-lg">Projects</span>
        </div>

        {/* Task List (Active State) */}
        <div className="flex items-center space-x-3 bg-gray-800 text-white p-3 rounded-lg">
          <i className="fas fa-tasks text-lg"></i>
          <span className="text-lg">Task list</span>
        </div>

        {/* Services */}
        <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <i className="fas fa-briefcase text-lg"></i>
          <span className="text-lg">Services</span>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
          <div className="flex items-center space-x-3">
            <i className="fas fa-bell text-lg"></i>
            <span className="text-lg">Notifications</span>
          </div>
          {/* Notification Badge */}
          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
            2
          </span>
        </div>

        {/* Chat */}
        <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <i className="fas fa-comment-dots text-lg"></i>
          <span className="text-lg">Chat</span>
        </div>
      </nav>
    </div>
  )
}

export default adminSidebar