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
        <div className="w-[600px]  p-2">
            {FAQ.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                        <div className="text-lg font-semibold">
                            {item.question}
                        </div>
                        <div className="text-2xl">
                            {activeIndex === index ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className="mt-2 text-gray-700">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
