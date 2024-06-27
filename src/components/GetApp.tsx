import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full pb-[100px]'>
      <div className='get-app'>
        {/* Left */}
        <div className='flex flex-1 flex-col z-20 items-start justify-center '>
            <h2 className='bold-52 text-balance'>Get for <span className='text-green-500'>free</span> now !</h2>
            <p className='regular-20 py-10'>Available on iOS and Android</p>

          <div className='flex flex-col w-full lg:flex-row gap-2 whitespace-nowrap' >
            <Button
              type='button'
              title='App Store'
              icon='apple.svg'
              variant='btn_white'
            />
            <Button
              type='button'
              title='Play Store'
              icon='android.svg'
              variant='btn_dark_green'
            />
          </div>
        </div>
        {/* Right */}
        <div className='flex flex-1 items-center justify-end'>
          <Image
            src="/phones.png"
            alt="phones"
            width={480}
            height={640}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp