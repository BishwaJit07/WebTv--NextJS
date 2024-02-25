import Image from "next/image";
import Banner from "./Home/Banner";
import Count from "./Home/Count";
import tv from "../public/Img/img.png"
import TvChannels from "./Home/TvChannels/TvChannels";
export default function Home() {
  return (
   <main>
    <div className=''>
      <Banner/>
   
      <Count/>

<div className="flex flex-col md:flex-row justify-around items-center mx-10">
<div className="text-center flex flex-col ">
<h2 className="my-10 text-3xl md:text-5xl font-semibold font-serif">
Watch Anywhere You Want.  
</h2>
<p className=" font-sans text-2xl md:text-3xl">
Watch an endless number of shows, on your phone, tablet, laptop, and TV.
</p>
</div>
<div>
<Image
className="my-10"
src={tv}
width={500}
height={500}
alt="Picture of the author"
/>
</div>
</div>

<TvChannels/>
      </div>

   </main>
  );
}
