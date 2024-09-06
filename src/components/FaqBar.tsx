"use client";
import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FAQ } from "../../constants";

export default function FaqBar() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Close if the same question is clicked again
        } else {
            setActiveIndex(index); // Open the clicked question
        }
    };

    return (
        <div className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-auto p-2 mb-10">
            {FAQ.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className={`flex justify-between items-center cursor-pointer border-2 rounded-xl m-2 p-4 shadow-sm ${activeIndex === index ? 'shadow-xl' : 'shadow-sm'} `}onClick={() => handleToggle(index)}>
                        <div className="text-lg font-semibold">
                            {item.question}
                        </div>
                        <div className="text-2xl">
                            {activeIndex === index ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="text-gray-700 m-2 p-2 ">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
