'use client'
import React from 'react'
import { Button } from './ui/button'
import {Menu} from "lucide-react"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        <div className='flex justify-between items-center gap-5'>
            <Button className='px-3 py-3 rounded-full hover:bg-blue-500' onClick={() => {}}>
                <Menu className='w-4 h-4'/>

            </Button>

        </div>
    </div>
  )
}

export default Navbar