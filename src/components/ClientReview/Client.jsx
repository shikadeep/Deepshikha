import React from 'react'
import ClientCard from './ClientCard'
import User from '../../assets/user_profile.png'
import Rate from '../../assets/rating.png'


const Client = () => {
  const clientList = [
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      id: User,
      user: "Maxin Will",
      rate: Rate,
    }
  ];

  return (
    <div className=" bg-[#F5F5F5] py-16 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 font-poppins">
        <h1 className="text-center font-medium text-2xl md:text-4xl text-black">
          Client <span className="text-[#1200FF]">Review</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-12">
          {clientList.map((value, index) => (
            <div key={index} className="w-full sm:w-[300px] px-10 md:px-4 md:w-[350px]">
              <ClientCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Client