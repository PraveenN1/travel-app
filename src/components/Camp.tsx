import { PEOPLE_URL } from "../../constants";
import Image from "next/image";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title=" "
          subtitle="Shimla"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Kufri"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex justify-center mr-8 -translate-y-22  md:justify-end md:-translate-y-24 lg:-translate-y-36 lg:justify-center">
      <CardStack items={CARDS}/>
      </div>
    </section>
  )
}

const CARDS = [
  {
    id: 0,
    name: "John Doe",
    designation: "Avid Camper",
    content: (
      <p>
        This campsite is incredible! <b>The scenery is breathtaking</b>, and the
        amenities are top-notch. I had an unforgettable experience.
      </p>
    ),
  },
  {
    id: 1,
    name: "Jane Smith",
    designation: "Outdoor Enthusiast",
    content: (
      <p>
        I loved my stay here. <b>The hiking trails are well-maintained</b>, and
        the staff is very friendly. I will definitely be coming back.
      </p>
    ),
  },
  {
    id: 2,
    name: "Michael Johnson",
    designation: "Nature Lover",
    content: (
      <p>
        The campsite was clean and safe. <b>Perfect for a weekend getaway</b>.
        The starry nights were the highlight of my trip.
      </p>
    ),
  },
];


export default Camp;