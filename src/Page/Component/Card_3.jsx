import React from 'react'

const Card_3 = ({date, title, content}) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-lg ">
            <div className=" p-3 flex gap-3">
                <div className="bg-blue text-white text-2xl rounded-lg p-1 text-center">
                    {date}
                </div>
                <div className="text-gray-700">
                    <div className="">
                        <h1 className="text-lg ">
                            {title}
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-sm">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card_3