import Image from 'next/image'
import Slider from "react-slick"
import getirMainPage1 from '../../public/getir-mainpage-1.jpg'
import getirMainPage2 from '../../public/getir-mainpage-2.jpg'
import getirMainPage3 from '../../public/getir-mainpage-3.jpg'
import getirMainPage4 from '../../public/getir-mainpage-4.jpg'
import bimutluluk from '../../public/bimutluluk.svg'
import Login from "../Auth/Login"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
function Banner() {

  var settings = {
    dots: false,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

  };


  const authData = useSelector((state) => state.authData)
  const { notify, auth } = authData
  useEffect(() => {
    
  }, [auth]);



  return (

    <div className="relative  hidden md:block  "   >

      <div className=" -mt-10  ">
        <Slider {...settings} className=" h-full">

          <div className="h-[550px] relative  ">
            <Image src={getirMainPage1} alt={getirMainPage1}
              layout="fill" objectFit="cover" />
          </div>
          <div className="h-[550px]  relative  ">
            <Image src={getirMainPage2}
              alt={getirMainPage2} layout="fill" objectFit="cover" />
          </div>
          <div className="h-[550px] relative  ">
            <Image src={getirMainPage3}
              alt={getirMainPage3} layout="fill" objectFit="cover" />
          </div>
          <div className="h-[550px]  relative ">
            <Image src={getirMainPage4}
              alt={getirMainPage4} layout="fill" objectFit="cover" />
          </div>







        </Slider>
      </div>

      <div className="absolute top-0 flex  md:flex-row justify-around w-full
bg-purple-700 bg-opacity-60 py-10 

z-40 h-full ">
<div className={!auth ?   "mt-32 hidden md:inline" :
 "mt-32 hidden md:inline left-0 justify-start flex-grow  max-w-screen-2xl "}>


          <Image className="text-gray-200 " objectFit="cover" src={bimutluluk} alt="getirFoodLogo" loading="lazy"
            layout="" height={175} width={175} />


          <h1 className=" mt-10 text-gray-50 text-3xl font-bold w-80">Dakikalar içinde kapınızda</h1>
        </div>


        {!auth ?
          <div className="mt-32  hidden md:flex md:flex-col ">

            <Login />

          </div>
          : ''}


      </div>

    </div>


  )
}

export default Banner
