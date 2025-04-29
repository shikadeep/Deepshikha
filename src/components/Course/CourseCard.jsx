import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({Cardimg, title, description, price, oldprice, link, arrow}) => {
  const navigate = useNavigate();
  return (
    <div className="w-[275px] sm:w-[250px] xs:w-full h-auto bg-[#FFFFFF] flex flex-col rounded-md overflow-hidden   transition-transform hover:scale-109 hover:border-b-4 border-[#7830FF] hover:shadow-xl duration-300">
      
    {/* Course Image */}
    <img className="w-full h-[210px] object-cover" src={Cardimg} alt="Course" />

    {/* Text Content */}
    <div className="font-poppins p-4 flex flex-col justify-between h-full">
      
      {/* Title */}
      <h1 className="font-semibold text-[16px] leading-[21px] text-[#000000]">
        {title}
      </h1>

      {/* Description */}
      <p className="font-normal text-[14px] leading-[18px] text-[#1B1B1BE5] mt-2 mb-3">
        {description}
      </p>

      {/* Pricing */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-semibold text-[18px] text-[#1B1B1BE5]">{price}</span>
        <span className="line-through text-[16px] text-[#1B1B1B99]">{oldprice}</span>
      </div>

      {/* Link Button */}
      <button
        onClick={() => navigate('/coursepage')}
        className="text-[14px] text-[#7830FF] font-medium underline flex items-center gap-1"
      >
        {link}
        <img className="w-[12px] h-[12px]" src={arrow} alt="Arrow" />
      </button>

    </div>
  </div>
);

}
export default CourseCard