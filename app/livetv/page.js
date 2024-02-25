import React from 'react';

const page = () => {
    return (
        <div className=' flex justify-between'>
            All live tv

        <div >
        <iframe width="560" height="315" src="https://desiembed.co/embed/stream.php?id=YWFoZWVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0rxgrInX1XI?si=GFxjX1IzykGYaq1N&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
    );
};

export default page;