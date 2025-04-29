import React from 'react'
import Photo from '../assets/about-photo.png'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


const About = () => {
    const navigate = useNavigate();
    return (
      <>
      <section className="bg-[#FEF8FA] w-full md:h-[699px] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-10 gap-10 md:gap-16">
      
      {/* Left Text Block */}
      <div className="w-full md:w-[500px] text-center md:text-left">
        <h3 className="font-medium text-black text-[22px] md:text-[24px] leading-[32px] md:leading-[33.6px] mt-5">
          Meet the Mentor
        </h3>
        <h2 className="font-bold text-[#1200FF] text-[28px] md:text-[32px] leading-[38px] md:leading-[44.8px] mt-2">
          Mr. Anubhav Kandpal
        </h2>
        <p className="mt-5 font-normal text-black text-[16px] md:text-[18px] leading-[26px] md:leading-[28.8px]">
          Your Stock Market Mentor and seasoned Technical Analyst with over a decade of financial market expertise. 
          Armed with MBA and the prestigious CMT Level 3 certification, Anubhav stands out as one of the youngest achievers in the field. 
          As a Trusted Mentor to professionals and an Inspirational guide to aspiring students, Anubhav has become a beacon in the Stock Market realm. 
          His specialties include Technical Analysis, Behavioral Finance, and Investment Psychology.
        </p>
        <button
          onClick={() => navigate('/aboutpage')}
          className="mt-6 w-[200px] md:w-[282px] h-[48px] bg-[#4640DE] rounded-2xl text-white font-medium text-[16px] text-center hover:bg-[#372fc9] transition"
        >
          Read More
        </button>
      </div>

      {/* Right Image Block */}
      <div className="w-full md:w-[600px] flex justify-center md:justify-end items-center">
        <div
          className="w-[250px] h-[250px] md:w-[430px] md:h-[430px] rounded-full flex justify-center items-center"
          style={{
            background:
              'linear-gradient(180deg, #459BEB 0%, #27527C 20%, #182D44 40%, #101B28 80%, #09090C 100%)',
          }}
        >
          <img
            src={Photo}
            alt="Mentor"
            className="w-[180px] h-[260px] md:w-[320px] md:h-[465px] object-cover mt-[-30px] md:mt-[-90px]"
          />
        </div>
      </div>
    </section>
  
    </>
      )
}
export default About