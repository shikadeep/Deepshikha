import React from 'react'

const BlogCard = ({ Blogimg, title, description }) => {
  return (
    <div className="flex flex-col gap-2 bg-white font-poppins  rounded-xl transition hover:shadow-lg">
      <img 
        src={Blogimg} 
        alt={title}
        className="w-full h-70  rounded-md"
      />
      <h2 className="font-semibold text-lg text-[#101828]">{title}</h2>
      <p className="text-sm text-[#667085]">{description}</p>
    </div>
  );
};

export default BlogCard