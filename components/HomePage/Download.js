import Image from 'next/image';



function Download() {
  return (
    <div className="lg:flex max-w-screen-2xl my-10 hidden    relative  mx-auto">

      <img className="w-full bg-gradient-to-r from-purple-900 via-purple-500 
        to-purple-700  h-80  rounded-lg" src="/doodle.png" alt="download" />

      <div className="absolute flex justify-between w-full">


        <div className="flex-1 px-16 left-10 pt-16 z-40" >
          <div >
            <p className="text-white font-bold text-3xl">Getir'i indirin!</p>
          </div>
          <div className="mt-2">
            <p className="text-white font-semibold w-96 text-lg">İstediğiniz
              ürünleri dakikalar içinde kapınıza getirelim.</p>
          </div>
          <div className="mt-5">

            <div className="flex  md:space-x-3 h-20 w-36 ">
              <img className=" flex-1" src="/appstoretr.svg" alt="" />

              <img className=" flex-1" src="/android.svg" alt="" />
              <img className=" flex-1" src="/huawei-appgallery-tr.svg" alt="" />
            </div>
          </div>

        </div>



        <div className="flex-1  z-40 flex
          text-right  h-80  justify-end pt-16
         ">

          <Image
            src="/phoneLanding.png"
            width={600} height={150}
            objectFit="cover"
          />




        </div>

      </div>
    </div>

  )
}

export default Download
