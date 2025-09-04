import React from 'react'
import Layout from '../Navigation/Layout/Layout'
import Carousel from './Component/carousel'
import Button from './Component/Button'
import { AnimatePresence, motion } from 'framer-motion'
import ImageConent from './Component/ImageConent'
import { LuQuote } from "react-icons/lu";
import Card from './Component/Card'
import Card_1 from './Component/Card_1'
import Card_2 from './Component/Card_2'
import Card_3 from './Component/Card_3'



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
      <Button Contact="Contact us" text = "text-white" bg = "bg-transparent" hoverbg="hover:bg-white" hovertext="hover:text-black"/>
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
      <Button Contact="Contact us" text= "text-white" bg="bg-transparent" hoverbg="hover:bg-white" hovertext="hover:text-black"/>
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
      <Button Contact="Contact us" text="text-white" bg="bg-transparent" hoverbg="hover:bg-white" hovertext="hover:text-black"/>
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
                                initial = {{opacity: 0, y: 100}}
                                animate = {{opacity: 1, y:0}}
                                exit = {{opacity: 0, y: 100}}
                                transition = {{duration: 0.4}}
                                className = "absolute inset-0 flex flex-col items-start px-[20%] mt-[20%] md:mt-[13%] pointer-events-auto"
                                >
                                  <div className="relative z-20">
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
              <div className="bg-blue min-h-[120vh]">
                <div className=" flex flex-col items-center space-y-15 py-[6%] md:pb-0">
                  <div className="">
                    <h1 className="text-4xl text-white font-bold">Explore Our Program</h1>
                  </div>
                  <div className="space-y-5 px-[20%]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   "
                        />
                      </div>
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  "
                        />
                      </div>
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= "llorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  "
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= "lorem lorem em lorem lorem lorem lorem lorem lorem lorem lorem lorem  "
                        />
                      </div>
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   "
                        />
                      </div>
                      <div className="shadow-xl">
                        <Card
                        img = "./1.jpg"
                        title = "MBA"
                        content= "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hear from Our Graduates */}
              <div className="bg-white min-h-[110vh] px-[10%] md:px-[20%]">
                <div className="space-y-8 py-[20%] ">
                  <div className="flex flex-col space-y-5 items-center">
                    <h1 className="text-4xl text-blue font-bold">
                      Hear From Our Graduates
                    </h1>
                    <div className="flex flex-col md:items-center">
                      <p>At PCMS, our greatest pride lies in the sucess of the success and satisfaction of our students.</p>
                      <p>Their journeys reflect the quality education, mentorship, and opportunities we provide.</p> 
                      <p>Here's what some of them have to share about their expreience with us.</p>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <Card_1 
                      peopleImage="./human.jpg"
                      experience= '"PCMS completely transformed our brand presence online. Their designs feel fresh and professional, and the attention to detail is unmatched"'
                      name= "Sanjay K."
                      position="Founder, UrbanTech Solutions"
                      />
                      <Card_1 
                      peopleImage="./human.jpg"
                      experience= '"Working with PCMS was a breese. they understood our vision instantly and delivered designs that our customers love."'
                      name= "Anita R."
                      position="Marketing Lead, GreenLeaf Organics"
                      />
                      <Card_1 
                      peopleImage="./human.jpg"
                      experience= '"From concept to deluvery, PCMS exceeded our espectitons. Their creative team knows exactly how to make a brand stand out."'
                      name= "Ravi p."
                      position="Director, Summit Consulting"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* What's happening */}
              <div className="min-h-[135vh] bg-green">
                <div className="px-[7%] py-[5%]">
                    <div className="space-y-15">
                      <div className="space-y-5">
                        <h1 className="text-4xl font-bold text-white flex justify-center">
                          What's Happening
                        </h1>
                        <div className="flex flex-col items-center text-white">
                          <p>Stay Updated with The latest happenings at PCMS -- from academic milstones and</p>
                          <p>industry collaborations to cultural celebrations and student achievements.</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <Card_2 
                        img="./2.jpg"
                        title = "PCMS Signs MoU with Global Business"
                        content="Strengthening our global ties, this MoU pathways for student exchang programs and collaborative research."
                        date="Aug 18, 2025"
                        />
                        <Card_2 
                        img="./3.jpg"
                        title = "BBA Batch 2025 Orientation Week"
                        content="Avibrant start for our new students with ice-breaking sessions, maagement workshop, and guest talks from industry leaders."
                        date="Aug 12, 2025"
                        />
                        <Card_2 
                        img="./1.jpg"
                        title = "National Management Seminar 2025"
                        content='Idustry experts and academicians came together to discuss "Sustainable Business Strategies for the Future." '
                        date="Aug 05,2025"
                        />
                      </div>
                      <div className="flex justify-end pr-[11%]">
                        <Button Contact="Read more" text="text-white"/>
                      </div>
                      <div className="px-[15%] space-y-10">
                        <div>
                          <h1 className="text-white text-4xl font-bold text-center">
                            Upcoming Events
                          </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <Card_3
                          date="Sep 15"
                          title="Greate lecture series"
                          content="Emerging Trends in Digital Marketing"
                          />
                          <Card_3
                          date="Oct 3-5"
                          title="Business Plan Competition"
                          content="Student from teams to pitch innovative startup ideas and win seed funding."
                          />
                          <Card_3
                          date="Oct 20"
                          title="Carrer fair & networking day"
                          content="Meet recruiters from top companies, attend workshops, and build your professional network."
                          />
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              {/* Carrer growth starts here */}
              <div className="min-h-[90vh] flex flex-col items-center">
                <div className="py-[8%] flex flex-col items-center space-y-10">
                    <h1 className="text-4xl text-green-700 font-bold">
                      Career Growth Starts Here 
                    </h1>
                    <div className="bg-gray-200 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="object-cover">
                          <img src={"1.jpg"}></img>
                        </div>
                        <div className="space-y-7 px-[10%] md:pr-[30%] md:pl-[2%] md:pt-[4%]">
                          <div className="text-justify  flex flex-col justify-center space-y-7">
                            <p className="text-gray-600">
                              At PCMS, we prepare students to be industry-ready from day one. Our placement call connects with top recruiters, offering training, guidance, and opportunities through internships, workshops, and campus drives bridging the gap between talent and opportunity. 
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>95% Placement Rte over the past 3 years</li>
                              <li>300+ Industry Partnership with leading companies</li>
                              <li>50+ On-Campus Drives anually</li>
                              <li>Career-focused workshop & mock interviews sessions</li>
                              <li>Strong alumni network across diverse industries</li>
                            </ul>
                          </div>
                          <Button Contact="Join Us" text="text-green" hoverbg="hover:bg-green" hovertext="hover:text-white"/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              
              {/* Life at Our College */}
              <div className="min-h-[120vh] bg-blue">
                <div className="px-[10%] md:px-[20%] py-[5%] space-y-10">
                  <div className="space-y-15">
                    <div>
                      <h1 className="text-4xl text-white font-bold text-center">
                        Life at Our College
                      </h1>
                    </div>
                    <div className="space-y-10">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <img src="./1.jpg" className="rounded-sm"></img>
                        </div>
                        <div className="rounded-sm bg-blue-1 flex items-center px-5 text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias possimus reiciendis voluptate ratione blanditiis, ab esse! Nesciunt officia sequi, inventore minus error ipsam eius perspiciatis, placeat saepe amet consectetur?
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="rounded-sm bg-blue-1 flex items-center px-5 text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias possimus reiciendis voluptate ratione blanditiis, ab esse! Nesciunt officia sequi, inventore minus error ipsam eius perspiciatis, placeat saepe amet consectetur?
                        </div>
                        <div>
                          <img src="./1.jpg" className="rounded-sm"></img>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <img src="./1.jpg" className="rounded-sm"></img>
                        </div>
                        <div className="rounded-sm bg-blue-1 flex items-center px-5 text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias possimus reiciendis voluptate ratione blanditiis, ab esse! Nesciunt officia sequi, inventore minus error ipsam eius perspiciatis, placeat saepe amet consectetur?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button Contact="Join Us" text="text-white" hoverbg="hover:bg-white" hovertext="hover:text-black"/>
                  </div>
                </div>
              </div>

              {/* Our affilations */}
              <div className="min-h-[60vh]">
                <div className="py-[5%] px-[20%] space-y-10">
                  <div>
                    <h1 className="text-blue font-bold text-4xl text-center">
                      Our Affilations
                    </h1>
                  </div>
                  <div>
                    Sliders aaunxa aba..sururururur
                  </div>
                </div>
              </div>
            </div>
        </Layout>
    </>
  )
}

export default Home