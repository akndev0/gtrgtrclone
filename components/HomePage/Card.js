function Card({ id, img, title, info }) {
  return (
    <div className="flex-1 bg-white rounded-lg mt-5 ">
      <div className="text-center flex flex-col  ">
        <img className="lg:h-52 lg:w-52 h-24 w-24 sm lg:mt-20 mt-5 mx-auto" src={img} alt="" />
        
        <p className="text-purple-800 mt-8 text-sm md:text-lg  font-semibold">{title}</p>
        <p className="text-gray-500 mt-2 lg:w-80 w-24 mx-auto
        lg:mb-16 mb-5 text-xs 
        md:text-md font-medium">{info}</p>

      </div>


    </div>
  )
}

export default Card
