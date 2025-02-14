import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import question from '@/assets/icons/question.svg'
import file from '@/assets/icons/file.svg'
import plus from '@/assets/icons/plus.svg'
import settings from '@/assets/icons/settings.svg'

const Sidebar = () => {
  return (
    <div className='min-h-full min-w-fit p-4 bg-tertiary rounded-lg flex flex-col items-center justify-between border border-2 border-brown/5'>
        <div className='flex flex-col gap-4 items-center'>

        <Image src={logo} alt='logo' className='w-10 h-10' />
        <div className='bg-primary rounded-lg p-[14px] flex items-center justify-center w-fit'>
            <Image src={plus} alt='plus' className='w-4 h-4 rounded-full border border-secondary' />
        </div>
        </div>


        <div className='flex flex-col gap-6'>
            <Image src={settings} alt='settings' className='w-5 h-5 opacity-80' />
            <Image src={question} alt='question' className='w-5 h-5 border-2  border-black rounded-full opacity-80' />
            <Image src={file} alt='file' className='w-5 h-5 opacity-80' />
        </div>
    </div>
  )
}

export default Sidebar