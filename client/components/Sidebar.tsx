'use client'
import React from 'react'
import { Button } from './ui/button'
import { Menu, Bell, Sun, Settings } from "lucide-react";
const Sidebar = () => {
  return (
    <div>
        <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
            <div> Logo</div>
                <h1 className='font-extrabold text-2xl'>
                    LogoName
                </h1>
            
        </div>
        <Button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 ' onClick={() => {}}>
            <Menu className='w-4 h-4'/>
        </Button>
        <div className='flex-frow mt-8'>

        </div>
        <div>
            <p className='text-center text-xs text-black-500'>&copy right</p>
        </div>
    </div>
  )
}

export default Sidebar