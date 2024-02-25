import React from 'react';

const Banner = () => {
    return (
        <div className='my-10'>
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XWrYzkz/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content text-wrap">
    <div className="max-w-sm md:max-w-lg mx-auto px-4">
      <h1 className="mb-3 md:mb-5 text-3xl md:text-5xl font-bold text-white font-sans">Endless TV Channels, movies, shows and more.</h1>
      <p className="text-lg md:text-2xl font-sans text-white mb-3 md:mb-5">Enjoy anywhere. Anytime Free</p>
      <button className="btn bg-red-600 text-white px-4 py-2 md:px-6 md:py-3">Get Started</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;