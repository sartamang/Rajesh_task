import React from 'react'
import Layout from '../Navigation/Layout/Layout'
import Button from './Component/Button'
import Card from './Component/Card'
import Card_4 from './Component/Card_4'
import { Link } from 'react-router-dom'


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
                <div className="px-[20%] py-[10%]">
                    <div className="flex flex-col space-y-8 justify-center items-center">
                        <div className="space-y-10 ">
                            <h1 className="text-blue text-4xl font-bold">
                                Explore our Programs at Presidency College
                            </h1>
                            <div>
                                <p className="items-center flex flex-col justify-center text-lg text-gray-600">
                                    <p>At Presidency College, we offer academic pathways that prepare you for sucess --</p>
                                    <p>whether you're just starting your higher secondary studies, pursuing your bachelor's </p>
                                    <p>degree, or advancing your career with an MBA. Our programs are designed to build strong </p>
                                    <p>foundations, nurture leadership, and equip you with the skills needed to thrive in today's </p>
                                    <p>competitive world. </p>
                                </p>
                            </div>
                        </div>
                        <div>
                            <Button Contact="Download Prosectus" text="text-blue" hoverbg="hover:bg-blue" hovertext="hover:text-white"/>
                        </div>
                    </div>
                </div>

                {/* quick overview */}
                <div className="bg-blue min-h-[70vh]">
                    <div className="py-[7%] px-[20%] space-y-15">
                        <div>
                            <h1 className="text-4xl font-bold text-white text-center">
                                Quick Overview
                            </h1>  
                        </div>    
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <Card 
                            img="./1.jpg"
                            title="MBA"
                            content="The two year full-time MBA program is spread across four semester"
                            />
                            <Card 
                            img="./2.jpg"
                            title="BBA"
                            content="The BBA, a full-time professional degree program, shall have eight semesters."
                            />
                            <Card 
                            img="./1.jpg"
                            title="11 & 12"
                            content="PCMS has been offering Grades 11 & 12 since 2000 A.D. In its true sense, building"
                            />
                        </div>    
                    </div>
                </div>

                {/* Detail Overview */}
                <div className="min-h-[250vh] space-y-20 py-[10%]">
                    <div>
                        <h1 className="text-4xl text-green font-bold text-center">
                            Detailed Overview
                        </h1>
                    </div>
                   <div className="space-y-20">
                        <Card_4 
                        img="./1.jpg"
                        title="Master of Business Administration (MBA)"
                        subtitle="A Transformative program that blends academic excellence with real-world business. Designed for future leaders, our MBA emphasises thinking, innovation, and leadership skills."
                        duration="2 years"
                        eligibity="Bachelour's degree in any descipline"
                        feature="Industry-focused cirriculum, internship, case studies, expert faculty"
                        career="Management roles, entrepreneurship, consulting, international career"
                        />
                        <Card_4 
                        img="./1.jpg"
                        title="Master of Business Administration (MBA)"
                        subtitle="A Transformative program that blends academic excellence with real-world business. Designed for future leaders, our MBA emphasises thinking, innovation, and leadership skills."
                        duration="2 years"
                        eligibity="Bachelour's degree in any descipline"
                        feature="Industry-focused cirriculum, internship, case studies, expert faculty"
                        career="Management roles, entrepreneurship, consulting, international career"
                        />
                        <Card_4 
                        img="./1.jpg"
                        stream="Streamed_Offered"
                        msh=": Management, Science, Humanities"
                        border="border-b-3"
                        color="border-white"
                        py="py-2"
                        title="Master of Business Administration (MBA)"
                        subtitle="A Transformative program that blends academic excellence with real-world business. Designed for future leaders, our MBA emphasises thinking, innovation, and leadership skills."
                        duration="2 years"
                        eligibity="Bachelour's degree in any descipline"
                        feature="Industry-focused cirriculum, internship, case studies, expert faculty"
                        career="Management roles, entrepreneurship, consulting, international career"
                        />
                   </div>
                </div>

                {/* have a query */}
                <div className="min-h-[70vh] bg-green">
                    <div className="px-[20%] py-[5%] grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="text-center text-4xl font-semibold text-white">
                                <p>Ready to begin your </p>
                                <p>journey with us?</p>
                            </div>
                            <div className="flex gap-5 justify-center">
                                <Button Contact="Apply Now" text="text-white" hoverbg="hover:bg-white" hovertext="hover:text-green"/>
                                <Button Contact="Join us" text="text-white" hoverbg="hover:bg-white" hovertext="hover:text-green"/>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl">
                            <div className="px-5 pt-10 pb-5 space-y-5">
                                <div className="font-bold text-4xl pb-4 text-green text-center">
                                    <h1>Have a Query?</h1>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <input type="text" placeholder="Your Name" className=" border-2 border-gray-300 px-3 rounded-lg h-10"/>
                                    <input type="text" placeholder="Your Name" className=" border-2 border-gray-300 px-3 rounded-lg h-10"/>
                                    <input type="email" placeholder="Email Address" className=" border-2 border-gray-300 px-3 rounded-lg h-10"/>
                                    <input type="number" placeholder="Contact No." className=" border-2 border-gray-300 px-3 rounded-lg h-10"/>
                                    <textarea name="" id="" placeholder="Your Message" className="caret-gray-500 border-2 border-gray-300 px-3 rounded-lg h-20"></textarea>
                                </div>
                                <div>
                                    <button className="text-white bg-green w-full rounded-lg h-10 cursor-pointer hover:bg-transparent hover:text-green hover:border-2 transition-all ease-in duration-300">
                                        <Link to="" className=" font-semibold">Submit Query</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    </>
  )
}

export default Program