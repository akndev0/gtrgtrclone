import Payment from "./Payment";
import Cuisine from "./Cuisine";
import Sort from "./Sort";
import Delivery from "./Delivery";
import MinOrder from "./MinOrder";
import FiltersApplied from "./FiltersApplied";

function Filter() {

  return (
    <div className="mt-20 md:mt-28 mb-20">



      <div className="bg-white mt-10 w-80 px-5 pt-5 mx-auto pb-10 text-lg">

        <FiltersApplied />

        <Sort />



        <Delivery />



        <MinOrder />



        <Payment />



        <Cuisine />




      </div>

    </div >
  )
}

export default Filter
