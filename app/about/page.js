import React from 'react';
import watchTv from '@/public/Img/watching_movie_TV_PC_Laptop_Featured.jpg'
import Image from 'next/image';

export const metadata = {
    title: "WebTv/About",
    description: "WebTV About Page",
  };

const page = () => {
    
    return (
        <div className=''>
            <h2 className='bg-custom-color text-3xl text-center py-4 my-10'> About Us</h2>

            <div className='flex flex-col md:flex-row justify-around items-center'>
                      <div className='text-center md:w-1/2'>
                        <h3 className='text-4xl font-semibold font-mono m-4'>Your Ultimate Entertainment Destination</h3>
                            <p className='text-xl m-4 '>
                            Welcome to WebTv, where entertainment knows no bounds! 
                            We are your premier online destination for immersive live TV, captivating series, and blockbuster movies,  all available at your fingertips.
                            At WebTv,  we believe in bringing the magic of entertainment directly to you, anytime, anywhere.
                            </p>
                      </div>
                      <div className=' '>
                      <Image
      src={watchTv}
      width={800}
      height={800}
      alt="Picture of the author"
    />   
                      </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-8 text-center items-center justify-center mx-2 my-5 md:mt-40'>
                <div className='p-6'>
                    <h2 className='text-xl font-bold'>Our Mission</h2>
                    <p>At WebTv, our mission is to redefine the way you experience entertainment. We strive to provide a diverse array of content that caters to every taste and preference. Whether you're in the mood for heart-pounding action, gut-wrenching drama, side-splitting comedy, or thought-provoking documentaries, we've got you covered.</p>
                </div>
                <div className='p-6'>
                    <h2 className='text-xl font-bold'>What Sets Us Apart</h2>
                    <ul><li>
                        <span className='font-semibold'>Live TV:</span>
                     Experience the thrill of live television streaming with our extensive selection of channels covering news, sports, lifestyle, and more. Stay up-to-date with the latest happenings around the globe, all in real-time.
                    </li>



<li> <span className='font-semibold'>Blockbuster Movies:</span>
     Immerse yourself in the magic of cinema with our vast library of blockbuster movies. Whether you're in the mood for a Hollywood classic, an indie gem, or the latest box-office hit, we have the perfect movie for your movie night. </li></ul>
                </div>
                <div className='p-6'>
                    <h2 className='text-xl font-bold'>Our Promise

</h2>
 <p>
 At WebTv, your satisfaction is our top priority. We are dedicated to continuously enhancing our platform to deliver unparalleled entertainment experiences tailored to your preferences. Join us on this exciting journey as we continue to push the boundaries of online entertainment.

Thank you for choosing WebTv as your ultimate entertainment destination. Let the binge-watching begin!
 </p>
                 
                </div>
            </div>

        </div>
    );
};

export default page;