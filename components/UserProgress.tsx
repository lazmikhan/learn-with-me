import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Heart, InfinityIcon } from 'lucide-react'
import { courses } from '@/db/schema'

type Props={
    activeCourses:typeof courses.$inferSelect,
    hearts:number,
    points:number,
    hasActiveSubscription:boolean

}
export default function UserProgress({activeCourses,hearts,points,hasActiveSubscription}:Props) {
  return (
    <div className='flex items-center justify-between gap-x-2 w-full'>
      <Link href={"/courses"}>
      <Button variant={"ghost"}>
        <Image className='rounded-md border' width={32} height={32} src={activeCourses.imageSrc} alt={activeCourses.title}/></Button></Link>
        <Link href={"/shop"}><Button className='text-orange-500' variant={"ghost"}>
            <Image src={"/points/starGold.png"} height={28} width={28} alt='Points' className='mr-2'/>{points}
            </Button></Link>

            <Link href={"/shop"}><Button className='text-rose-500' variant={"ghost"}>
           {
            hasActiveSubscription? <InfinityIcon fill='red'/>: <> <Image height={40} width={40} src={"/heart.png"} alt='title'/> {hearts}</>
           }
            </Button></Link>
    </div>
  )
}
