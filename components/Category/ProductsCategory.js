import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { useState } from "react"
import Link from 'next/link'


function ProductsCategory({ GetirCategoriesLeft }) {

  const [closedSubTitle, setClosedSubTitle] = useState(1);

  const productHandeler = (id) => {
    if (closedSubTitle == id) {
      setClosedSubTitle(0)
    }
    else {
      setClosedSubTitle(id)
    }
  }

  return (
    <>
    {GetirCategoriesLeft.map(({ id, img, title, subTitle },_i) => (
      <Link href={`/category/${encodeURIComponent(title)}`} key={_i}  >
      <div className="" >
          
      <div className="md:grid md:grid-cols-5 mx-2 "  onClick={() => productHandeler(id )} >
       <img className="col-span-1 h-10 w-15 m-1 hidden  md:block
           self-center " src={img} alt="" />
         <p className="md:col-span-3   pl-3  self-center font-semibold py-2 md:py-1
            md:text-gray-700 md:text-sm text-lg whitespace-nowrap text-white
            ">{title}  </p>
      {closedSubTitle  == id ?
         

         <ChevronUpIcon className="self-center h-5 pl-3 text-gray-400  hidden   md:block  "   />
         :
         <ChevronDownIcon className="self-center h-5 pl-3 text-gray-400  hidden   md:block  "   />
      }
       </div>
       <div className="w-full   " >
         
       
       <div style={{width:'100%'}} className="md:grid md:grid-cols-5 flex  md:relative 
          overflow-x-scroll md:overflow-auto left-0   absolute  bg-white 
         ">
         
         {closedSubTitle  == id ?
           subTitle.map(({ id, title },_i2) => (
             <p key={_i2} className="md:col-start-2 md:col-span-4  text-md  md:text-left
              border-2 text-center md:border-0
                     font-base text-gray-500  md:pl-5 px-1 font-semibold mx-2  whitespace-nowrap md:whitespace-normal
                     mt-2">{title} </p>)) : ''  }
      
       </div>
       </div>
      </div>
      </Link>      ))}
    </>
  )
}

export default ProductsCategory
