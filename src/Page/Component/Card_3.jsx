import React from 'react'

const Card_3 = ({date, title, content}) => {
  return (
    <>
        <div className=" bg-white rounded-lg shadow-lg hover:max-h-[150px]">
            
            <div className="">
                <div className=" p-3 flex gap-3">
                    <div className="bg-blue text-white text-2xl p-1 rounded-lg  text-center">
                        {date}
                    </div>
                    <div className="text-gray-700 group  transition-all duration-300">
                        <h1 className="text-lg line-clamp-1 group-hover:line-clamp-none ">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-sm line-clamp-2 group-hover:line-clamp-none ">
                    {content}
                </p>
            </div>
        </div>
    </>
  )
}

export default Card_3