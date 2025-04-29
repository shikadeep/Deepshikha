import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    const blogList=[{
        Blogimg: "/src/assets/blog-img.png",
        title: "Our top 10 frameworks to use",
        description:"JavaScript frameworks make development easy with extensive ",

    },
    {
        Blogimg: "/src/assets/blog-img.png",
        title: "Our top 10 frameworks to use",
        description:"JavaScript frameworks make development easy with extensive ",

    },
    {
        Blogimg: "/src/assets/blog-img.png",
        title: "Our top 10 frameworks to use",
        description:"JavaScript frameworks make development easy with extensive ",

    },
    {
        Blogimg: "/src/assets/blog-img.png",
        title: "Our top 10 frameworks to use",
        description:"JavaScript frameworks make development easy with extensive ",

    },
]
  return (
    <div className='bg-[#FDECF2] w-[1350px] h-[935px] flex items-center justify-center '>
        <div className='w-[1155px] h-[720px] flex gap-10 flex-col items-center justify-center font-poppins'>
            <h1 className='text-center font-[500] text-[32px]  leading-[51.2px] tracking-[0px] text-[#1200FF]'>Blog</h1>
            <div className=' w-[1155px]  h-[620px] flex gap-16 flex-col '>
                <div className='w-[1155px]  h-[290px] flex gap-[52px] flex-row '>
                    {blogList.map((blogval, index)=>(
                        <BlogCard key={index} {...blogval} />
                    ) )}
                </div>
                <div className='w-[1155px]  h-[290px] flex gap-[52px]'>
                {blogList.map((blogval, index)=>(
                        <BlogCard key={index} {...blogval} />
                    ) )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog