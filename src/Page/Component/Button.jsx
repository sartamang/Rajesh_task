import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

const Button = ({Contact, text= "white", bg = "bg-transparent", hoverbg = "bg-blue-500", hovertext = "text-blue"}) => {
  return (
    <>
      <button className={`${bg} ${hoverbg} rounded-md transition-all ease-in duration-300`}>
        <Link 
        to="/" 
        className={`border-[1px] px-2 py-1 rounded-md ${text} cursor-pointer flex justify-center items-center gap-2 px-2 ${hovertext} pointer-events-auto font-semibold`}
        
        >
          {Contact} <GoArrowRight />
        </Link>
      </button>
    </>
  )
}

export default Button