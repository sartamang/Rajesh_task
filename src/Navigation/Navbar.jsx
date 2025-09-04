import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import ResponsiveMenu from './Component/ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const[active, setActive] = useState("Home")

   useEffect (() => {
    const handleHamburger = () => {
        if (window.innerWidth >= 768){
            setOpen(false)
        }
    }
    window.addEventListener('resize', handleHamburger)
    return () => window.removeEventListener('resize', handleHamburger)
   },[])
  return (
    <>
        <nav className="w-full">
            <div className="fixed top-0 left-0 bg-blue w-full shadow-lg z-50">
                <div className=" py-4 ">
                    <ul className="flex items-center md:justify-center justify-between md:px-[0] px-[10%] gap-6">
                        {/* logo */}
                        <li className="">
                            <Link to="/" className="">
                            <img src="" alt="" /> logo
                            </Link>
                        </li>
                        {/* list/menu */}
                        <div className='hidden md:flex md:gap-6 gap-8'>
                            <li>
                                <Link to="/" 
                                className={`text-white inline-block w-13 text-center text-sm border-b-2 `}
                                >Home</Link>
                            </li>
                            <li>
                                <Link to="/program" 
                                className={`text-white text-sm inline-block w-25 text-center border-b-2 ${active == "Our Programs" ? "border-white" : "border-transparent"} `}
                                onClick={() => setActive("Our Programs")}
                                >Our Programs</Link>
                            </li>
                            <li><Link to="" className="text-white text-sm inline-block w-25 text-center hover:border-b-2 ">News & Events</Link></li>
                            <li><Link to="" className="text-white text-sm inline-block w-30 text-center hover:border-b-2 ">Carrer Placemnt</Link></li>
                            <li><Link to="" className="text-white text-sm inline-block w-23 text-center hover:border-b-2 ">Campus Life</Link></li>
                            <li><Link to="" className="text-white text-sm inline-block w-18 text-center hover:border-b-2 ">About Us</Link></li>
                            <li><Link to="" className="text-white text-sm inline-block w-20 text-center hover:border-b-2 ">Contact Us</Link></li>
                        </div>
                        {/* hamburger menu     */}
                        <div className="md:hidden cursor-pointer" onClick={()=>setOpen(!open)}>
                            <IoMenu  className="text-3xl text-white"/>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
                {/* responsive menu */}
                <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar