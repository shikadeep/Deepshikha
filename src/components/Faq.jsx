import React from 'react'
import FAQSection from './Faq/FAQSection'

const Faq = () => {
    return (
        <div className='w-full h-auto md:h-[850px] p-14 md:p-24 flex justify-center bg-[#F0EBFA]'>
    <section className='w-full md:w-[1155px] h-auto md:h-[499px] flex flex-col md:flex-row gap-8 md:gap-[10px]'>
        {/* Left section */}
        <div className='w-full md:w-[540px] h-auto md:h-[335px] flex flex-col gap-5'>
            <h3 className=' md:w-[250px] rounded-3xl text-[#FFFFFF] font-medium text-[16px] leading-6 bg-[#1200FF] p-3 text-center md:text-left'>
                Frequently Asked Questions
            </h3>
            <h1 className='  text-[#333333] font-semibold  text-[28px] md:text-[40px] leading-8 md:leading-29'>
                Get All Your Questions <span className='text-[#7830FF] mt-4'>Answered Here</span>
            </h1>
            <p className=' text-[#333333] font-medium text-[16px] md:text-[18px] leading-6 md:leading-7'>
                Have Questions? Here Quick Answers To Some Of the Most Common Queries About My Services And Process
            </p>
            <button className=' md:w-[250px] border border-[#1200FF] font-medium rounded-3xl p-3 text-[#1200FF] mx-auto md:mx-0'>
                Need Support? WhatsApp Us
            </button>
        </div>

        {/* Right section */}
        <div className='w-full md:w-[500px] h-auto md:h-[499px]'>
            <FAQSection />
        </div>
    </section>
</div>

      
    )
}

export default Faq