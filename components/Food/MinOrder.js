import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import filterSearch from '../../utils/filterSearch'
import {useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router'

function MinOrder() {

  const ref = useRef(null);




  const [show, setShow] = useState(true)
  const [marginstate, setMarginstate] = useState(35)

  const router = useRouter()
  const queryItems = router.query


  const handleCollapse =()=>{
    setShow(!show)
  }
  const handleminOrder = (minOrderValue) => {
   
    filterSearch({router, minOrder: minOrderValue})
  }
 
 
  useEffect(() => {
    
  }, [ref.current])

  
  const progressHandler = (e) => {

    setMarginstate(e.nativeEvent.offsetX)
    handleminOrder(e.nativeEvent.offsetX)
  }


  return (
    
    <div className="border-t-2 mt-4">
    <div className="flex justify-between mx-2 mt-5" onClick={() => handleCollapse()}>
      <p className="font-semibold text-gray-700 ">Minimum Sepet Tutarı</p>
      {show ?
        <ChevronUpIcon className="h-5 self-center text-purple-500" />
        : <ChevronDownIcon className="h-5 transition duration-700 
        
        self-center text-purple-500" />
      }
    </div>


    {show ?
      <div className="flex flex-row text-center mx-1 ">

        <p className="text-xs self-end">5 ₺</p>

        <div className=" mx-1 flex-grow  ">
          <div style={{ width: "25%", marginLeft: `${marginstate-25}px` }} className="flex flex-col mb-1 mt-2 ">
            <div className=" flex-1  font-semibold  py-1 text-center text-white bg-purple-500">
              <p className="text-xs">{marginstate} ₺</p>
            </div>
            <div style={{
              width: "0", height: "0", borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent", borderTop: "10px solid #5D3EBC"
            }}
              className="flex-1  mx-auto  ">
            </div>

          </div>

          <div className="h-2 flex flex-row rounded self-center bg-purple-500 " ref={ref} onClick={progressHandler}>
            <div style={{ width: `${marginstate}px` }} className="flex  text-center  whitespace-nowrap text-white justify-center bg-purple-800"></div>
          </div>

        </div>

        <p className="text-xs self-end">Tümü</p>
      </div>

      : ""

    }
  </div>

  )
}

export default MinOrder
