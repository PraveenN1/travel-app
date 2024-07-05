import React from "react";
import Image from "next/image";

export default function Contact(){
    return(
    <section className="max-container padding-container h-[40rem] flex flex-row bg-green-200">
        <div className="w-[28rem] bg-slate-100 flex flex-col gap-3 flexCenter">
            <h1 className="m-0 py-12 bold-52 translate-y-12">Contact Us</h1>
            <p className="text-xl flex flex-row items-center gap-2">
                <Image 
                    src="/email-icon.png" 
                    alt="email"
                    width={36}
                    height={36}
                /> hilink@gmail.com
            </p>
            <p className="text-xl flex flex-row gap-2"> 
                <Image
                    src="/phone-icon.png"
                    alt="phone"
                    width={36}
                    height={36}
                    className="rounded-full"
                />
                123-456-789</p>

        </div>
        <div className="flexCenter">
            <div className="w-[56rem] bg-slate-300">
                dfgfg
            </div>
        </div>
        
    </section>
    )
}