import React from 'react'
import Layout from '../Navigation/Layout/Layout'
import Carousel from './Component/carousel'
import Button from './Component/Button'
import { AnimatePresence, motion } from 'framer-motion'
import ImageConent from './Component/ImageConent'
import { div } from 'framer-motion/client'
import { LuQuote } from "react-icons/lu";
import Card from './Component/Card'



const image = [
  { 
    src: '/1.jpg',
    content: (
      <div className="space-y-7">
        <ImageConent 
        title1 = "Nepal's Best"
        title2 = "Business College"
        Content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae omnis enim repellat ipsa officiis eius maxime aliquid commodi quaerat totam, laudantium quasi alias itaque ratione architecto, veritatis facere rerum atque."
      />
      <Button Contact="Contact us" text = "text-white" bg = "bg-transparent"/>
      </div>
    )
  },
  {
    src: '/2.jpg',
    content: (
      <div className="space-y-7">
        <ImageConent 
          title1 = "Nepal's Best"
          title2 = "Business College"
          Content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae omnis enim repellat ipsa officiis eius maxime aliquid commodi quaerat totam, laudantium quasi alias itaque ratione architecto, veritatis facere rerum atque."
      />
      <Button Contact="Contact us" text= "text-white" bg="bg-transparent"/>
      </div>
    )
  },
  {
    src: '/3.jpg',
    content: (
      <div className="space-y-7">
        <ImageConent 
        title1 = "Nepal's Best"
        title2 = "Business College"
        Content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae omnis enim repellat ipsa officiis eius maxime aliquid commodi quaerat totam, laudantium quasi alias itaque ratione architecto, veritatis facere rerum atque."
      />
      <Button Contact="Contact us" text="text-white" bg="bg-transparent"/>
      </div>
    )
  },
]
const Home = () => {
    
  return (
    <>
        <Layout>
            <div className=''>

              {/* carousel */}
              <div className="flex justify-center h-screen">
                <div className="w-full">
                  <Carousel autoSlide={true}>
                    {image.map((images,index) => {
                      return (
                        <div className="relative w-full flex-shrink-0">
                          <img 
                          src={images.src} 
                            className="w-full h-[100vh] object-cover"
                          />

                          {/* vintage effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                          {/* Animate content */}
                          <AnimatePresence mode='wait'>
                            {
                                <motion.div
                                key = {index}
                                initial = {{opacity: 0, y: -100}}
                                animate = {{opacity: 1, y:0}}
                                exit = {{opacity: 0, y: -100}}
                                transition = {{duration: 0.2}}
                                className = "z-20"
                                >
                                  <div className="absolute inset-0 flex flex-col items-start px-[20%] mt-[13%]">
                                    {images.content}
                                  </div>
                                </motion.div>
                            }
                          </AnimatePresence>
                        </div>
                      )  
                    })}
                  </Carousel>
                </div>
              </div>


              {/* new content */}
              <div className="min-h-[90vh] flex flex-col items-center">
                <div className="py-[8%] flex flex-col items-center space-y-10">
                    <h1 className="text-4xl text-green-700 font-bold">
                      Why Our College Stands Out
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 w-full ">
                      <div className="text-justify px-[10%] md:pr-[1%] md:pl-[25%] flex flex-col justify-center">
                        <p className="flex text-2xl gap-6">
                          <span className="text-5xl text-green-700 transform scale-x-[-1]"><LuQuote /></span>
                          We strived to privide a highly evolved value based education 
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quam nemo eos accusantium in ex nostrum. Odit rerum doloremque et nulla qui, inventore harum ex nobis impedit labore aperiam earum.
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quam nemo eos accusantium in ex nostrum. Odit rerum doloremque et nulla qui, inventore harum ex nobis impedit labore aperiam earum.
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quam nemo eos accusantium in ex nostrum. Odit
                        </p>
                      </div>
                      <div className="cover-fill">
                        <img src={"1.jpg"}></img>
                      </div>
                    </div>
                </div>
              </div>

              {/* exlore our program */}
              <div className="bg-blue min-h-[110vh]">
                <Card
                image = "./1.jpg"
                title = "MBA"
                content= "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
                />
              </div>
            </div>
        </Layout>
    </>
  )
}

export default Home