import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import filterSearch from '../../utils/filterSearch'
import { useState } from "react"

import { useRouter } from 'next/router'

function Delivery() {
 
  const daliveryData=[{title:'Hepsi',value:'all',img:'null'},{title:'Getir Getirsin',value:'Getir Getirsin',img:'./getirgetirsin.svg'}
  ,{title:'Restoran getirsin',value:'Restoran getirsin',img:'./restaurant.svg'}]

  const [show, setShow] = useState(true)
  const router = useRouter()
  const queryItems = router.query

     
  const handleDeliveryType = (e) => {
    
    filterSearch({router, deliveryType: e.target.value})
   
  }
 

  const handleCollapse =()=>{
    setShow(!show)
  }

  return (
    <div className="border-t-2 mt-4">
        <div className="flex justify-between mx-2 mt-5" onClick={() => handleCollapse()}>
          <p className="font-semibold text-gray-700 ">Teslimat Yöntemi</p>
          {show ?
            <ChevronUpIcon className="h-5 self-center text-purple-500" />
            : <ChevronDownIcon className="h-5 self-center text-purple-500" />
          }
        </div>
        {show ?
          <div className="flex flex-col mx-2 mt-2" onChange={handleDeliveryType}>
             {daliveryData.map((deliveryItem,deliveryIndex)=>{
              return(
              <label className="inline-flex items-center" key={deliveryIndex}>
                <input className="bg-purple-600 form-radio " type="radio" name="teslimat" value={deliveryItem.value} />
                {deliveryIndex.img=='null' ? "" : <span className="ml-2 mx-2"><img src={deliveryItem.img} alt="" /></span> }
                <span>{deliveryItem.title}</span>
              </label>)
            })}
          

          </div>

          : ""

        }
      </div>
  )
}

export default Delivery
