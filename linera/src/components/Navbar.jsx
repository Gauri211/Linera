import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-[#090536] w-full opacity-90">
        <nav className="flex justify-between items-center px-12 py-6">
            <a href="/">
                <span className='font-bold text-3xl'>LOGO</span>
            </a>
            <ul className='flex items-center space-x-14'>
                <li className="text-1xl">Home</li>
                <li className="text-1xl">NFTs</li>
                <li className="text-1xl">About</li>
            </ul>
        </nav>
        <hr className="bg-[#8A8787] opacity-25"/>
    </div>
  )
}
