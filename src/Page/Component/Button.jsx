import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

const Button = ({Contact, text= "white", bg = "white"}) => {
  return (
    <>
      <Link to="/" className={`border-[1px] px-2 py-1 rounded-md ${text} ${bg} cursor-pointer flex justify-center items-center gap-2 w-[125px] hover:text-blue`}>
        {Contact} <GoArrowRight />
      </Link>
    </>
  )
}

export default Button