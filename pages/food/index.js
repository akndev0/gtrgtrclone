import Head from 'next/head'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/Header/SubHeader'
import { useRouter } from 'next/router'
import RestaurantsList from '../../components/Food/RestaurantsList'
import Filter from '../../components/Food/Filter'
import { FilterIcon, MenuAlt4Icon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'




function index({ food }) {

  const router = useRouter()
  
  const queryItems=router.query

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Getir Clone</title>
        
      </Head>


      <Header active={"getirFoodLogo"} />
      <SubHeader gtrlogo={"./getir-food-logo.svg"} />


      <main className="bg-gray-100 h-full " >


        <div className="flex flex-row mx-auto max-w-screen-xl  pt-20 pb-80 flex-wrap  ">
          <div className="hidden  xl:inline mx-5">
            <Filter  />
          </div>
         
         
         <div className="flex flex-col xl:hidden  w-full px-5  bg-white">
           
         
          <div className="flex flex-row  flex-grow  justify-between xl:hidden 
          mx-2 mt-3 mb-3" >
           
              
            <div className="flex">
            <div className=" bg-[#5D3EBC] text-white rounded-lg  "  onClick={() => setShowModal(true)} >

          
              <div className="flex px-2 py-2  ">
                <FilterIcon className="h-4 self center " />
                <p className="px-2  text-sm self-center font-semibold">Filters</p>
              </div>
            
            </div>


            <div className="flex gap-2 mx-3 px-2 font-semibold self-center text-sm ">
              <p className="text-[#5D3EBC]  " >{food.length} </p>
              <p >Restaurants</p>
            </div>
           </div>
            <div className="hidden sm:flex   text-[#5D3EBC] font-bold self-center ">
              <MenuAlt4Icon className="h-6 self center " />
              <MenuIcon className="h-6 self center " />
              
            </div>
        </div>

           <div>
           {Object.entries(queryItems) ?
          <div className="mx-2">
            
            <div className="flex flex-row flex-wrap mt-3 mb-3 gap-2 gap-y-4 ">
                {Object.entries(queryItems).map((queryItem,i)  => (
                   (queryItem[1] !='all' ?
                     <div className = "bg-purple-100 rounded-lg  " key={i} >
                         <div className="mx-2 my-1 flex gap-2">
                           <p className="text-sm text-purple-500">{queryItem[1]}</p>
                           <XIcon className="h-3 self-center text-purple-500 hover:cursor-pointer" />
                         </div>
                     </div>  : " ")
              ))
                }
            </div>
     </div>
      : ""
}
        
           </div>
          

           <div className="bg-purple-100 text-center text-purple-600
           mt-5 mb-5  mx-2 rounded-lg ">
              <p className="py-2 font-bold  text-sm"> Clear Selected Filters</p>
           </div>
        </div>


          <div className="md:flex-grow flex-grow-0 mx-auto ">
            <RestaurantsList restaurants={food} />
          </div>

        </div>

        {showModal ? (
          <>
            <div
              className="justify-center w-full items-center
               overflow-y-scroll fixed inset-0 top-0  z-50 outline-none focus:outline-none"
            >
              <div className=" flex flex-col  w-full">



                <div className="  bg-white       ">
                  <div className="justify-end flex  text-right 
                      mt-10 pr-5 hover:cursor-pointer gap-2  " onClick={() => setShowModal(false)}>
                    <p className=" ">Kapat  </p>
                    <XIcon className="w-4 self-center" />
                  </div>


                  <div >
                    <Filter  />

                  </div>

                </div>


              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}











      </main>

    </div>
  )
}
export async function getServerSideProps({ query }) {


  const cuisine = query.cuisine || 'all'
  const deliveryType = query.deliveryType || 'all'
  const payment = query.payment || 'all'
  const minOrder = query.minOrder || 'all'
  const sort = query.sort || 'all'




  
  const restData = await fetch(`http://localhost:3000/api/restaurants?cuisine=${cuisine}&deliveryType=${deliveryType}&payment=${payment}&minOrder=${minOrder}&sort=${sort}`).then(
    (res) => res.json()
  );



  return {
    props: {
      food: restData.result
    },
  }
}

export default index
