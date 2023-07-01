import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full opacity-90">
        <nav className="flex justify-between items-center px-12 py-6">
            <a href="/">
                <span className='font-bold text-3xl'>LOGO</span>
            </a>
            <ul className='flex items-center space-x-14'>
                <li className="text-1xl"><button onClick={()=> navigate('/')}>Home</button></li>
                <li className="text-1xl"><button onClick={()=> navigate('/chats')}>About</button></li>
                <li className="text-1xl"><button onClick={()=> navigate('/nfts')}>NFTs</button></li>
            </ul>
        </nav>
    </div>
  )
}
