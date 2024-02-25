
import Image from "next/image";
import pic from "@/public/Img/banner.jpg"
import horror from "@/public/Img/horror-2.jpg"
import { FaArrowAltCircleRight } from "react-icons/fa";

import Link from "next/link";





const TvChannels = async() => {
  const res = await fetch(`http://localhost:3000/api/livechannel`);
  const channel = await res.json();
console.log(channel);
const Allchannels = channel.liveChannels;

  return (
        <div>
    <div className="bg-custom-color my-10 py-10">
        <div className="text-4xl text-center mb-10  text-white font-bold">Popular Movies And Shows
</div>
<div className="inline-block overflow-hidden relative">
    <Image src={horror} width={270} height={370} alt="Shoes" className="hover:scale-110 duration-500 transition-transform" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  bg-gradient-to-b from-[#1d3ca046] to-[#252e77af] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:h-[180px]  group-hover:w-full group-hover:bottom-0 right-0">
        <p>Text on hover</p>
    </div>
</div>
<div className="flex items-center justify-end hover:text-blue-400"> see all <FaArrowAltCircleRight className="mx-2"/>
</div>
        </div>

          <div className="text-4xl text-center mb-10  text-white font-bold">Popular Tv Channels
</div>
<><div  >
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-center">
  {Allchannels?.map((channel) => (
    <div key={channel._id} className="relative overflow-hidden bg-white">
      <div className="aspect-w-1 aspect-h-1">
        <Image
          src={channel.img}
          layout="fill"
          objectFit="cover"
          alt={channel.title}
          className="bg-white hover:scale-110 duration-500 transition-transform"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1d3ca046] to-[#252e77af] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:h-[180px] group-hover:w-full flex-col">
        <p>{channel.title}</p>
        <Link href={`livetv/${channel._id}`} className="btn bg-red-500 text-white">Live</Link>
      </div>
    </div>
  ))}
</div>

<div className="flex items-center justify-end hover:text-blue-400"> see all <FaArrowAltCircleRight className="mx-2"/>
</div>
</div>
</>





        </div>
  );
};

export default TvChannels;