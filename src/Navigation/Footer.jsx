import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";



const Footer = () => {
  return (
    <>
        <div className="bg-gray-200 text-gray-500 w-full overflow-x-hidden pt-20 pb-5">
            <div className='max-w-5xl mx-auto'>  
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-10 w-full pb-10">
                        <div className="">
                            <ul className="list-none md:text-left text-center">
                                <li className="pb-2">
                                    <Link to="/" > 
                                        logo
                                    </Link>
                                </li>
                                <li className="pb-2 flex items-center md:justify-start justify-center">
                                    <FaLocationDot className='mr-2'/> 
                                    <p>Namuna Tole, Bharatpur-10, Chitwan</p>
                                </li>
                                <li className="pb-2 flex items-center md:justify-start justify-center">
                                    <IoIosPhonePortrait className='mr-2'/>
                                    <p>056-524278 / 056-53327</p>
                                </li>
                                <li className="pb-2 flex items-center  md:justify-start justify-center">
                                    <IoMdMail className='mr-2'/>
                                    <p>info@pcms.com.np</p>
                                </li>
                                <li>
                                    <p className="pb-2 text-green-600">Find us in:</p>
                                    <div>
                                        <ul className="flex gap-5 md:justify-start justify-center">
                                            <li className='inline-block text-xl hover:drop-shadow-lg duration-300 ease-in'>
                                                <Link to="">
                                                    <FaFacebook className=" text-blue-600"/>
                                                </Link>
                                            </li>
                                            <li className='inline-block text-xl hover:drop-shadow-lg duration-300 ease-in'>
                                                <Link to="">
                                                    <FaInstagram />
                                                </Link>
                                            </li>
                                            <li className='inline-block text-xl hover:drop-shadow-lg duration-300 ease-in'>
                                                <Link to="">
                                                    <FaXTwitter />
                                                </Link>
                                            </li>
                                            <li className='inline-block text-xl hover:drop-shadow-lg duration-300 ease-in'>
                                                <Link to="">
                                                    <FaLinkedin className="text-blue"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:pl-[40%] md:text-left text-center pl-[0] ">
                            <ul>
                                <li className="text-blue-700 pb-2"> Quick Link:</li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">About us</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">Admisson</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="/program">Program / Courses</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">Campus Life</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">Carrer Placement</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">News & Events</Link>
                                </li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="">Contact us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:pl-[40%] md:text-left text-center pl-[0] ">
                            <ul>
                                <li className="text-blue-700 pb-2">Legal Links:</li>
                                <li className="pb-2 hover:text-blue-900 duration-300">
                                    <Link to="" >Privacy Policy</Link>
                                </li>
                                <li className="hover:text-blue-900 duration-300">
                                    <Link to="" >Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        @ years 2025. All rights reserved - Presidency College
                    </div>
                    <div className="flex items-center justify-center">
                        Designed and Developed by: 
                        <Link to="" className=""> 
                            <img src="" alt="" className='w-[100px]' />Adhira company logo
                        </Link>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Footer