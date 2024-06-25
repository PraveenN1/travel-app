import Image from "next/image";
import {HERO} from "../../constants"
import Button from "./Button";

const Hero = () => {
  return (
    <section className='max-container padding-container fflex flex-col g-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500 '>
      <div className='hero-map'/>
      {/* Left */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image 
        src="/camp.svg" alt="camp "width={50} height={50}
        className="absolute left-[-5px] top-[-30px] w-10 lg:w=[50px]"/>
        <h1 className="mt-2 bold-52 lg:bold-80 text-balance">{HERO.title}</h1>
        <p className="regular-16 mt-6 text-gray-30 ">{HERO.label}</p>
        <div className="my-11 flex gap-5">
          <div className="items-center gap-2 flex flex-wrap">
            {Array(5).fill(1).map((_,index)=>(
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-20">
            142k
            <span className="ml-1 font-normal text-gray-500">Excellent reviews</span>
          </p>
        </div>
        {/* wrapper for buttons */}
        <div className="w-full ">
            <Button
              type="button"
              title="Download App"
              variant="btn_green"
              />
            <Button
              type="button"
              title="How we word?"
              icon="/play.svg"
              variant="btn_white_text"
            />
        </div>
      </div>
    </section>
  )
}

export default Hero