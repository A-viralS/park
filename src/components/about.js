import React from 'react'
import Image1 from '../assests/aboutimg.png'

const about = () => {
    return (
        <div className='w-full bg-gradient-to-l from-blue-300 via-white to-white'>
            <div className='flex flex-col mx-auto p-8  px-8'>
                <div className='flex max-w-[1200px] '>
                    <img src={Image1} className='h-96 w-96 ' />
                    <div className='ml-44'>
                        <p className='text-[40px] font-capital1 font-bold text-blue-900 border-b-4 border-blue-800 inline'>The SmartPark system</p>
                        <p className='mt-4 font-content1' >Our SmartPark system comprises of in-ground and OHI vehicle detection sensors, which are installed per bay and link up to a network of WiFi enabled SmartSpots, which in turn feed real time data into our SmartCloud platform.
                        </p>

                        <p className='mt-2'>
                            Once installed, operators can manage the parking needs of their community using the visibility that the SmartCloud dashboard provides. This not only shows live parking events, but affords users detailed site information such as parking trends and abuse of parking spaces, meaning informed decisions can be made around how the status of each individual bay is regulated. As well, detailed reports can be generated, and analysts also have the power to generate customised, targeted reporting themselves, without having to bring in external IT contractors.

                        </p>
                        <p className='mt-2'>
                            We have found in many smart city sites that a key requirement is the ability to expand on the system in the future. This benefit is integral to our system as it has been designed from day one to be a true smart city tool. By simply installing more sensors and SmartSpots, we can streamline these into SmartCloud at the touch of a button.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default about