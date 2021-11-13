import { PlusSmIcon } from "@heroicons/react/solid"

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions'



function ProductItem({ _id, img, price, title, quantity}) {

  const dispatch = useDispatch()

  const addToCartHandler =(_id)=>{
   
    dispatch(addToCart(_id));
 }






  return (
  
    <div key={_id}  className="flex flex-row mx-auto
     hover:bg-purple-400 hover:rounded-md ">
   
       
    <div className="flex flex-col border-0 items-center md:h-50 md:w-44 relative">

      <img className=" mt-2" height="100px" width="100px" src={img} alt="alt" />
      
      <p className="text-purple-600 text-lg font-semibold mt-1">₺{price}</p>
      <p className="text-gray-800 w-40 text-center font-semibold text-lg mt-1 break-words">{title}</p>
      
      <p className="text-gray-400 font-semibold text-lg mt-1">{quantity}</p>
     
    
      
      <div className="absolute flex rounded-lg h-10 w-10 shadow-2xl border-2 border-gray-100  
      right-7 bg-white mt-2 " onClick={() => addToCartHandler(_id)}>
      
      <PlusSmIcon className="h-5 w-5 text-purple-600 m-auto " />
      
      
      </div>

    </div>

    
   
      
     


  </div>

  )
}

export default ProductItem
