import React from 'react'
import avatar from '../../images/avatar.png'
import setting from '../../images/setting.png'
import attach from '../../images/attach.png'
import send from '../../images/send.png'

export default function Message() {
  return (
    <div className='w-[40rem] p-4 flex flex-col place-content-between'>
        <div className='bg-[#ffffff] flex p-1 justify-between items-center'>
            <img src={avatar} alt="avatar" className='w-[50px] h-[50px] rounded-full'/>
            <span className='text-black text-2xl'>John Smith</span>
            <img src={setting} alt="" className='w-[30px] h-[30px] rounded-full'/>
        </div>
        <div className='flex px-4 justify-between'>
            <div className='relative rounded-full bg-[#ffffff] w-[45px] h-[45px] items-center overflow-hidden left-[10px]' >
                <img src={attach} alt="attach" className='absolute w-[32px] h-[32px] top-[7px] left-[6px]' />
            </div>
            <input type="text" placeholder='Type a message...' className='rounded-[10px] bg-[#ffffff] border-gray-300 text-gray-900 p-1 px-2 w-[28rem]'/>
            <div className='relative rounded-full bg-[#ffffff] w-[45px] h-[45px] items-center overflow-hidden right-[15px]' >
                <img src={send} alt="send" className='absolute w-[32px] h-[32px] top-[8px] left-[3px]' />
            </div>
        </div>
    </div>
  )
}
