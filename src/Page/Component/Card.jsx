import React from 'react'
import Button from './Button'

const Card = ({image, title, content}) => {
  return (
    <>
        <div className="bg-white rounded-lg ">
            <div className="">
                <div>
                    {image}
                </div>
                <div className="pt-5 pb-2 px-2 ">
                    <h1 className="font-bold text-2xl text-green-600">
                        {title}
                    </h1>
                    <p>
                        {content}
                    </p>
                    <Button Contact="Learn More" text= "text-green-600" bg = "bg-transparent"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card