import React from 'react'
import Navbar from './Navbar'
import Star from '../assets/Star.png'
import CurriculumCard from './CurriculumCard'
// import Faq from './Faq'
import Footer from './Footer'
import CardImg from '../assets/course-card.png'
import Course from './Course/Course'
import Contact from './Contact'
import Faq from './Faq'
import SectionImg from '../assets/22section.png'
import EnglishImg from '../assets/english.png'
import LectureImg from '../assets/lecture.png'
import TimeLength from '../assets/time-length.png'


const CoursePage = () => {
    return (
        <>
            <Navbar />
            <div className="w-full bg-[#FDECF2] flex items-center justify-center py-10 px-4">
                <div className="max-w-[1155px] w-full flex flex-col lg:flex-row gap-10 font-poppins">

                    {/* Left Section */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-8">

                        {/* Upper Div */}
                        <div className="flex flex-col gap-4">
                            <img src={CardImg} alt="Course" className="w-full h-auto rounded-2xl" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[24px] md:text-[32px] font-semibold text-[#000000] leading-tight">
                                    Make Uber Clone App
                                </h1>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-normal text-[14px] md:text-[16px] text-[#C5322A]">Anubhav Kandpal</h6>
                                    <img src={Star} alt="Rating Star" className="h-4 w-4" />
                                    <p className="font-normal text-[14px] md:text-[16px] text-[#000000]">
                                        4.8 <span className="text-[#1B1B1B99]">(1,812 ratings)</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* About Course */}
                        <div className="flex flex-col gap-3">
                            <h6 className="font-semibold text-[16px] text-[#000000]">About Course</h6>
                            <p className="text-[14px] md:text-[16px] text-[#1B1B1B99] leading-relaxed">
                                Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                Unlike other monolithic frameworks, Vue is designed to be incrementally adoptable...
                            </p>
                        </div>

                        {/* Lower Div */}
                        <div className="mt-3">
                            <h3 className="font-semibold text-[18px] text-[#000000] mb-2">Course Curriculum</h3>
                            <CurriculumCard />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-[40%] bg-white border border-[#DEE0E4] rounded-2xl p-6 flex flex-col gap-6">

                        {/* Price and Heading */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-medium text-[24px] md:text-[28px] text-[#000000] leading-tight">
                                Make Uber Clone App
                            </h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold text-[20px] md:text-[24px] text-[#000000]">Rs. 2240</h3>
                                    <span className="font-medium text-[16px] text-[#1B1B1B99] line-through">Rs.3999</span>
                                </div>
                                <p className="inline-block bg-[#A04AE3] w-[80px] h-35px] text-white text-[14px] px-3 py-1 ">
                                    20% OFF
                                </p>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button className="w-full h-14 bg-[#4640DE] text-white rounded-2xl font-medium text-[16px]">
                            Register Now
                        </button>

                        {/* Course Details */}
                        <div className="border-b border-[#DEE0E4] pb-6">
                            <h4 className="font-medium text-[18px] text-[#0D121A] mb-4">This course includes</h4>
                            <div className="flex flex-col gap-3 text-[14px] text-[#1B1B1BE5]">
                                <div className="flex items-center gap-3">
                                    <img src={SectionImg} alt="Sections" className="h-5 w-5" />22 Sections
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={LectureImg} alt="Lectures" className="h-5 w-5" />152 Lectures
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={TimeLength} alt="Total Length" className="h-5 w-5" />21h 33m total
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={EnglishImg} alt="Language" className="h-5 w-5" />English
                                </div>
                            </div>
                        </div>

                        {/* Related Topics */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-[18px] text-[#0D121A]">Explore related topics</h4>
                            <div className="flex flex-wrap gap-5">
                                <span className="px-4 py-2 border border-[#DEE0E4] rounded-md">UI/UX</span>
                                <span className="px-4 py-2 border border-[#DEE0E4] rounded-md">Design System</span>
                                <span className="px-4 py-2 border border-[#DEE0E4] rounded-md">Figma</span>
                                <span className="px-4 py-2 border border-[#DEE0E4] rounded-md">UX Research</span>
                                <span className="px-4 py-2 border border-[#DEE0E4] rounded-md">Prototype</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Course />
            <Contact />
            <Faq />
            <Footer />
        </>
    )
}

export default CoursePage