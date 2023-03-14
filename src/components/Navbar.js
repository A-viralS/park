import React from 'react';
import Logo from '../assests/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {

    return (
        <div className=' h-[120px] bg-img w-full flex justify-between px-4 bg-orange-400 '>
            <div className=' fixed top-1 h-20 mt-1 bg-gradient-to-b from-blue-300 via-white to-white flex w-full rounded-md'>
                <div className='text-orange-400 flex'>
                    <img src={Logo} alt="img" className=' mt-0  ml-8  h-20 ' />
                    <ul className='flex space-x-8   justify-center mt-8 ml-60 '>

                        <li className='font-bold ' >

                            <div>
                                <button class="peer px-5 mb-[0.5px]  border-b-8 border-blue-500 rounded-md  text-orange-400 hover:bg-blue-400 hover:text-white">SOLUTIONS</button>


                                <div class="hidden peer-hover:flex hover:flex w-[250px]  flex-col bg-orange-100 drop-shadow-lg fixed">
                                    <a class="px-5 py-3 text-black hover:bg-white  " href="#">SUPERMARKETS</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">AIRPORTS</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">HOSPITALS AND MEDICAL CENTERS</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">UNIVERSITIES EDUCATIONAL INSTITUTES</a>
                                </div>
                            </div>

                        </li>

                        <li className=''>
                            <div>
                                <button className='peer px-5 mb-[0.5px]  border-b-8 border-blue-500 rounded-md  text-orange-400 hover:bg-blue-400 font-bold  hover:text-white'>SMARTPARK SYSTEMS</button>
                                <div className='hidden font-bold peer-hover:flex hover:flex w-[250px] flex-col  bg-orange-100  shadow-black fixed'>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">SMART PARKING APP</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">SMART SPOT GATEWAYS</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">VEHICLE DETECTION CENTERS</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">COMPLIANCE MANAGEMENT SYSTEM</a>
                                    <a class="px-5 py-3 text-black hover:bg-white" href="#">SMART CLOUD</a>
                                </div>
                            </div>
                        </li>
                        <li className='font-bold ' >

                            <div>

                                <Link to="contact" smooth={true} duration={500} >
                                    <button class="peer px-5 mb-[0.5px]  border-b-8 border-blue-500 rounded-md  text-orange-400 hover:bg-blue-400 hover:text-white">
                                        CONTACT
                                    </button>
                                </Link>




                            </div>

                        </li>

                    </ul>
                    <div className='text-white font-bold mt-6 ml-64'>

                        <Link to="contact" smooth={true} duration={500} >
                            <button class="peer bg-blue-400 w-36 h-12 px-5 mb-[0.5px]  border-b-8 border-blue-500 rounded-md  text-white text-xl hover:bg-blue-400 hover:text-white">
                                REGISTER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Navbar;
{/* <li className='font-bold'>SMART PARKING SYSTEM</li>
<li className='font-bold'>ABOUT</li> */}

{/* <img src={Logo} alt="img" className=' mt-0 h-28  sm:ml-8  sm:h-40 ' />
<ul className='flex text-white mx-3 space-x-2 '>

    <li>SOLUTIONS  </li>
    <li>Smart Parking System</li>
</ul> */}
{/* <div className='container'>
<div className='topnav   '>
    <div className=''></div>
</div>
</div> */}