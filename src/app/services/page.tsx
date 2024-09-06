import React from "react";
import Image from "next/image";
import { SERVICES } from '../../../constants';
import Link from "next/link";
export default function Services() {

    return (
        <section className="max-container ">
            {/* Hero */}
            <div className="max-container padding-container flexCenter min-h-[400px] lg:min-h-[400px] bg-[url('/serviceshero.png')] bg-cover bg-center backdrop-blur-[2px] ">
                <div className="flex flex-col items-center text-balance gap-10">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl text-center text-balance pt-4 font-bold text-black ">Services</h1>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent -z-10 via-transparent to-black group-hover:from-black/90 group-hover:via-black/80 group-hover:to-black/90"></div>
                    <p className="text-xl md:text-2xl text-center text-[#ffffff]  italic p-4 ">We offer a variety of services to make your camping experience unforgettable. From personalized trip planning to guided tours, our team is dedicated to ensuring you have a seamless and enjoyable adventure.</p>
                </div>
            </div>
            {/* Services Cards */}
            <div className="max-container padding-container flex flex-col justify-center mb-24 bg-gradient-to-b ">
                <div></div>
                <p className="text-2xl font-sans text-center m-5 p-5 lg:text-4xl">Discover our comprehensive range of services below</p>
                <div className="m-5 p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {SERVICES.map((service, index) => (
                        <Link key={index} href={`/services/${service.title}`}>
                        <Card
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

type CardItemProps = {
    title: string,
    image: string,
    description: string,
}

const Card: React.FC<CardItemProps> = ({ title, image, description }) => {
    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg font-serif ">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-2xl lg:text-3xl text-white m-2">{title}</h1>
                    <p className="mb-3 text-md lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
                </div>
            </div>
        </div>
    );
};