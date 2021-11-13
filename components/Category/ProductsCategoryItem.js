import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react"

function ProductsCategoryItem({ id, img, title, subTitle }) {
   
  const [show, setShow] = useState(false)
  const productHandeler = () => {
    setShow(!show)
  }



  return (
    <>
       <div className="md:grid md:grid-cols-5 mx-2 "  onClick={() => productHandeler()} >
       <img className="col-span-1 h-10 w-15 m-1 hidden  md:block
           self-center " src={img} alt="" />
         <p className="md:col-span-3   pl-3  self-center font-semibold py-2 md:py-1
            md:text-gray-700 md:text-sm text-lg whitespace-nowrap text-white
            ">{title}  </p>
      {show  ?
         

         <ChevronUpIcon className="self-center h-5 pl-3 text-gray-400  hidden   md:block  "   />
         :
         <ChevronDownIcon className="self-center h-5 pl-3 text-gray-400  hidden   md:block  "   />
      }
       </div>
       <div className="w-full   " >
         
       
       <div style={{width:'100%'}} className="md:grid md:grid-cols-5 flex  md:relative 
          overflow-x-scroll md:overflow-auto left-0   absolute  bg-white 
         ">
         
         {
           subTitle.map(({ id, title },_i2) => {
             return(
             

             <p key={_i2}
   className={show ?
 ("md:col-start-2 md:col-span-4  text-md  md:text-left border-2 text-center md:border-0 font-base text-gray-500  md:pl-5 px-1 font-semibold mx-2  whitespace-nowrap md:whitespace-normal mt-2") : "hidden"}>{title} </p>
                  
              
              )   })    
           }
      
       </div>
       </div>
    </>
  )
}

export default ProductsCategoryItem
