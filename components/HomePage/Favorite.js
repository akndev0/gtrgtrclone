import { PlusSmIcon } from "@heroicons/react/solid"
import Image from 'next/image';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions'



function Favorite({ _id, img, price, title, quantity }) {


  const dispatch = useDispatch()

  const addToCartHandler = (_id) => {

    //  dispatch(addToCart(_id));
  }







  return (
    <div key={_id} className="mx-auto group  hover:bg-purple-400 hover:rounded-md">


      <div className="flex flex-col  items-center relative py-2">


        <Image src={img} alt="alt" height={80} width={80} 
          loading="lazy" />
        <p className="text-purple-600 text-lg md:text-lg  font-semibold mt-1 group-hover:text-white">₺{price}</p>
        <p className="text-gray-800 md:w-40 w-20 text-center font-semibold  
         md:text-lg  mt-1 break-words">{title}</p>

        <p className="text-gray-400 font-semibold text-sm md:text-lg mt-1 group-hover:text-gray-800">{quantity}</p>



        <div className="absolute flex rounded-lg h-7 w-7 md:h-10 md:w-10
        self-center shadow-2xl border-2 border-gray-100  hover:cursor-not-allowed 
        md:right-7 right-0 bg-white mt-2  " onClick={() => addToCartHandler(_id)}>
          <PlusSmIcon className="h-5 w-5 sm:h-5 sm:w-5  text-purple-600 m-auto " />


        </div>





      </div>







    </div>
  )
}

export default Favorite
