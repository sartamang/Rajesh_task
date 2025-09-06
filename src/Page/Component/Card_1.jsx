import React from 'react'

const Card_1 = ({peopleImage, experience, name, position}) => {
  return (
    <>
        <div className="bg-gray-50 rounded-lg shadow-xl">
            <div className="px-5 space-y-4 pb-5">
                <div className="pt-5">
                    <img src={`${peopleImage}`} className=" rounded-full h-[70px] w-[70px] object-cover" />
                </div>
                <div className="grid grid-cols-1 space-y-8">
                    <div className="h-[110px]">
                        <p>
                            {experience}
                        </p>
                    </div>
                    <div>
                        <div className="text-blue font-bold text-lg">
                            {name}
                        </div>
                        <div className="text-green-600 text-sm">
                            {position}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card_1