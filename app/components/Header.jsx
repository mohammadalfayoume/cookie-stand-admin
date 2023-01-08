import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

const Header = () => {

  const {isDarkTheme,toggleThemeHandler}= useContext(ThemeContext)
  console.log(useContext(ThemeContext))
  return (
      <div className='bg-[#251749] dark:items-center dark:bg-[#FFFBEB] flex justify-between italic'>
        <Image src='/assets/cookie.png' width={50} height={50} />
        <span className='p-3 text-[#FFFBEB] dark:text-[#251749] text-xl'>Cookie Stand Admin</span>
        <button
          class='bg-transparent hover:bg-[#FFFBEB] dark:hover:bg-[#251749] dark:bg-[#FFFBEB] dark:text-[#251749] text-white font-semibold dark:hover:text-[#FFFBEB] hover:text-[#251749] py-2 px-4 border border-[#251749] hover:border-transparent rounded'
          onClick={toggleThemeHandler}
        >
          Theme mode
        </button>
      </div>
  )
}

export default Header
