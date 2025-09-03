import React from 'react'
import Button from './Button'

const Card_2 = ({img, title, content, date}) => {
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg">
            <div className="space-y-0">
                <div className="px-3 pt-3">
                    <img src={img} className="rounded-sm md:h-[150px] md:w-full md:object-cover"></img>
                </div>
                <div className="px-3 py-1 space-y-1">
                    <div className="font-semibold text-xl text-gray-600">
                        {title}
                    </div>
                    <div className="h-[70px]">
                        {content}
                    </div>
                    <Button Contact= "Read more" text="text-blue-500"/>
                </div>
                <div className="flex justify-end pr-3 pb-3 text-sm text-gray-500">
                    {date}
                </div>
            </div>
        </div>
    </>
  )
}

export default Card_2