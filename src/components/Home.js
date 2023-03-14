import React from 'react'
import Image from '../assests/homeimage.png'

const Home = () => {
    return (
        <div className='bg-blue-200 border-8 border-white  flex  w-full '>
            <div className='flex flex-col p-4 mx-auto max-w-[800px] bg-blue-300 border-2 border-b-white m-4 align-middle px-8  '>
                <p className='text-6xl font-boldhand2 text-white '>SmartPark System</p>
                <p className='max-w-[650px] mt-4  text-xl font-content1'>Smart Parking sensing technology is leading the way in the delivery of proven, fully integrated, end-to-end solutions, resulting in a transformation of the complete parking experience.</p>
                <p className='max-w-[650px] mt-4 mb-2 font-content2 text-xl '>Our SmartPark system is made up of interchangeable components and fully integrates parking, guidance, payment and analytics as well as a host of other complementary services and options. This makes the complete SmartPark solution truly a sum of its parts, and an industry leader in the technology and parking sector.

                </p>
            </div>
            <div>
                <img src={Image} className='h-80 mt-4 mr-8 p-5'></img>
            </div>
        </div>
    )
}

export default Home
