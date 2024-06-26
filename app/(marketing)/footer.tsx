import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
   <footer className='hidden lg:block  h-20 w-full border-t-2 border-slate-200 p-2'>
  <div className='flex items-center justify-evenly'>
    <Button variant={"ghost"}>
      <Image src={"/flags/india.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>India</b>
    </Button>
    <Button variant={"ghost"}>
      <Image src={"/flags/brazilpng.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>Brazil</b>
    </Button>
    <Button variant={"ghost"}>
      <Image src={"/flags/malaysiapng.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>Malaysia</b>
    </Button>
    <Button variant={"ghost"}>
      <Image src={"/flags/spain.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>Spain</b>
    </Button>
    <Button variant={"ghost"}>
      <Image src={"/flags/bangladesh.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>Bangladesh</b>
    </Button>
    <Button variant={"ghost"}>
      <Image src={"/flags/pakistan.png"} alt='bangla' width={50} height={50}/>
      <b className='ml-2'>Pakistan</b>
    </Button>
  </div>
   </footer>
    </div>
  )
}
