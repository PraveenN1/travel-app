import Image from "next/image"

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24 -mt-10'>
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="text-green-50 text-xl uppercase ">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
        <div className="flexCenter max-conainer relative w-full mt-16">
          <Image
            src="/boat.png"
            width={1440}
            height={580}
            className="w-full object-cover object-center md:rounded-5xl"
            alt="boat"
          />
          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            />
            <div className="flexBetween flex-col">
              <div>
                <div className="flex flex-row gap-12">
                  <p className="text-gray-20">Destination</p>
                  <p className="text-green-50 bold-16 ">25 min</p>
                </div>
                <p className="bold-20">Jabeli
                </p>                
              </div>
              <div>
                <div className="flex flex-row gap-12">
                  <p className="text-gray-20 mr-28">Start track</p>
                </div>
                <p className="bold-20">   
                Phirdi
                </p>                
              </div>
              
           
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Guide