import React from 'react'
import StarsCanvas from '../canvas/Stars'
import Navbar from '../Navbar'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
        <Navbar />
        <motion.div 
            className='flex justify-between'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
        >
            <div className="mt-[12%]">
                <h1 class="text-5xl font-bold tracking-wider">
                    Dummy Heading
                </h1>
                <p className='pt-[20px] w-[550px] text-left ml-[100px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quia, quae a? Aspernatur, natus. Eveniet vero 
                    ipsum nostrum tempora quaerat dolorum. Tempore aspernatur 
                    eligendi maxime quibusdam debitis, illum soluta beatae molestiae.
                </p>
                <div className='w-[110px] green-pink-gradient p-[2px] rounded-md mt-[20px] ml-[100px]'>
                    <button className='bg-sky-950 p-[7px] hover:bg-sky-500'>Get Started</button>
                </div>
            </div>
            {/* <div>
                hello
            </div> */}
        </motion.div>
        <StarsCanvas />
    </div>
  )
}

export default Home