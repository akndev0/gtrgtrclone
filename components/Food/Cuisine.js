import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import filterSearch from '../../utils/filterSearch'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

function Cuisine() {



  const cuisineData = [{ title: 'Hepsi', value: 'all' }, { title: 'Müdavim', value: 'Müdavim' }
    , { title: 'Mahallenin Favorileri', value: 'Favs' }, { title: 'Burger', value: 'Burger' }, { title: 'Kebap', value: 'Kebap' }
    , { title: 'Döner', value: 'Döner' }, { title: 'Tavuk', value: 'Tavuk' }, { title: 'Tavuk', value: 'Tavuk' }, { title: 'Tavuk', value: 'Tavuk' }, { title: 'Tavuk', value: 'Tavuk' }, { title: 'Tavuk', value: 'Tavuk' }
    , { title: 'Tavuk', value: 'Tavuk' }]


  const [searchCuisine, setSearchCuisine] = useState('')
  const [show, setShow] = useState(true)
  const cuisinesArray = []
  const [cuisines, setCuisines] = useState(cuisinesArray)

  const router = useRouter()
  const queryItems = router.query

  const handleCuisinesRouter = () => {
    filterSearch({ router, cuisine: cuisines })
  }
  const handleCollapse = () => {
    setShow(!show)
  }
  const handleCuisines = (e) => {

    const value = e.target.value

    setCuisines([...cuisines, value])



  }

  useEffect(() => {
    handleCuisinesRouter()
  }, [cuisines])






  return (
    <div className="border-t-2 mt-4 relative">
      <div className="flex justify-between mx-2 mt-5 " onClick={() => handleCollapse()}>
        <p className="font-semibold text-gray-700 ">Mutfaklar</p>
        {show ?
          <ChevronUpIcon className="h-5 self-center text-purple-500" />
          : <ChevronDownIcon className="h-5 self-center text-purple-500" />
        }
      </div>
      {show ?
        <>
          <div className="mt-2 flex">
            <input type="text" name="cuisine"
              className="bg-white mx-2 border-4 flex-grow text-sm py-1 px-2
          placeholder-gray-700 border-gray-200 placeholder-opacity-100 rounded-lg my-2"
              placeholder="Mutfak türü ara"
              onChange={(event) => {
                setSearchCuisine(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mx-2 mt-2 h-44 overflow-y-scroll" onChange={e => handleCuisines(e)}>
            {cuisineData.filter((val) => {
              if (searchCuisine == "") {
                return val
              } else if (val.title.toLowerCase().includes(searchCuisine.toLowerCase())) {
                return val
              }
            })
              .map((cuisineItem, cuisineItemIndex) => {
                return (

                  <label className="inline-flex items-center" key={cuisineItemIndex}>
                    <input className="bg-purple-600 " type="checkbox" name="cuisine" value={cuisineItem.value}


                    />
                    <span className="ml-2">{cuisineItem.title}</span>
                  </label>
                )
              })}




            <div className="h-10  w-10/12 z-30
           bg-gradient-to-t from-[hsla(0,0%,100%,1)]
          absolute -bottom-0">

            </div>

          </div>
        </>
        : ""

      }

    </div>

  )
}

export default Cuisine
