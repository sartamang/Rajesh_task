import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const Carousel_1 = () => {

    const control = useAnimation() 

    const MarqueeImage = [...images, ...images]
    
  return (
    <>
        <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
            className = "flex gap-6"
            animate = {control}
            onMouseEnter={() => control.stop()}
            onMouseLeave={() => control.start(
                {x: ["100%", "0%", "-100%", "-50%"],
                transition : {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }
            })}
            >
                {MarqueeImage.map((image, i) => 
                    (
                        <img 
                        src = {image}
                        key = {i}
                        className="w-[100px] h-[100px] object-cover"
                        />
                    )
                )}
            </motion.div>
        </div>
    </>
  )
}

export default Carousel_1