import React from 'react'
import Button from './Button'

const Card_4 = ({img, title, subtitle, stream, msh, duration, eligibity, feature, career, border= "border-b-3", color="border-transparent", py="py-0"}) => {
  return (
    <>
        <div className="bg-gray-100 text-gray-600">
            <div className="px-[15%] grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={`${img}`} className="cover-fill w-full h-full" />
                </div>
                <div className="pl-5 py-10 space-y-5">
                    <div className="font-bold text-2xl">
                        {title}
                    </div>
                    <div className="border-b-3 border-white  pb-2">
                        {subtitle}
                    </div>
                    <div >   
                        <div className={`flex ${py} ${border} ${color}`} >
                            <div className='mr-5'>
                                {stream}
                            </div>
                            <div className=''>
                                {msh}
                            </div>
                        </div>
                        <div className="flex border-b-3 border-white  py-2">
                            <div className='mr-21'>
                                <p>Duration</p>
                            </div>
                            <div className=''>
                                <p>: {duration}</p>
                            </div>
                        </div>
                        <div className="flex border-b-3 border-white  py-2">
                            <div className='pr-23'>
                                <p>Eligibity</p>
                            </div>
                            <div className=''>
                                <p>: {eligibity}</p>
                            </div>
                        </div>
                        <div className="flex border-b-3 border-white  py-2">
                            <div className='pr-13'>
                                <p>
                                    Key_Features
                                </p>
                            </div>
                            <div className=''>
                                <p>: {feature}</p>
                            </div>
                        </div>
                        <div className="flex border-b-3 border-white  py-2">
                            <div className='pr-5'>
                                <p>Career_Pathways</p>
                            </div>
                            <div className=''>
                                <p>: {career}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Button Contact="Learn More" text="text-green" hoverbg="hover:bg-green" hovertext="hover:text-white"/>
                        <Button Contact="Enroll Now" text="text-blue" hoverbg="hover:bg-blue" hovertext="hover:text-white"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card_4