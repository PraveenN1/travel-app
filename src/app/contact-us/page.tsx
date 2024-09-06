"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import FAQ from "./faq";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
    <section className="max-container padding-container  mb-5 p-5 h-auto flex flex-col md:flex-row ">
      <div className="w-full flex flex-col gap-3 items-center justify-center mb-5">
        <h1 className="m-5 text-5xl lg:text-7xl font-bold">Contact Us</h1>
        <p className="text-xl flex items-center gap-1 ">
          <Image src="/email-icon.png" alt="email" width={36} height={36} />
          hilink@gmail.com
        </p>
        <p className="text-xl flex items-center gap-2 m-2">
          <Image
            src="/phone-icon.png"
            alt="phone"
            width={36}
            height={36}
            className="rounded-full"
          />
          123-456-789
        </p>
      </div>
      <div className="w-full h-auto md:w-[90%] lg:w-[50%] shadow-md bg-slate-200 p-2  rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-md">
          <div className="flex flex-col justify-center items-start p-2 w-full gap-2">
            <h2 className="text-3xl font-bold px-3">Get in touch with us</h2>
            <h3 className="text-xl px-3">You can reach us anytime</h3>
          </div>
          <div className="flex flex-row gap-5 justify-evenly m-5 p-2 ">
            <div className="w-full">
              <input
                className="p-2 rounded-md w-full"
                {...register("firstName", { required: "First Name is required" })}
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="w-full">
              <input
                {...register("lastName", { required: "Last Name is required" })}
                className="p-2 rounded-md w-full"
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="flex flex-col m-5 p-2 gap-2">
            <input
              {...register("email", {
                required: "Email is required", pattern: {
                  value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,
                  message: 'Invalid Email Format'
                }
              })}
              className="p-2 rounded-md w-full"
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <div className="w-full">
              <input
                {...register("phone")}
                className="p-2 rounded-md w-full"
                placeholder="Phone Number"
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              {/* Hidden input to register phone number */}
              <input
                type="hidden"
                {...register("phone")}
              />
            </div>

            <textarea
              {...register("message", { required: "Message is required" })}
              className="p-2 h-32 rounded-md w-full"
              placeholder="How can we help?"
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>
          <div className="flex flex-col justify-center items-center m-5 p-2">
            <button type="submit" className="w-full bg-green-500 p-2 rounded-md text-white">
              Submit
            </button>
            <p>
              By contacting us, you agree to our{" "}
              <span className="font-bold">Terms of Service</span> and{" "}
              <span className="font-bold">Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </section>
    <section className="max-container padding-container mb-5 h-50">
        <FAQ/>
    </section> 
    </div>
  );
}
