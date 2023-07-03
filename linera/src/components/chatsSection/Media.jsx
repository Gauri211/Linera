import React, { useState } from 'react'
import avatar from '../../images/avatar.png'

export default function Media() {
    const[toggle, setToggle]= useState(1)
  return (
    <div className='border-r-2 border-[#8A8787] h-screen'>
        <ul>
            <div className='p-4  w-[25rem] justify-around flex'>
                <li onClick={()=> setToggle(1)} className='hover:cursor-pointer text-[#5867F0] border-b-4 border-[#5867F0]'>Sent</li>
                <li onClick={()=> setToggle(2)} className='hover:cursor-pointer text-[#5867F0] border-b-4 border-[#5867F0]'>Received</li>
            </div>
        </ul>
        <div>
            {toggle===1 && (
                <div className='flex py-2'>
                    <img src={avatar} alt="avatar" className='w-[55px] h-[50px] rounded-full px-2'/>
                    <span className='px-4'>John Smith</span>
                    <span className='px-2'>9:02 AM</span>
                </div>
            )}

            {toggle===2 && (
                <div className='flex py-2'>
                    <img src={avatar} alt="avatar" className='w-[55px] h-[50px] rounded-full px-2'/>
                    <span className='px-4'>Alex Parish</span>
                    <span className='px-2'>16:00 PM</span>
                </div>
            )}
        </div>
    </div>
  )
}
