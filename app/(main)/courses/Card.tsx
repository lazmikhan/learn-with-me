import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
interface Props{
    id:number
    title:string
    imgSrc:string
    onClick: (id:number)=>void,
    disabled:boolean
    active:boolean
}
export default function Card({id,title,imgSrc,disabled,active,onClick}:Props) {
  return (
    <div className={
        cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]", disabled && "pointer-events-none opacity-50")
    } onClick={()=>onClick(id)}>
        <div className='min-[24px] w-full flex items-center justify-end'>
{
    active && (
        <div className='rounded-md bg-green-600 flex-items-center justify-center p-1.5'>
            <Check className='text-white stroke-[4] h-4 w-4'/>
        </div>
    )
}
        </div>
    
      <Image alt='flag' src={imgSrc} width={93.33} height={70} className='rounded-lg drop-shadow-700 '/>
      <h3>{title}</h3>
    </div>
  )
}
