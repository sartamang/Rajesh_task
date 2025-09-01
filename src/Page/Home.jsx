import React from 'react'
import Layout from '../Navigation/Layout/Layout'
import Carousel from './Component/carousel'


const image = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
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
                    {image.map((s) => {
                      return (
                        <img 
                          src={s} 
                          className="w-full h-[100vh] object-cover flex-shrink-0"
                        />
                      )  
                    })}
                  </Carousel>
                </div>
              </div>
              {/* new content */}
              <div>
                    hi
              </div>
            </div>
        </Layout>
    </>
  )
}

export default Home