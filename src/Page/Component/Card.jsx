import React from 'react'
import Button from './Button'

const Card = ({img, title, content}) => {
  return (
    <>
        <div className="bg-white rounded-lg ">
            <div className="">
                <div>
                    <img src={img} className="rounded-t-lg"></img>
                </div>
                <div className="pt-4 pb-3 px-2 space-y-2">
                    <h1 className="font-bold text-3xl text-green-600">
                        {title}
                    </h1>
                    <p>
                        {content}
                    </p>
                    <Button Contact="Learn More" text= "text-green-600" bg = "bg-transparent" hoverbg="hover:bg-green-600"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card