import React from 'react'

const ClientCard = ({ review, id, user, rate }) => {
  return (
    <div className="w-full min-h-[250px] rounded-[40px] bg-white p-6  flex flex-col gap-4 shadow-md">
      <p className="text-[#2F2A2A] text-sm md:text-base leading-relaxed font-normal">
        {review}
      </p>
      <div className="flex items-center gap-3">
        <img src={id} alt="User" className="w-12 h-12 rounded-full object-cover" />
        <div className="flex flex-col">
          <p className="font-bold text-[#2F2A2A] text-base md:text-lg">{user}</p>
          <img src={rate} alt="Rating" className="w-32 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};



export default ClientCard