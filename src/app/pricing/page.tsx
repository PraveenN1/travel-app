import React from "react";
import { PRICING } from "../../../constants";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Pricing() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center text-balance font-bold mb-4">Pricing Plans</h1>
            <h2 className="text-xl md:text-2xl  text-center font-semibold mb-2">Choose a plan that's right for you</h2>
            <p className="text-sm md:text-md text-gray-50 w-auto italic m-3 text-balance text-center">We offer a variety of pricing plans to suit different needs and preferences. Whether you're looking for a basic camping experience or an all-inclusive adventure, we have a plan for you.</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4">
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
    const isStandard = title === "Standard";
    return (
        <div className={`relative my-2 px-8 pb-6 h-auto w-full flex flex-col justify-between items-center gap-2 border-2 font-serif rounded-lg shadow-md ${isStandard ? 'shadow-2xl transform scale-105 border-green-500' : 'shadow-md border-gray-300'} hover:shadow-2xl transition-all duration-300`}>
            <div className="flex flex-col justify-start items-center gap-2">
                <h3 className={`text-3xl p-2 text-center rounded-t-[0.4rem] text-white w-full absolute ${title === "Basic" ? 'bg-green-600' : title === "Standard" ? 'bg-green-500' : 'bg-green-600'}`}>{title}</h3>
                <p className="text-5xl font-bold text-center pt-12">{price}</p>
                <p className="italic text-center mb-4">{description}</p>
                <ul className="text-left list-none p-0 mb-4 w-full">
                    {includes.map((item, index) => (
                        <li key={index} className="flex items-center mb-2 mx-auto">
                            <Image
                                src="/tick.png"
                                alt="tick"
                                width={20}
                                height={20}
                                className="mr-2 rounded-full"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom-0 pb-2 shadow-sm">
                <Link href="#">
                    <Button
                        type="button"
                        title="Buy Now"
                        variant="btn_dark_green"
                    />
                </Link>
            </div>
        </div>
    );
}
