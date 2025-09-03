import React from 'react'
import Layout from '../Navigation/Layout/Layout'
import Button from './Component/Button'

const Program = () => {
  return (
    <>
        <Layout>
            <div className="">

                {/* Image */}
                <div className="relative">
                    <img src="1.jpg" className="object-cover w-full h-[400px]"></img>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                    <div className="absolute inset-0 text-white font-bold text-5xl pt-[13%] flex justify-center">
                        <h1>Our Program</h1>
                    </div>
                </div>

                {/* explore */}
                <div>
                    <div>
                        <div>
                            <h1>

                            </h1>
                        </div>
                        <div>
                            <p>
                                
                            </p>
                        </div>
                        <div>
                            <Button Contact="Download Prosectus" text="text-blue"/>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    </>
  )
}

export default Program