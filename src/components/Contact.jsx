import React from 'react'
import Mail from '../assets/mail-logo.png'
import Call from '../assets/call-logo.png'
import Loc from '../assets/loc-logo.png'
import { Form } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='w-full   bg-gradient-to-br from-[#E7F0FF] to-[#C2D5F8] py-10 px-10 md:px-24'>

  {/* Upper Section */}
  <div className='flex flex-col md:flex-row justify-between gap-14'>

    {/* Left side - Map */}
    <div className='w-full md:w-[600px] h-auto flex flex-col gap-4'>
      <h3 className='font-[500] text-[16px] leading-[25.2px] text-[#000000]'>Contact us</h3>
      <h2 className='font-[600] text-[24px] md:text-[38px] leading-[35px] md:leading-[60.8px] text-[#000000]'>We’re here to answer your question!</h2>
      <div className="mt-5 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5105195261394!2d78.0036214743684!3d30.307993406037912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be94375e729%3A0xc160311fe8cb82d6!2sNovaNectar%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1745420282838!5m2!1sen!2sin"
          className="w-full h-[250px] md:h-[350px] rounded-2xl shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* Right side - Form */}
    <div className='w-full md:w-[500px] h-auto flex flex-col bg-[#FEF8FC] gap-4 p-6 rounded-3xl shadow-sm'>
      <h3 className='font-[500] text-[28px] md:text-[32px] leading-[51.2px] text-[#000000]'>Get in Touch</h3>
      <p className='font-[400] text-[16px] leading-[27.6px] text-[#000000]'>You can reach us anytime</p>
      
      <Form className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <input type='text' placeholder='First Name' className='rounded-3xl w-full md:w-[200px] h-[45px] p-3 border-2 border-[#F0E1E8]' />
          <input type='text' placeholder='Last Name' className='rounded-3xl w-full md:w-[200px] h-[45px] p-3 border-2 border-[#F0E1E8]' />
        </div>
        <input type='number' placeholder='Phone Number' className='rounded-3xl w-full h-[45px] p-3 border-2 border-[#F0E1E8]' />
        <input type='email' placeholder='Email' className='rounded-3xl w-full h-[45px] p-3 border-2 border-[#F0E1E8]' />
        <textarea rows={4} placeholder='Your Message (optional)' className='rounded-3xl w-full h-[120px] p-3 border-2 border-[#F0E1E8]' />
        <button type='submit' className='rounded-full w-[180px] bg-[#1200FF] text-[#FFFFFF] font-[500] text-[14px] h-[50px] p-3 mx-auto'>
          Send Message
        </button>
      </Form>
    </div>

  </div>

  {/* Bottom Info Boxes */}
  <div className='w-full flex  justify-between   flex-col  gap-8 mt-10'>

    <div className='w-[320px] md:w-[350px] h-[170px] bg-[#F5F5F5] rounded-2xl p-4 flex flex-col gap-3'>
      <img src={Mail} className='w-[50px] h-[50px]' />
      <div>
        <h4 className='font-[600] text-[22px] text-[#000000]'>Mail Us</h4>
        <p className='font-[500] text-[16px] text-[#333333]'>Any Query</p>
        <p className='font-[500] text-[16px] text-[#333333]'>Financialenrave@gmail.com</p>
      </div>
    </div>

    <div className='w-[320px] md:w-[350px] h-[170px] bg-[#F5F5F5] rounded-2xl p-4 flex flex-col gap-3'>
      <img src={Call} className='w-[50px] h-[50px]' />
      <div>
        <h4 className='font-[600] text-[22px] text-[#000000]'>Call Us</h4>
        <p className='font-[500] text-[16px] text-[#333333]'>Mon – Sat from 09:00AM to 06:00PM</p>
        <p className='font-[500] text-[16px] text-[#333333]'>+91 XXXXX-XXXXX</p>
      </div>
    </div>

    <div className='w-[320px] md:w-[350px] h-[190px] bg-[#F5F5F5] rounded-2xl p-4 flex flex-col gap-3'>
      <img src={Loc} className='w-[50px] h-[50px]' />
      <div>
        <h4 className='font-[600] text-[22px] text-[#000000]'>Visit Us</h4>
        <p className='font-[500] text-[16px] text-[#333333]'>
          66-A, GMS Rd, behind Wadia Institute, Nehru Enclave, Satya Vihar, Ballupur, Dehradun, Uttarakhand 248001
        </p>
      </div>
    </div>

  </div>

</div>


    )
}

export default Contact