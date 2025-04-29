import React from 'react'
import img from '../assets/content-img-1.png'
const Home = () => {
  return (
    <section className="bg-[#FFFFFF] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-10 md:h-[583px]">
    {/* Left section */}
    <div className="w-full md:w-[590px] text-center md:text-left font-Poppins">
      <h2 className="font-bold text-[36px] md:text-[60px] leading-tight md:leading-[89.6px] uppercase text-[#010101]">
        Learn all about <span className="text-[#1200FF]">Stock Market</span>
      </h2>
      <p className="mt-4 text-[16px] md:text-[18px] text-[#000000] leading-[26px] md:leading-[28.8px]">
        Your journey to success begins today. Enter your details below for your Discord invitation, trading resources, and exclusive offers.
      </p>
      <button className="mt-6 w-[200px] md:w-[282px] h-[48px] rounded-2xl bg-[#4640DE] text-white font-medium text-[16px]">
        Explore Courses
      </button>
    </div>
  
    {/* Right Image Section */}
    <div className="w-full md:w-[600px] flex justify-center md:justify-end mb-6 md:mb-0">
      <img
        src={img}
        alt="Stock Market"
        className="w-[320px] h-[220px] md:w-[600px] md:h-[450px] object-contain"
      />
    </div>
  </section>
  
  )
}

export default Home