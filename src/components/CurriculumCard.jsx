import React, { useState } from "react";

const chapters = [
  { title: "Chapter 1: Curriculum", videos: "1/12 Videos ", duration: "1h 28m", topics: [
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ],},
  { title: "Chapter 2: Curriculum", videos: "1/12 Videos", duration: "1h 28m" , topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },

  ], },
  { title: "Chapter 3: Curriculum", videos: "1/12 Videos", duration: "1h 28m", topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ], },
  { title: "Chapter 4: Curriculum", videos: "1/12 Videos", duration: "1h 28m", topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ], },
  { title: "Chapter 5: Curriculum", videos: "1/12 Videos", duration: "1h 28m", topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ], },
  { title: "Chapter 6: Curriculum", videos: "1/12 Videos", duration: "1h 28m", topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ], },
  { title: "Chapter 7: Curriculum", videos: "1/12 Videos", duration: "1h 28m", topics:[
    { title: "Installing Vue JS", duration: "10m" },
    { title: "Installing Vue JS", duration: "15m" },
    { title: "Installing Vue JS", duration: "20m" },
    { title: "Installing Vue JS", duration: "10m" },
  ], },
];

export default function CurriculumCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleChapter = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
      <div className=" flex flex-col gap-[2px] rounded-md shadow-sm">
        {chapters.map((chapter, index) => (
          <div key={index} className="bg-[#FFFFFF]">
            <button
              onClick={() => toggleChapter(index)}
              className="flex justify-between items-center w-full p-[10px] text-left"
            >
              <div>
                <h3 className="font-bold text-[14px]">{chapter.title}</h3>
                <p className="text-xs text-gray-600 mt-1">
                  {chapter.videos} <span className="text-pink-600 font-semibold ml-2">{chapter.duration}</span>
                </p>
              </div>
              <div className="text-xl">
                {openIndex === index ? "▲" : "▼"}
              </div>

            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm ">
                {/* Expanded content can go here */}
                <div >
                {chapter.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-sm text-gray-800">{topic.title}</p>
                    </div>
                    <span className="text-xs text-gray-500">{topic.duration}</span>
                  </div>
                ))}
                    
                </div>
                
              </div>
            )}
          </div>
        ))}
      </div>
    
  );
}
