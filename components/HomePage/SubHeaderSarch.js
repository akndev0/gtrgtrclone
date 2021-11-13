import { ChevronRightIcon, LocationMarkerIcon } from "@heroicons/react/solid"

function SubHeaderSarch() {
  return (
    <div className="sm:hidden flex h-8 content-around justify-between">
     
        <LocationMarkerIcon className="h-5 self-center mx-2 text-purple-500" />
        <p className="self-center font-semibold flex-grow
        " >Teslimat Adresi Belirle</p>
 
      
       
        <ChevronRightIcon className="h-5 self-center 
        text-purple-500 
         "/>
      
       
    </div>
  )
}

export default SubHeaderSarch
