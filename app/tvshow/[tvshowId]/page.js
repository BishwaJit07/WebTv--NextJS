import Image from "next/image";



const SingleChannel = async ({params}) => {
    const channelId = params.channeld;
    const apiUrl = process.env.APi_URL
    const res = await fetch(`${apiUrl}/api/livechannel/${channelId}`);
    const channel = await res.json();
    const singleChannel = channel.LiveChannel;
console.log(channel);
const constructVideoUrlWithAutoplay = (videoUrl) => {
    return videoUrl + '&autoplay=1';
};
    return (
        <div className="">
    <div className="relative m-4 flex justify-center items-center" style={{paddingBottom: "56.25%"}}>
            <iframe
                className="absolute inset-0  m-auto w-3/4 h-3/4 "
                src={constructVideoUrlWithAutoplay(singleChannel.live)}
                title="YouTube video player"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
            
           <div className="flex flex-col text-center items-center bg-custom-color py-4">
            <Image
             src={singleChannel.img}
             width={100}
             height={100}
             className=" rounded-full"
             alt={singleChannel.title}/>
            <h3 className="text-xl font-bold pt-4">{singleChannel.title}</h3>
            <p className="py-5">{singleChannel.description}</p>
             </div>
            
            
        
        </div>
    );
};

export default SingleChannel;