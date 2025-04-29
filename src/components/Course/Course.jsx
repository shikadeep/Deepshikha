import React from 'react'
import CourseCard from './CourseCard'
// import img from "../assets/CourseArrow.png"
import img from '../../assets/CourseArrow.png'
import cardImg from '../../assets/course-card.png'


const Course = () => {
    const courseList = [
        {
            title: "Stock Market",
            description: "More than By Experience. Learn how to becoming professional Now...",
            price: "Rs. 2999",
            oldprice: "Rs. 32.90",
            link: "View Detail",
            arrow:  img,
            Cardimg: cardImg,
        },

        {
            title: "Stock Market",
            description: "More than By Experience. Learn how to becoming professional Now...",
            price: "Rs. 2999",
            oldprice: "Rs. 32.90",
            link: "View Detail",
            arrow:   img,
            Cardimg: cardImg,
        },

        {
            title: "Stock Market",
            description: "More than By Experience. Learn how to becoming professional Now...",
            price: "Rs. 2999",
            oldprice: "Rs. 32.90",
            link: "View Detail",
            arrow:   img,
            Cardimg: cardImg,
        },

        {
            title: "Stock Market",
            description: "More than By Experience. Learn how to becoming professional Now...",
            price: "Rs. 2999",
            oldprice: "Rs. 32.90",
            link: "View Detail",
            arrow:  img,
            Cardimg: cardImg,
        },

    ]
    return (
      <>
        <div className="w-full bg-[#FDECF2] flex items-center justify-center py-10 font-poppins">
  <div className="w-full max-w-[1155px] flex flex-col items-center ">

    {/* Heading */}
    <h1 className="text-center font-[500] text-[28px] md:text-[32px] leading-[40px] md:leading-[51.2px] tracking-[0px] text-[#1200FF] mb-8">
      <span className="text-[#333333]">Trending</span> Course
    </h1>

    {/* Courses */}
    <div className="w-full flex flex-wrap justify-center gap-[48px]">
      {courseList.map((val, index) => (
        <CourseCard key={index} {...val} />
      ))}
    </div>

  </div>
</div>

</>

    )
}

export default Course