import React from "react";
import { PRICING } from "../../../constants";
import Image from "next/image";
import Button from "@/components/Button";

export default function Pricing() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 ">
            <h1 className="text-6xl text-center text-balance font-bold mb-4">Pricing Plans</h1> 
            <h2 className="text-2xl text-center font-semibold mb-2">Choose a plan that's right for you</h2>
            <p className="text-lg m-3 text-balance text-center">We offer a variety of pricing plans to suit different needs and preferences. Whether you're looking for a basic camping experience or an all-inclusive adventure, we have a plan for you.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {PRICING.map((plan, index) => (
                    <PriceCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                        includes={plan.includes}
                    />
                ))}
            </div>
        </div>
    );
}

type PriceCardProps = {
    title: string,
    description: string,
    price: string,
    includes: string[],
}

const PriceCard = ({ title, description, price, includes }: PriceCardProps) => {
    return (
        <div className="relative px-8 h-82 w-76 flex flex-col justify-between items-center gap-2 border-2 border-black font-serif rounded-lg shadow-md">
            <div className="flex flex-col justify-start items-center gap-2 mt-4">
                <h3 className="text-3xl text-center">{title}</h3>
                <p className="text-5xl font-bold text-center">{price}</p>
                <p className="italic text-center mb-4">{description}</p>
                <ul className="text-left list-none p-0 mb-4 w-full">
                    {includes.map((item, index) => (
                        <li key={index} className="flex items-center mb-2 mx-auto">
                            <Image
                                src="/tick.png"
                                alt="tick"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <span className="bottom-0 pb-2">
                <Button
                    type="button"
                    title="Buy Now"
                    variant="btn_green"
                />
            </span>
        </div>
    );
}
