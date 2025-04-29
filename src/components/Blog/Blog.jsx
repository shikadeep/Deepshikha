import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  const blogList = [
    {
      Blogimg: "/src/assets/blog-img.png",
      title: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive ",
    },
    {
      Blogimg: "/src/assets/blog-img.png",
      title: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive ",
    },
    {
      Blogimg: "/src/assets/blog-img.png",
      title: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive ",
    },
    {
      Blogimg: "/src/assets/blog-img.png",
      title: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive ",
    },
  ];

  return (
    <div className="bg-[#FDECF2] py-12  md:px-8 lg:px-20 px-[70px]">
      <div className="max-w-screen-xl mx-auto text-center font-poppins">
        <h1 className="text-[#1200FF] text-3xl md:text-4xl font-medium mb-8">Blog</h1>
        <div className='flex gap-2 flex-col md:w-full'>
        <div className="flex flex-wrap justify-center  gap-7">
          {blogList.map((blog, index) => (
            <div key={index} className=" w-full sm:w-[47%] lg:w-[22%]">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
          {blogList.map((blog, index) => (
            <div key={index} className="w-full sm:w-[47%]  lg:w-[22%]">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog