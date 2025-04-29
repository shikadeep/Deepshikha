import React from 'react'

const BlogCard = ({Blogimg, title, description}) => {
  return (
    <div className='w-[282px] h-[220px] flex gap-1 flex-col font-poppins'>
        <img src={Blogimg} className='w-[250px] h-[200px] '></img>
        <h1 className='font-[600] text-[17px]  leading-[26.8px] tracking-[0px] text-[#101828]'>{title}</h1>
        <p className='font-[400] text-[14px]  leading-[22.8px] tracking-[0px] text-[#667085]'>{description}</p>
    </div>
  )
}
export default BlogCard