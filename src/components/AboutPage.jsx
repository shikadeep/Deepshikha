import React from 'react'
import ImgOne from '../assets/about-img1.png'
import ImgTwo from '../assets/about-img2.png'
import Navbar from './Navbar'
import Course from './Course/Course'
import Contact from './Contact'
import Faq from './Faq'
import Footer from './Footer'

const AboutPage = () => {
    return (
      <>
      <Navbar/>
      <div className="w-full bg-[#FDECF2] flex justify-center items-center px-16 py-10">
  <section className="w-full max-w-[1155px] font-poppins flex flex-col gap-16">

    {/* First Row */}
    <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-[75px] items-center">
      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <h2 className="font-medium text-[28px] md:text-[32px] leading-[42px] md:leading-[51px] text-[#1200FF]">
          About us
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[29px] text-[#000000]">
          The company’s flagship program is a comprehensive course that covers all key aspects of trading, ranging from the basics of stock market functionality to advanced technical strategies. Students gain a deep understanding of Technical Analysis, Trading Psychology, and Risk Management, all essential components for navigating the financial markets with confidence and precision. With Mr. Kandpal's extensive experience, including his successful completion of all levels of the Chartered Market Technician (CMT) certification, Aadya Financialnerve ensures that students receive industry-leading instruction.
        </p>
      </div>
      {/* Image */}
      <img src={ImgOne} alt="About Us" className="w-full md:w-1/2 rounded-2xl object-cover max-h-[410px]" />
    </section>

    {/* Second Row */}
    <section className="flex flex-col md:flex-row gap-10 md:gap-[75px] items-center">
      {/* Image */}
      <img src={ImgTwo} alt="Learning" className="w-full md:w-1/2 rounded-2xl object-cover max-h-[410px]" />
      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#000000]">
          Aadya Financialnerve prides itself on its student-centric approach, providing personalized learning experiences tailored to each individual’s pace and background. The institute simplifies the complexities of trading with structured, easy-to-follow courses, and places a strong emphasis on the practical application of skills. Additionally, ethical practices and responsible trading form a core part of the curriculum, preparing students for sustainable success.
        </p>
        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#000000]">
          Through its focus on transparency, professionalism, and results-oriented training, Aadya Financialnerve has built a solid reputation in the industry. It has become the go-to platform for anyone aspiring to build a successful career in stock market trading or gain deeper financial market expertise.
        </p>
      </div>
    </section>

  </section>
</div>

        <Course/>
        <Contact/>
        <Faq/>
        <Footer/>
      </>
        

    )
}

export default AboutPage