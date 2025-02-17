import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import question from '@/assets/icons/question.svg'
import file from '@/assets/icons/file.svg'
import plus from '@/assets/icons/plus.svg'
import settings from '@/assets/icons/settings.svg'

const Sidebar = () => {
  return (
    <div className='min-h-full min-w-fit p-4 bg-blackThree flex flex-col items-center justify-between border-r-2 border-blackOne'>
        <div className='flex flex-col gap-4 items-center'>

            <Image src={logo} alt='bulb' className='w-10 h-10' />

        <div className='bg-orange rounded-lg p-3 flex items-center justify-center w-fit'>
            <Image src={plus} alt='plus' className='w-6 h-6 rounded-full border-2 border-white p-1' />
        </div>
        </div>


        <div className='flex flex-col gap-6'>
            <Image src={settings} alt='settings' className='w-5 h-5 ' />
            <Image src={question} alt='question' className='w-5 h-5 border-2  border-white rounded-full' />
            <Image src={file} alt='file' className='w-5 h-5' />
        </div>
    </div>
  )
}

export default Sidebar