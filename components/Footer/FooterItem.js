import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react"

function FooterItem({footer}) {

  const [show, setShow] = useState(true)
  const footerHandeler = () => {
    setShow(!show)
  }

  return (
    <>

      <div className="flex flex-row  justify-between   md:pr-0 ">
        <h6 className="text-lg  w-52
            text-purple-600 pt-7 font-semibold text-left
               ">{footer.title} </h6>
        <div onClick={() => footerHandeler()} className="h-6 w-6 right-0 mt-7 md:hidden 
          flex bg-purple-200 self-center justify-end  rounded-md">
          {show ?
            <ChevronUpIcon className="h-5 w-10 text-purple-800 self-center"
            />
            : <ChevronDownIcon className="h-5 w-10 text-purple-800 self-center"
            />
          }
        </div>

      </div>



      {
              footer.subTitle.map((row, rowindex) => {
                return (
                <div key={rowindex} className={show ? "md:inline hidden": ""}>


                  <p className="text-md font-base text-gray-600 text-left mt-3  ">{row.title}</p>

                </div>
              )})
            
            }


      





    </>

  )
}

export default FooterItem
