import Products from "./Products"
import ProductsCategory from "./ProductsCategory"
import ShoppingCart from "./ShoppingCart";
function ProductsCategories({ GetirProducts }) {

  const GetirCategoriesLeft = [
    {
      id: "1", img: '.././yeni.jpeg', title: "Yeni Ürünler",
      subTitle: [{ id: "1", title: "Yeni Ürünler" },
      ]
    },
    {
      id: '2', img: '.././indirimler.jpeg', title: 'İndirimler',
      subTitle: [
        { id: "1", title: "Su" },
        { id: "2", title: "Gazlı İçecek" },
        , { id: "3", title: "Maden Suyu" },
        , { id: "4", title: "Meyve Suyu" },
        , { id: "5", title: "Ayran & Kefir" },
        , { id: "6", title: "Çay" },
        , { id: "7", title: "Kahve" },
        , { id: "8", title: "Soğuk Çay & Kahve" },
        , { id: "9", title: "Enerji İçeceği" },
        , { id: "10", title: "Fonsiyonel İçecekler" },
        , { id: "11", title: "Buz" },
      ]
    },
    {
      id: '3', img: '.././suicecek.jpeg', title: 'Su & İçecek',
      subTitle: [{ id: "1", title: "Su" },
      { id: "2", title: "Gazlı İçecek" },
        , { id: "3", title: "Maden Suyu" },
        , { id: "4", title: "Meyve Suyu" },
        , { id: "5", title: "Ayran & Kefir" },
        , { id: "6", title: "Çay" },
        , { id: "7", title: "Kahve" },
        , { id: "8", title: "Soğuk Çay & Kahve" },
        , { id: "9", title: "Enerji İçeceği" },
        , { id: "10", title: "Fonsiyonel İçecekler" },
        , { id: "11", title: "Buz" },]
    },
    {
      id: '4', img: '.././meyvesebze.jpeg', title: 'Meyve & Sebze',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '5', img: '.././firindan.jpeg', title: 'Fırından',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '6', img: '.././temelgida.jpeg', title: 'Temel Gıda',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '7', img: '.././atistirmalik.jpeg', title: 'Atıştırmalık',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '8', img: '.././dondurma.jpeg', title: 'Dondurma',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '9', img: '.././yiyecek.jpeg', title: 'Yiyecek',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '10', img: '.././sutkahvalti.jpeg', title: 'Süt & Kahvaltı',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '11', img: '.././fitform.jpeg', title: 'Fit & Form',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '12', img: '.././kisiselbakim.jpeg', title: 'Kişisel Bakım',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '13', img: '.././evbakim.jpeg', title: 'Ev Bakım',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '14', img: '.././evyasam.jpeg', title: 'Ev & Yaşam',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '15', img: '.././teknoloji.jpeg', title: 'Teknoloji',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '16', img: '.././evcil.jpeg', title: 'Evcil Hayvan',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '17', img: '.././bebek.jpeg', title: 'Bebek',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '18', img: '.././cinselsaglik.jpeg', title: 'Cinsel Sağlık',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
    {
      id: '19', img: '.././giyim.jpeg', title: 'Giyim',
      subTitle: [{ id: "1", title: "title1" },
      { id: "22", title: "title1" },
      { id: "3", title: "title2" },
        , { id: "4", title: "title3" },]
    },
  ]




  return (
    <div className=" md:grid grid-cols-12  max-w-screen-2xl mx-auto bg-gray-100   ">
      <div className=" md:col-span-3 lg:col-span-2 flex flex-col  md:mt-20  rounded-lg ">
        <h1 className="text-gray-600 font-semibold hidden md:inline mx-2">Kategoriler</h1>

        <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-auto
          bg-gtr md:bg-white  mt-5 md:rounded-md md:mx-0   ">

          <ProductsCategory GetirCategoriesLeft={GetirCategoriesLeft} />


        </div>

      </div>

      
     

      <div className="md:col-span-9 lg:col-span-7 flex  md:mx-2 h-[1500px]  mt-10
       scrollbar-hide overflow-y-scroll  ">

      
        <Products GetirProducts={GetirProducts} />
       

      </div>
    


      <div className="lg:col-span-3 hidden lg:inline mx-5 md:mx-2  mb-10 mt-10   ">


        <p className="text-gray-900 font-semibold">Sepetim</p>


        <div className="col-span-2  bg-white rounded-lg
       border-yellow-300 border-4 mt-7 
      
      items-center ">





          <ShoppingCart />





        </div>
      </div>
    </div>
  )
}

export default ProductsCategories
