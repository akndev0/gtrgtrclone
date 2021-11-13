import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import filterSearch from '../../utils/filterSearch'
import { useState } from "react"
import { useRouter } from 'next/router'


function Payment() {

   const paymentData=[{title:'Hepsi',value:'all'},{title:'Online Ödeme',value:'subHeader' },{title:'Kredi/Banka Kartı',value:'onkb'},
   {title:'Kapıda Ödeme',value:'subHeader' }
   ,{title:'Kredi/Banka Kartı',value:'kkb'},{title:'Nakit',value:'kapinakit'},
   {title:'Multinet Kartı',value:'multinet'}
   ,{title:'Multinet Kartı',value:'multinet'},{title:'Multinet Kartı',value:'multinet'}]

  const [show, setShow] = useState(true)
  const [searchPayment,setSearchPayment]= useState('')
  const router = useRouter()
  const queryItems = router.query

  const handleCollapse =()=>{
    setShow(!show)
  }
  const handlePayment = (e) => {
   
    filterSearch({router, payment: e.target.value})
  }

  return (
    <div className="border-t-2 mt-4 relative ">
    <div className="flex justify-between mx-2 mt-5 " onClick={() => handleCollapse()}>
      <p className="font-semibold text-gray-700 ">Ödeme Yöntemi</p>
      { show ?
        <ChevronUpIcon className="h-5 self-center text-purple-500" />
        : <ChevronDownIcon className="h-5 self-center text-purple-500" />
      }
    </div>
    { show ?
      <>
        <div className="mt-2 flex ">
          <input type="text" name="odemesearch"  className="bg-white mx-2 border-4 text-sm py-1 px-2 flex-grow
            placeholder-gray-700 border-gray-200 placeholder-opacity-100 rounded-lg my-2"
             placeholder=" Ödeme yöntemi ara"
             onChange={(event)=>{
              setSearchPayment(event.target.value);
            }}
             />
        </div>
        <div className="flex flex-col mx-2 mt-2 h-40 overflow-y-scroll"  onChange={handlePayment}>
        {paymentData.filter((val)=>{
          if (searchPayment==""){
            return val
          }else if (true){
               if(val.title.toLowerCase().includes(searchPayment.toLowerCase())) 
               {
                 return val
                 
               }
               return
          }
       })
        .map((paymentItem,paymentItemIndex)=>{
          return(
            <div key={paymentItemIndex}>
            {paymentItem.value=="subHeader" ?  <p className="text-sm text-gray-600 font-bold" >{paymentItem.title}</p> : (
          <label className="inline-flex items-center" key={paymentItemIndex}>
            <input className="bg-purple-600 " type="radio"  value={paymentItem.value} />
            <span className="ml-2">{paymentItem.title}</span>
          </label> )}
          </div>)
        })}

         
          <div className="h-16  w-10/12 z-30
           bg-gradient-to-t from-[hsla(0,0%,100%,1)]
          absolute -bottom-0">
           
          </div>

        </div>
      </>
      : ""

    }
      
  </div>
  )
}

export default Payment
