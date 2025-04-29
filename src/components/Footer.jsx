import React from 'react'
import Logo from '../assets/footer-logo.png'
const Footer = () => {
    return (
        <div className="w-full bg-[#072C3E] flex justify-center items-center font-poppins px-6 py-10">
        <div className="w-full max-w-[1155px] flex flex-col md:flex-row md:justify-between gap-10 text-white">
      
          {/* Left section */}
          <section className="w-full md:w-[400px] flex flex-col gap-4 text-center md:text-left px-5">
            <img className="w-[263px] h-[56px] mx-auto md:mx-0" src={Logo} alt="Logo" />
            <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[-0.4%] font-normal">
              Anubhav Kandpal is a seasoned stock market educator and technical analyst with over 12 years of experience in the financial markets.
            </p>
          </section>
      
          {/* Right section */}
          <section className="w-full md:w-[652px] px-4 flex flex-wrap justify-between text-center md:text-left">
      
            {/* Company */}
            <div className="w-1/4 md:w-[100px] flex flex-col gap-3 font-medium">
              <h5 className="text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">Company</h5>
              <ul className="flex flex-col gap-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[23px]">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
      
            {/* Courses */}
            <div className="w-1/4 md:w-[100px] flex flex-col gap-3 font-medium">
              <h5 className="text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">Courses</h5>
              <ul className="flex flex-col gap-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[23px]">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
      
            {/* Social Links */}
            <div className="w-1/4 md:w-[150px] flex flex-col gap-3 font-medium">
              <h5 className="text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">Social Links</h5>
              <ul className="flex flex-col gap-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[23px]">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Pinterest</li>
                <li>X</li>
              </ul>
            </div>
      
            {/* Terms */}
            <div className="w-1/4 md:w-[150px] flex flex-col gap-3 font-medium">
              <h5 className="text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]">Terms</h5>
              <ul className="flex flex-col gap-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[23px]">
                <li>Privacy Policy</li>
                <li>Cookie</li>
                <li>Legal</li>
              </ul>
            </div>
      
          </section>
        </div>
      </div>
      

    )
}

export default Footer