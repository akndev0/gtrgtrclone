import Image from "next/image"
import Link from 'next/link'



function Category({ _id, img, title }) {



  return (
    <>
    <Link href={`/category/${title}`}>
    <div key={_id} className=" m-3  mx-auto md:mx-0 hover:bg-purple-400 hover:rounded-md hover:cursor-pointer">
      <div className="flex flex-col items-center md:h-32 md:w-32 ">

        <div className="border-2 border-gray-100 mt-2 self-center" >
          <Image src={img} alt="getirFoodLogo" height={40} width={40}

            loading="eager"  />
        </div>


        <p className="text-gray-800 md:text-lg text-sm text-center  font-semibold mt-4">{title}</p>

       

      </div>
    </div>
    </Link>
    </>
  )
}

export default Category
