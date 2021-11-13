import Favorite from "./Favorite"


function Favorities({ GetirFavorities }) {






  return (
    <div className=" bg-gray-100 mt-24 pb-10">

      <div className=" mx-auto max-w-screen-2xl">
        <h1 className="text-gray-600 font-semibold m-5 pt-5">Favoriler</h1>
      </div>




      <div className=" mx-auto  mt-5 max-w-screen-2xl ">



        <div className="flex flex-row mx-auto flex-wrap gap-4  ">



          {GetirFavorities.map(({ _id, img, price, title, quantity }) => (

            <Favorite key={_id}
              img={img}
              title={title}
              price={price}
              quantity={quantity}

            />


          ))}

        </div>








      </div>
    </div>
  )
}

export default Favorities
