import React from 'react'
import search from '../../images/search.png'
import avatar from '../../images/avatar.png'
import Message from './Message'
import Media from './Media'
import Navbar from '../Navbar'

export default function Chats() {
  return (
    <div className='bg-[#090536]'>
    <Navbar />
        <hr className="bg-[#8A8787] opacity-25"/>
    <div className=" h-screen w-full flex">
        <div className='p-4 w-[20rem]'>
            <div className='flex justify-between'>
                <input type="text" placeholder='search' className='rounded-[20px] bg-[#ffffff] border-gray-300 text-gray-900 p-1 px-2'/>
                <div className='relative rounded-full bg-[#ffffff] w-[36px] h-[36px] items-center overflow-hidden' >
                    <img src={search} alt="search icon" className=' absolute w-[25px] h-[25px] top-[3px] left-[3px]' />
                </div>
            </div>
            <div className='pt-10'>
                <div className='flex justify-between'>
                <img src={avatar} alt="avatar" className='w-[50px] h-[50px] rounded-full'/>
                <span>John Smith</span>
                <span>9:02 AM</span>
                </div>
            </div>
        </div>
        <Message />
        <Media />
    </div>
    </div>
  )
}
