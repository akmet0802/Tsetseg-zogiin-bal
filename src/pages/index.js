import React from 'react'
import Image from 'next/image';

export default function Home() {
  return (<div className='w-full h-screen flex justify-center items-center bg-yellow-300'><div className='text-2xl font-bold text-orange-500 px-24'><div>Hello guys its me the best Bee with best honey</div> <Image
    className='rounded-lg'
    src="/bee.jpg" // Path to your image
    width={500}        // Desired width
    height={500}       // Desired height
    alt="Profile Picture" // Alt text for accessibility
  /></div></div>
    
  )
}
