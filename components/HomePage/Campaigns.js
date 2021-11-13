import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Slider from "react-slick";
import Image from 'next/image';
import { useRef } from "react";
function Campaigns({GetirCampaigns}) {

   const sliderRef =useRef(null)
  

  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 0,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          initialSlide: 0,
          arrows:false,
          dots: false,
        }
      },
      
    ]
  
    
  };

  return (
    <div className="max-w-screen-2xl grid grid-cols-12 
     sm:pt-4  mx-auto  h-90 top-10 absolute mt-12  md:relative  "   >
       <div className="col-span-1  self-center
           justify-self-end  hidden md:inline
       " >
          <ChevronLeftIcon className="h-10 w-10 
            bg-white text-gray-600 
          
          " onClick={()=>sliderRef.current.slickPrev()}  />
        </div>
      <div className="sm:col-span-10 col-span-12 " >
     
        <Slider    {...settings} 
                        ref={sliderRef} 
         className="text-center   ">
           




        {GetirCampaigns.map(({_id,img,title})=>
          (
               <div key={_id} className="sm:px-2 px-0" >
               <Image className="md:rounded-[15px]  " src={img} 
               alt={title}
                width={400} height={200}
                 loading="eager" />    
               </div>

               
          )
        )}
        </Slider>
      </div>

      <div className="col-span-1 bg-gray-800 self-center
           justify-self-start  hidden md:inline 
      ">
      
      <ChevronRightIcon className="h-10 w-10
           justify-self-start text-gray-600
      bg-white 
      " onClick={()=>sliderRef.current.slickNext()} />

       </div>  
      
   
     
</div>

      




  )
}

export default Campaigns
