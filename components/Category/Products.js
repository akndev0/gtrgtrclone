import { useState, useEffect } from 'react'
import ProductItem from "./ProductItem"

function Products({ GetirProducts }) {
  



  const [products, setProducts] = useState(null)


  useEffect(() => {
    if (GetirProducts) {
      setProducts(GetirProducts)
    
    }

  }, [GetirProducts])




  return (
    <div className="bg-gray-100">
      <div className=" md:flex flex-row gap-4 hidden sticky ">
        <h1 className="text-gray-600 font-semibold">Yeni Ürünler</h1>
        <h1 className="text-gray-600 font-semibold ">&#62;</h1>
        <h1 className="text-gray-600 font-semibold">Yeni Ürünler</h1>
      </div>
      

      <div className="  bg-gray-100 mx-auto rounded-lg  mt-5 ">














        { (products && products.length !=0) ? products.map(({ _id, category, items }) => (
          <div key={_id}>




            {items.map(({ subtitle, item }, _i) => (
              <div key={_i} className="mx-auto bg-gray-100 mt-5 "  >
                <h1 className="text-gray-500 text-xl mx-10 my-5 pt-5 ">{subtitle}</h1>

                <div className=" bg-white rounded-3xl
               flex flex-row flex-wrap py-5 md:gap-2 ">
                  {item.map(({ img, title, price, quantity, _id }) => (

                    <ProductItem key={_id}
                      _id={_id}
                      img={img}
                      title={title}
                      price={price}
                      quantity={quantity}

                    />


                  ))}
                </div>
              </div>
            ))}
          </div>
        )) :"Sadece Su & İçecek"}

      </div>


    </div>

  )
}

export default Products
