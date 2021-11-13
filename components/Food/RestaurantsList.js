import { StarIcon, HeartIcon } from '@heroicons/react/solid'
import React from 'react'

function RestaurantsList({ restaurants }) {

  return (
    <div className=" mx-5 mt-12 mb-5 ">
      <h1 className=" md:m-5 md:ml-2 hidden md:flex" >{restaurants.length} Resturants </h1>
      {restaurants ? restaurants.map(({ Img, Title, DeliveryTime, Rate, RateCount, DeliveryType,
       MinimumBasketAmount, PaymentMethod, Cuisines }, _i) => (
        <div key={_i} className="bg-white flex flex-col  md:flex-row
         mt-10   rounded-lg">
 
            <div className="relative mx-auto ">
               <img src={Img} alt={Img}  className="h-72 md:h-44 rounded-lg" />
               <img src="./photos.svg " alt="" className="h-10 rounded-lg absolute bottom-2 m-2 " />
               <HeartIcon className="h-6 rounded-lg absolute top-2 right-0 m-2 text-gray-500  " />
              
            </div>

            <div className="flex md:flex-row flex-col flex-grow justify-between ">
              <div className=" flex flex-col justify-between order-last sm:order-none">
                <div>
                  
                
                  <h1 className="text-purple-700 text-lg mt-2 mx-2 font-semibold text-left" >
                     {Title} // {DeliveryType} // {PaymentMethod} //{Cuisines}
                   </h1>
                   <div className="bg-yellow-400 mx-2 w-52 flex flex-row mt-8 md:mt-2 justify-between text-[10px]  md:text-sm" >
                     
                     <div className="flex flex-row mt-0.5 mb-0.5 flex-none  ">
                       <img src="./diamond.png" alt="" className="h-3 self-center ml-2" />
                       <p className="text-purple-700 font-semibold ml-2  " >Müdavim + %25 indirim</p>
                     </div>
                    
                     <div style={{width:'0' ,height:'0',
                       borderTopWidth: '10px',
                      borderTopColor: 'transparent',
                      borderTopStyle: 'solid',
                      borderRightWidth: '20px',
                      borderRightColor: 'white',
                      borderRightStyle: 'solid',
                      borderBottomWidth: '10px',
                      borderBottomColor: 'transparent',
                      borderBottomStyle: 'solid'
                   }} className="self-center ml-2"  >
                       
                     </div>
                
                    
                  
                   </div> 
                
                  
                </div>
                <div className="flex flex-row mb-2 mt-2">
                   {DeliveryType=='Getir Getirsin' ?
                         <img src="getirgetirsin.svg" alt="" className="h-5 self-center mx-2"/>
                
                      :               
                       <img src="restaurant.svg" alt="" className="h-5 self-center mx-2"/>
                       }
                       <div className="flex flex-col text-left  text-gray-600 text-[12px] ">
                         <p className="flex-1" >{DeliveryTime} dk</p>
                         <p className="flex-1">Min. ₺ {MinimumBasketAmount}</p>                  
                       </div>     
                 </div>            
                 
                  
             
                 
              
              </div>
              <div className="flex justify-end -mt-12 mb-8 sm:mt-2  ">
              <div className="flex flex-row flex-grow-0  w-18 md:w-24   md:mt-2 mx-2 
              h-7 bg-white  filter drop-shadow-xl border rounded-sm  " >
                <StarIcon className="h-4 md:h-5 text-purple-500 self-center flex-grow-0  mx-0.5 " />
                <p className=" text-purple-500 self-center font-bold mx-0.5 flex-grow-0">{Rate}</p>
                <p className="self-center mx-0.5 text-gray-500 font-medium flex-grow-0" >({RateCount}+)</p>
              </div>
              </div>
                 
            </div>

      
        </div>
    
        )) :"No Restaurant"
      }

    </div>
  )
}

export default RestaurantsList

