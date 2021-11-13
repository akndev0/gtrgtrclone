import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import filterSearch from '../../utils/filterSearch'
import { useState } from "react"
import { useRouter } from 'next/router'


function Sort() {

  const sortData=[{title:'Akıllı Sıralama',value:'all'},{title:'Restoran Puanı',value:'restpuan'}
  ,{title:'Teslimat Süresi',value:'teslimarsur'}]

  const [show, setShow] = useState(true)
  const router = useRouter()
  const queryItems = router.query


  const handleSort = (e) => {
    
    filterSearch({router, sort: e.target.value})
  }

  const handleCollapse =()=>{
    setShow(!show)
  }


  return (
    
    <div className="border-t-2 mt-4">
    <div className="flex justify-between mx-2 mt-4 hover:cursor-pointer " onClick={() => handleCollapse()} >
      <p  className="font-semibold text-gray-700 " >Sıralama</p>
      {show ?
        <ChevronUpIcon className="h-5 self-center text-purple-500" />
        : <ChevronDownIcon className="h-5 self-center text-purple-500" />
      }

    </div>
    {show ?

      <div className="flex flex-col mx-2 mt-2" onChange={handleSort}>
        {sortData.map((sortingItem,sortingIndex)=>{
          return(
            <label className="inline-flex items-center" key={sortingIndex}>
            <input className="bg-purple-600 form-radio " type="radio" name="siralama" value={sortingItem.value} />
            <span className="ml-2">{sortingItem.title}</span>
          </label>)
        })}
        

      </div>

      : ""

    }


  </div>
  )
}

export default Sort
