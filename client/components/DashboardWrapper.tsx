
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="light flex bg-gray-50 text-gray-50 w-full min-h-screen">
      <Sidebar />
        <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-100 md:pl-72">
          <Navbar />
        {children}
        </main>
        </div>
  )
}

export default DashboardWrapper