import { XIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'
import filterSearch from '../../utils/filterSearch'

function FiltersApplied() {

  const handleDelete = (item) => {

    filterSearch({ router, [item]: "all" })
  }
  const router = useRouter()
  const queryItems = router.query

  return (
    <>
    {Object.entries(queryItems) ?
      <div className="mx-2">
        <p className="font-semibold text-gray-700"  >

          Filters Selected  </p>
        <div className="flex flex-row flex-wrap mt-3 mb-3 gap-2 gap-y-4 ">
          {Object.entries(queryItems).map((queryItem, i) => (
            (queryItem[1] != 'all' ?
              <div className="bg-purple-100 rounded-lg  " key={i} >
                <div className="mx-2 my-1 flex gap-2">
                  <p className="text-sm text-purple-500">{queryItem[1]}</p>
                  <XIcon className="h-3 self-center text-purple-500 hover:cursor-pointer"
                    onClick={() => { handleDelete(queryItem[0]) }} />
                </div>
              </div> : " ")
          ))
          }
        </div>
      </div>
      : " "
    }
  </>
  )
}

export default FiltersApplied
