import React, { Children, useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Carousel = ({children: image, autoSlide = false, autoSlideInterval=3500}) => {
   
    const [current, setCurrent] = useState(0)

    const previous = () =>{
        setCurrent (current === 0 ? image.length-1 : current-1)   //yedi 1st slide ma xa vany list slide ma ja natra one step paxadi slide ma za
    }

    const next = () => {
        setCurrent (current === image.length-1 ? 0 : current+1)    //yedi last slide xa vany 1st side ma jaos natra next side ma ja
    }

    //autoslide
    useEffect (() =>{
        if(!autoSlide) return
        const slideInterval = setInterval (next, autoSlideInterval)
        return () => clearInterval(slideInterval) 
    },[autoSlide, autoSlideInterval, current])
  return (
    <>
        <div className="overflow-hidden relative ">
            <div 
            className="flex transition-transform ease-out duration-500"
            style={{transform: `translateX(-${current * 100}%)`}}
            >
                {image}
            </div>

            {/* button */}
            <div className="absolute inset-0 flex justify-between px-2 items-center">
                <button 
                className=" bg-gray-200 rounded-full hover:bg-gray-300 duration-200 ease-in-out cursor-pointer"
                onClick={previous}
                >
                    <MdChevronLeft size={35}/>
                </button>
                <button 
                className=" bg-gray-200 rounded-full hover:bg-gray-300 duration-200 ease-in-out cursor-pointer"
                onClick={next}
                >
                    <MdChevronRight size={35}/>
                </button>
            </div>

            {/* dots */}
            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex justify-center gap-3 items-center">
                    {image.map ((s,i) => (
                        <div key={i} className={`transition-all h-1.5 w-1.5 bg-blue rounded-full ${current === i ? "px-2" : "px-1"}`}/>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Carousel


