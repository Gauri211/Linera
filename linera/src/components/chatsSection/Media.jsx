import React, { useState } from 'react'
import avatar from '../../images/avatar.png'

export default function Media() {
    const[toggle, setToggle]= useState(1)
  return (
    <div>
        <ul>
            <div className='p-4  w-[20rem] justify-around flex'>
                <li onClick={()=> setToggle(1)} className='hover:cursor-pointer'>Sent</li>
                <li onClick={()=> setToggle(2)} className='hover:cursor-pointer'>Received</li>
            </div>
        </ul>
        <div>
            {toggle===1 && (
                <div className='flex'>
                    <img src={avatar} alt="avatar" className='w-[40px] h-[40px] rounded-full px-2'/>
                    <span>John Smith</span>
                    <span>9:02 AM</span>
                </div>
            )}

            {toggle===2 && (
                <div className='flex'>
                    <img src={avatar} alt="avatar" className='w-[40px] h-[40px] rounded-full px-2'/>
                    <span>Alex Parish</span>
                    <span>16:00 PM</span>
                </div>
            )}
        </div>
    </div>
  )
}
