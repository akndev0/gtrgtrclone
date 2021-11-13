import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from "@heroicons/react/solid"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, addMinus, removeFromCart } from '../../redux/actions'

function ShoppingCart() {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const authData = useSelector((state) => state.authData)
  const {notify, auth}=authData
  const { cartItems } = cart



  useEffect(() => { }, [])

  const getCartSubTotal = () => {
   
    
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  useEffect(() => {
    let items = 0;
    let price2 = 0;

    cartItems.map((item) => {
      items += item.qty;
      price2 += item.qty * parseFloat().toFixed(2);
    });
   
    setTotalItems(items);
    setTotalPrice(price2.toFixed(2));
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const handlePlus = (_id) => {
    
    dispatch(addToCart(_id))
  }

  const handleMinus = (_id,qty) => {
     {qty >1 ? dispatch(addMinus(_id)):  dispatch(removeFromCart(_id)) }
    
  }


  const deleteHandeler = (_id) => {
    dispatch(removeFromCart(_id))
  }

 
  return (
    <div>
      <div className="overflow-y-scroll h-80">
        {cartItems.length === 0 ? (
          <div className="flex  flex-col mt-4 text-center  items-center mx-2 ">

            <ShoppingBagIcon className="text-purple-300 w-52" />

            <p className="text-purple-800 font-semibold">Sepetiniz şu an boş</p>
            <p className="font-semibold text-gray-400  ">Sipariş vermek için sepetinize ürün ekleyin</p>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-8 mt-4 mx-2 " >
                <img className="col-span-2 " src={item.img} alt="Su" />

                <div className="col-span-4 self-center mx-2  ">
                  <div className=" flex flex-col">
                    <p className="font-semibold text-mdtext-gray-700">{item.title}</p>
                    <p className="text-purple-700 font-bold text-md  ">{item.price}</p>
                  </div>
                </div>
                <div className="col-span-2  self-center ">
                  <div className="flex flex-row gap-0  h-8 w-12  ">
                    <MinusIcon style={{ boxShadow: "0 0 10px 1px gray" }} className="bg-white 
                           border-t-[1px]  border-b-[1px]  border-l-[1px]  rounded-l-lg  flex-1   " onClick={() => handleMinus(item.id,item.qty)} />
                    <p style={{ boxShadow: "0 0 10px 1px gray" }} className="bg-purple-600 items-center  text-md  text-center text-white flex-1 pt-1" >{item.qty}</p>
                    <PlusIcon style={{ boxShadow: "0 0 10px 1px gray" }} className="bg-white border-r-[1px] shadow-2xl  border-t-[1px]  border-b-[1px] rounded-r-lg  flex-1 " onClick={() => handlePlus(item.id)} />
                  </div>
                  <div className=" h-8 w-6 mt-5  mx-auto mr-0 ">
                    <TrashIcon onClick={() => deleteHandeler(item.id)} className="text-purple-800" />
                  </div>
                </div>
              </div>


            </div>
          ))
        )}

      </div>
      <div className="flex mx-2 justify-between mt-5 text-lg text-gray-600 font-semibold border-b-2
      ">
        <p className="">Subtotal:</p>
        <p>₺ {getCartSubTotal()}</p>

      </div>
      <div className="flex mx-2 text-center mt-5 text-lg bg-yellow-400 text-black 
      font-semibold rounded-xl mb-4
      ">
        {auth ?  <button className="mx-auto my-2">Proceed to checkout</button> :
            <button className="mx-auto my-2">Login to continue</button>
        }
        
        

      </div>




    </div>
  )
}

export default ShoppingCart
