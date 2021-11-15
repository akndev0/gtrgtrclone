import Head from 'next/head'
import Header from '../../components/Header/Header'
import ProductsCategories from '../../components/Category/ProductsCategories'
import SubHeader from '../../components/Header/SubHeader'
import Footer from '../../components/Footer/Footer'

function id({ GetirProducts, GetirFooter }) {


  
  return (
    <div className="">
      <Head>
        <title>Getir Clone</title>
        
      </Head>


      <Header active={"getir"} />
      <SubHeader gtrlogo={"../getir-logo.svg"} />

      <main className="bg-gray-100" >







        <ProductsCategories GetirProducts={GetirProducts} />
        <div className="mt-20">
          <Footer GetirFooter={GetirFooter} />
        </div>





      </main>

    </div>
  )
}


export async function getServerSideProps({ params }) {
  const { category } = params
  const baseUrl = process.env.BASE_URL
  const GetirProducts = await fetch(`${baseUrl}/api/products/${encodeURIComponent(category)}`).then(
    (res) => res.json()
  );
  const GetirFooter = await fetch(`${baseUrl}/api/footer`).then(
    (res) => res.json()
  );

  
  
  return {
    props: {

      GetirProducts: GetirProducts.data,
      GetirFooter: GetirFooter,

    },
  };



}

export default id
