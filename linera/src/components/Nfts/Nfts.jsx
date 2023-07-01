import React from 'react'
import Navbar from '../Navbar'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import StarsCanvas from '../canvas/Stars';

const Nfts = () => {
  return (
    <>
    <div>
        <Navbar />
        <hr className="bg-[#8A8787] opacity-25"/>
        <div className='flex'>
            {/* <div className='w-[300px] bg-[#112364] h-[700px]'>
                Text
            </div> */}
            <div className='w-[700px]'>
                <Tilt className='xs:w-[300px] w-full m-[5%]'>
                    <motion.div
                        variants={fadeIn("right", "spring")}
                        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    >
                        <div
                            options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                            }}
                            className='bg-tertiary rounded-[20px] min-h-[280px] flex items-center flex-col'
                        >
                            <img
                                src='https://th.bing.com/th/id/R.d66779d98fc67121b0658a4ff1fcfb2f?rik=t%2fRn3iIfwSXNRA&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f08%2fviola-tricolor-pansy-flower-close-up.jpg&ehk=RENzkRl%2fV%2f%2fYLVz6jjvX1LI%2fB4ETHN0P7hGoBvtVrek%3d&risl=&pid=ImgRaw&r=0'
                                alt=''
                                className='w-[220px] h-[220px] object-contain'
                            />

                            <h3 className='text-white text-[20px] font-bold text-center'>
                                title
                            </h3>
                        </div>
                    </motion.div>
                </Tilt>
            </div>

        </div>
    </div>
            <StarsCanvas />
    </>
  )
}

export default Nfts