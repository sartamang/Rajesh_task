import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({open}) => {
  return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial = {{opacity: 0, y: -100}}
                        animate = {{opacity: 1, y:0}}
                        exit = {{opacity: 0, y:-100}}
                        transition={{duration: 0.3}}
                        className= "absolute top-20 left-0 w-full z-20"
                    >
                        <div className="bg-blue rounded-2xl items-center py-2">
                            <ul className="flex flex-col justify-center text-center gap-4">
                                <li><Link to="/" className=" text-white text-sm font-semibold inline-block hover:border-b-2 w-15">Home</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-25 ">Our Programs</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-25 ">News & Events</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-30 ">Carrer Placemnt</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-23 ">Campus Life</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-18 ">About Us</Link></li>
                                <li><Link to="" className="text-white text-sm font-semibold inline-block hover:border-b-2 w-20 ">Contact Us</Link></li>
                            </ul>
                        </div>    
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
export default ResponsiveMenu