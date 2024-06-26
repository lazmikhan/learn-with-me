import React from 'react'
import { MobileSidebar } from './MobileSidebar'

export default function MobileHeader() {
  return (
    <nav className='lg:hidden  h-[50px] flex items-center bg-green-400 
    border-b
     fixed top-0 z-50 w-full'>

<MobileSidebar/>
    </nav>
  )
}
