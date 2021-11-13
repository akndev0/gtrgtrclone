import Image from 'next/image'
import Link from 'next/link'
import {
  GlobeAltIcon,
  LogoutIcon,
  UserAddIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/solid'
import getirFoodLogo from '../../public/getir-food-logo.svg'
import getirMore from '../../public/getir-more-logo.svg'
import getir from '../../public/getir-logo.svg'
import getirSu from '../../public/getir-su-logo.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import { notifyAuth } from '../../redux/actions'

import SignUpForm from '../Auth/SignUpForm'
import Login from '../Auth/Login'


function Header({ active }) {

  const dispatch = useDispatch()
  const router = useRouter()

  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const authData = useSelector((state) => state.authData)
  const { notify, auth } = authData
  
  
  
  useEffect(() => { 
    if(auth){
      setShowSignUpModal(false)
      setShowLoginModal(false)
    }
  }, [authData]);

 

  const handleLogout = () => {
    Cookies.remove('refreshtoken', { path: 'api/auth/accessToken' })
    Cookies.remove('auth', { path: 'api/auth/accessToken' })

    localStorage.removeItem('firstLogin')
    localStorage.removeItem('auth')
    localStorage.removeItem('authnotify')
    notifyAuth()
    localStorage.removeItem('authnotify')
    
    dispatch(notifyAuth())
    return router.reload();
  }
  const loggedRouter = () => {
   
    return (

      <div className="flex" >

       
        <div className="flex cursor-pointer ">
          <UserIcon className="h-6 w-5  text-white font-extrabold" />
          <p className="text-gray-200 font-semibold mx-2.5 "> {!auth ? JSON.parse(auth).user.name :"" } </p>
        </div>

        
        <div className="flex cursor-pointer " onClick={handleLogout}>
          
          <p className="text-gray-200 font-semibold mx-2.5 "> Logout </p>
          <LogoutIcon className="h-6 w-5  text-white font-extrabold" />
        </div>

      </div>

    )
  }


  return (

    <div className="sticky top-0 z-50 bg-gtr h-14">
      <div className="grid md:grid-cols-2 md:max-w-screen-2xl mx-auto overflow-y-hidden">
        <div className="flex flex-row h-10 items-center  cursor-pointer space-x-2 mt-4" loading="lazy">
        <Link  href="/category/Su%20%26%20%C4%B0%C3%A7ecek" > 
          <div className="cursor-pointer rounded-t-lg align-text-bottom   ">
            <div className={`mx-1 px-1 sm:px-2  ${active == "getir" ? "bg-gtr-light" : ""} rounded-t-xl`}>
              <Image className={`  ${active == "getir" ? "" : "filter grayscale  contrast-200"} text-gray-200 `}
               src={getir} width={60} height={60}
                alt="getir" loading="lazy" />
            </div>
          </div>
          </Link>
          <Link  href="/food?deliveryType=all&amp;sort=all&amp;payment=all&amp;minOrder=all" > 
          <div className="cursor-pointer rounded-t-lg align-text-bottom   ">
            <div className={`mx-1 px-1 sm:px-2 ${active == "getirFoodLogo" ? "bg-gtr-light" : ""} rounded-t-xl`}>
              <Image className={`  ${active == "getirFoodLogo" ? "" : "filter grayscale  contrast-200"} text-gray-200 `}
               src={getirFoodLogo} alt="getirFoodLogo" width={120} height={50}
                loading="lazy" />
            </div>
          </div>
          </Link>
          <Link  href="/" > 
          <div className="cursor-pointer rounded-t-lg align-text-bottom   ">
            <div className={`mx-1 px-1 sm:px-2 ${active == "getirMore" ? "bg-gtr-light" : ""} rounded-t-xl`}>
              <Image className={` ${active == "getirMore" ? "" : "filter grayscale  contrast-200"} text-gray-200 `}
                src={getirMore} alt="getirMore" width={120} height={50}
                loading="lazy" />
            </div>
          </div>
          </Link>
          <Link  href="/" > 
          <div className="cursor-pointer rounded-t-lg align-text-bottom   ">
            <div className={`mx-1 px-1 sm:px-2 ${active == "getirSu" ? "bg-gtr-light" : ""} rounded-t-xl`}>
              <Image className={` ${active == "getirSu" ? "" : "filter grayscale  contrast-200"}  text-gray-200 `}
                src={getirSu} alt="getirSu" width={75} height={50}

                loading="lazy" />
            </div>
          
          </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-end  space-x-2 lg:space-x-4 
        mx-4 lg:mx-6 text-sm
        text-gray-500">
          {!auth  ?
            <>
              <div className="flex cursor-pointer self-center ">
                <GlobeAltIcon className="h-6 w-5  text-white font-extrabold" />
                <p className="text-gray-200 font-semibold md:mx-2.5 self-center ">Türkçe (TR) </p>
              </div>

              <div className="flex cursor-pointer self-center" onClick={() => setShowLoginModal(true)}>
                <UserIcon className="h-6 w-5  text-white font-extrabold" />
                <p className=" text-gray-200 font-semibold  mx-2.5 self-center ">Giriş yap</p>
              </div >
              <div className="flex cursor-pointer self-center" onClick={() => setShowSignUpModal(true)} >
                <UserAddIcon className="h-6 w-5  text-white font-extrabold" />
                <p className=" text-gray-200 font-semibold mx-2.5 self-center ">Kayıt Ol</p>
              </div>
            </>
            : loggedRouter()
          }
        </div>
      </div>



      {showSignUpModal ? (
        <>

          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="flex flex-row justify-between text-center mx-4 my-2 " >
                <h2 className="text-purple-500 mx-auto text-xl m-2 flex-grow  pl-10
         font-semibold" >Kayıt ol</h2>

                <XIcon className="w-5 self-center bg-gray-200 rounded-md m-2  mx-5" onClick={() => setShowSignUpModal(false)} />
              </div>
              <SignUpForm />
            </div>
          </div>
        </>
      ) : null}



{showLoginModal ? (
        <>

          <div className=" items-end justify-center min-h-screen pt-4 px-4 pb-20 
          text-center sm:block sm:p-0" >

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div className="inline-block align-bottom bg-white  rounded-lg 
            text-left overflow-hidden shadow-xl transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-96">
               <div className="flex flex-row justify-end  mx-4 my-2 " >
               

                <XIcon className="w-5 self-center
                 bg-gray-200 rounded-md m-2   " onClick={() => setShowLoginModal(false)} />
              </div>
                <Login/>
                  <p className="text-sm text-gray-600 mb-5
                   mx-5">Kişisel verilerinize dair Aydınlatma Metni için 
<a className="text-purple-500 underline mx-1 ">tıklayınız</a>
.</p>

<p className="text-sm text-gray-600  bg-gray-100 text-center py-5 mt-10
                   ">Hala kayıt olmadınız mı? 
<a className="text-purple-500 underline mx-1">Kayıt Ol</a>
</p>
             


            </div>
          </div>
        </>
      ) : null}









    </div>


  )
}

export default Header
