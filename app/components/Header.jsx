import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='bg-[#251749] flex justify-between text-5xl italic'>
        <Image src='/assets/cookie.png' width={50} height={50} />
        <span className='p-3 text-[#FFFBEB]'>Cookie Stand Admin</span>

        <Image src='/assets/cookie.png' width={50} height={50} />
      </div>
    </header>
  )
}

export default Header
