import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async() => {
  const apiUrl = process.env.APi_URL
    const res = await fetch(`${apiUrl}/api/tvshow`);
    const channel = await res.json();
  console.log(channel);
  const Allchannels = channel.liveChannels;
    return (
        <div className=''>
           <div className="text-4xl text-center my-10  text-white font-bold bg-custom-color py-10">All Tv Show
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center justify-items-center">
  {Allchannels?.map((channel) => (
    <div key={channel._id} className="relative overflow-hidden bg-white w-96 h-96">
      <Image
        src={channel.img}
        width={300}
        height={300}
        alt={channel.title}
        className="bg-white hover:scale-110 duration-500 transition-transform  p-4 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1d3ca046] to-[#252e77af] bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:h-[180px] group-hover:w-full group-hover:bottom-0 right-0 flex-col">
        <p>{channel.title}</p>
        <Link href={`livetv/${channel._id}`} className="btn bg-red-500 text-white">Live </Link>
      </div>
    </div>
  ))}
</div>
        </div>
    );
};

export default page;