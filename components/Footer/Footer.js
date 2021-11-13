import { GlobeAltIcon } from "@heroicons/react/solid";

import FooterItem from "./FooterItem";
function Footer({ GetirFooter }) {

  return (
    <div className=" bg-white mb-20 text-center ">
      <div className="md:flex md:flex-row flex-wrap pb-10  flex-col  mb-5 bg-white mx-auto  border-b-2  max-w-screen-2xl">

        <div className="flex-1 px-10  ">

          <h6 className="text-lg font-semibold 
           text-purple-600 pt-7  text-left 
           ">Getir'i indirin!</h6>


          <div className="flex flex-col ">
            <img className="h-10 self-start  mt-4" src="/appstoretr.svg" alt="" />

            <img className="h-10 self-start  mt-4 " src="/android.svg" alt="" />
            <img className="h-10 self-start  mt-4 " src="/huawei-appgallery-tr.svg" alt="" />

          </div>

        </div>






        {GetirFooter.map((footer, index) => (
          <div className="flex-1 px-10 " key={index}   >
            <FooterItem footer={footer} />
          </div>

        ))}




      </div>

      <div className="md:flex flex-row justify-between px-10 mx-auto max-w-screen-2xl  hidden ">
        <div className="flex space-x-2">
          <p className="font-semibold text-gray-500">&copy; 2021 Getir</p>
          <p className="text-purple-700 font-semibold">&bull; Bilgi Toplumu Hizmetleri</p>
        </div>
        <div className="flex space-x-1" style={{ filter: "invert(55%) sepia(9%) saturate(15%) hue-rotate(348deg) brightness(89%) contrast(83%)" }}>
          <img className="h-5 w-5 self-center " src="/facebook.svg" alt="" />
          <img className="h-5 w-5 self-center" src="/twi.svg" alt="" />
          <img className="h-5 w-5 self-center" src="/ints.svg" alt="" />
          <div className="flex ">
            <GlobeAltIcon className="h-5 w-5 self-center mx-1" />
            <p className="font-bold">Türkçe(TR)</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
