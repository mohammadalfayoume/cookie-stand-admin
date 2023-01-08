import Image from 'next/image'
import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='m-5 grid grid-cols-3 grid-flow-row gap-4'>
        {props.result.map((item) => {
          if (item.location==="Empty") return ""
          return (
            <div class='max-w-sm rounded overflow-hidden shadow-lg border-[#251749] bg-[#FFFBEB] dark:bg-[#FFFBEB] border-2 '>
              <Image
                src='/assets/cookie.png'
                width={300}
                height={300}
                className='content-center bg-none'
              />

              <div class='px-6 py-4 flex flex-col justify-between gap-10'>
                <div class='font-bold text-xl mb-2 text-center'>{item.location}</div>
                <p class='text-gray-700 text-center flex flex-col justify-between gap-6 text-white'>
                    <p className='bg-[#263159] rounded border border-[#251749]'>Minumim Cookies: {item.minumimCookie}</p>

                    <p className='bg-[#263159] rounded border border-[#251749]'>Maxumim Cookies: {item.maxumimCookie}</p>
                    <p className='bg-[#263159] rounded border border-[#251749]'>Average Cookies:{item.avgCookie}</p>
                  
                </p>
              </div>
            </div>
          )
        })}
      </div>
      {props.result.length == 0 && (
        <div className="items-center">
          <h2 className=' font-bold text-[#251749] text-3xl text-center m-4 dark:text-[#FFFBEB]'>
          No Cookie Stands Available
          </h2>
          <div class='flex justify-center mb-5'>
          <Image src='/assets/wait.gif' width={500} height={500} />
          </div>
          
        </div>
      )}
    </>
  )
}

export default Card
