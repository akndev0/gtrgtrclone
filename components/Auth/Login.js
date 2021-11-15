import { useSelector, useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'

import {postData} from '../../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { notifyAuth, addAuth } from '../../redux/actions'


function Login() {
  const initialState = { phoneNumber: ''}
  const [userData, setUserData] = useState(initialState)
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.authData );
  const { notify,auth } = authData
  const router = useRouter()
  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  
     dispatch(notifyAuth())
  }

  const handleSubmit = async e => {
    e.preventDefault()
     const res = await postData('https://gtrgtrclone.herokuapp.com/api/auth/login', userData)
    
     if(res.err) return dispatch(notifyAuth( res.err))
     dispatch(notifyAuth( res.msg))
 
    dispatch(addAuth(res.access_token,res.user))

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 1
    })

    localStorage.setItem('firstLogin', true)
 
    
  }

  useEffect(() => {
   // if(Object.keys(auth).length !== 0) router.push("/")

  }, [authData])

  return (
    <>
      <div className="bg-gray-100 rounded-lg px-2 
       text-center  mx-auto  ">

        <div className="text-center ">
          <p className="text-purple-600 font-medium text-md py-2 pt-6 ">Giriş yap veya kayıt ol</p>

        </div>
      <form onSubmit={handleSubmit}>
        <div className="space-x-2 flex px-2 py-2">
          <select className="bg-white rounded-md border-2 w-2/6  px-2 h-14
    focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
  " type="list" placeholder="+90" aria-readonly  >
            <option >+90</option>
            <option >+90</option>
          </select>
          <input className="bg-white rounded-md border-2 w-4/6 px-4 h-14
  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
  " type="text" placeholder="Telefon Numarası" name="phoneNumber"
   value={userData.phoneNumber} onChange={handleChangeInput}  />
        </div>



        <div className="pt-2 px-2 divide-y-2 divide-gray-600 divide-opacity-10 ">
          <div className="pb-3">
            <button type="submit" className="bg-yellow-400
 text-md rounded-md  w-full py-3 px-4 text-purple-900 font-medium
 ">Telefon numarası ile devam et</button>

          </div>


        </div>
        </form>
      </div>
    </>
  )
}

export default Login

