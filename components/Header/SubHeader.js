import { ChevronRightIcon, SearchIcon, UserIcon } from "@heroicons/react/solid"

function SubHeader({ gtrlogo }) {
  return (
    <div className="h-20 bg-gtr-light sticky top-14 z-40 ">
      <div className=" max-w-screen-2xl mx-auto flex flex-row ">

        <div className="flex flex-grow md:flex-grow-0">

          <UserIcon className="md:hidden h-12 mx-5 text-white  pt-6"  />
          <img className="h-14  pt-6 pl-2 flex-grow  " src={gtrlogo} alt="" />
          <SearchIcon className="md:hidden h-14 mx-5 text-white pt-6  " 
           />

        </div>


        <div className="hidden mx-auto mt-6 md:flex">


          <div className="bg-white z-50 " style={{borderRadius:"10px 20px 20px 10px"}}>
            <div className="flex flex-row gap-5 mx-3 pt-2 pb-2   ">
              <SearchIcon className="h-5 self-center text-purple-500 " />
              <input className="self-center text-opacity-25 mr-14 outline-none" type="text" name="adress" placeholder="Yeme veya restoran ara" />
              <img src="../House.svg" alt="house"/>
              <p className="font-semibold text-gray-500" >Home</p>
              <ChevronRightIcon className="h-6 self-center text-purple-500"/>
            </div>



          </div>
          <div className="bg-yellow-400 -ml-4 flex rounded-r-xl  ">
            <div className="self-center ">
              <p className="text-purple-700 font-semibold ml-8 mr-3"> TVS 10-50dk</p>
            </div>
          </div>


        </div>



      </div>
    </div>
  )
}

export default SubHeader
