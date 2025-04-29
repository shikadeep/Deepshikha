import React, { useState } from 'react';

const faqData = [
    {
        question: "What is your refund policy?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Are the courses conducted live?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Do the courses have any live interaction?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Are there any criteria for joining the courses?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Can I enroll in multiple courses?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Is there a community that I can join?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
    {
        question: "Whom do I contact in case of any issues or concerns?",
        answer: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-2 rounded-2xl border-[#F0E1E8] bg-[#FEF8FC] tracking-[0] w-full max-w-[500px]">
  <button
    onClick={onClick}
    className="flex items-center justify-between w-full text-left text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-medium text-[#000000] p-4">
    
    <span className="text-xl">{isOpen ? '×' : '+'}</span>
    <span className="ml-4 flex-1">{question}</span>
  </button>

  {isOpen && (
    <p className="text-[14px] leading-[22px] sm:leading-[25px] font-[400] text-[#333333] px-6 pb-4">
      {answer}
    </p>
  )}
</div>

);

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" w-full flex gap-5 flex-col items-center">
                {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
    );
}
