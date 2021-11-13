import { useState } from 'react'
import valid from '../../utils/valid'

const baseUrl = process.env.BASE_URL

function SignUpForm() {
  const initialState = { name: '', email: '', password: '', phoneNumber: '', newsletter: '' }
  const [userData, setUserData] = useState(initialState)
  

  const [kullanim, setKullanim] = useState(0)
  const [aydinlatma, setAydinlatma] = useState(0)
  const [error, setError] = useState(null)
  

  const { name, email, password, phoneNumber, newsletter } = userData

  const handleChangeInput = (e) => {
 

    const target = e.target;
    const value = target.type === 'checkbox' ? ((target.checked==false ) ? "notaccepted" :"accepted" ) : target.value;
    const name = target.name;
    setUserData({ ...userData,
      [name]: value    });
 
   
  
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const err = valid(name, email, password, phoneNumber, newsletter)
    if (err) {
      console.log(err, "errfromregister")
      setError(err)

    }
    if (aydinlatma == 0) {
      setError("Lütfen Aydinlatma Metnini Kabul Ediniz.")
    } else if (kullanim == 0) {
      setError("Lütfen Kullanım Koşullarını Kabul Ediniz.")
    }

    if (aydinlatma == 1 && kullanim == 1) {
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(userData),
      })
      if (res.err) return console.log(res.err, "red.err")
    }





  }
  const handleKullanimInput = () => {
    setKullanim(!kullanim)

  }
  const handleAydinlatmaInput = () => {
    setAydinlatma(!aydinlatma)

  }
 


  return (
    <div className="flex flex-col " >
      <form onSubmit={handleSubmit}>
        <div className="mx-5">



          <div className="mt-2">

            <button className="bg-gray-200  
            text-md rounded-md  w-full py-3 px-4 text-blue-900 font-medium
            active:bg-purple-200 active:
            " type="">Facebook ile devam et</button>

          </div>

          <div>
            <div className="flex gap-2">


              <div className="mt-2  border-4 bg-red-700">
                <select type="text" placeholder="+90" className="w-20
           border-0 h-14 outline-none px-3
           "  aria-readonly >
                  <option>+90</option>
                  <option>+90</option>
                  <option>+90</option>
                </select>

              </div>
              <div className="mt-2  border-4 bg-red-200 flex-grow   ">
                <input type="text" name="phoneNumber" placeholder="Telefon Numarası" className=" 
              border-0 h-14 outline-none px-5 w-full
           "  value={phoneNumber} onChange={handleChangeInput} />
              </div>
            </div>
            <div className="mt-2  border-4 bg-red-700">
              <input type="text" name="name" placeholder="Ad Soyad" className="w-full
           border-0 h-14 outline-none px-5
           " value={name} onChange={handleChangeInput} />
            </div>
            <div className="mt-2  border-4 bg-red-700">
              <input type="email" name="email" placeholder="E-Posta" className="w-full
           border-0 h-14 outline-none px-5
           " value={email} onChange={handleChangeInput} />
            </div>


            <div className="mt-2  border-4 bg-red-700">
              <input type="password" name="password" placeholder="Şifre" className="w-full
           border-0 h-14 outline-none px-5 
           " autoComplete="off" value={password} onChange={handleChangeInput} />
            </div>

          </div>


          <div className="mt-2">
            <p className="text-sm">* Şifre en az 7 karakter olmalıdır ve özel karakter içermemelidir</p>
            <label className="inline-flex items-center mt-5">
              <input className="bg-purple-600 form-radio w-10 h-5 " type="checkbox" name="newsletter" value={newsletter}  
                onChange={handleChangeInput}  />
              <span className="ml-2">Getir'in bana özel kampanya,tanıtım ve fırsatlarından haberdar olmak istiyorum </span>
            </label>
            <div className="inline-flex mt-5">

              <input className="bg-purple-600 form-radio w-10 h-5 " type="radio" checked={kullanim} value="kullanim"
                onChange={handleKullanimInput} />
              <p className="ml-2">Kayıt olmakla Kullanım Koşulları'nı onaylamış olursunuz.</p>
            </div>
            <div className="inline-flex mt-5">
              <input className="bg-purple-600 form-radio w-10 h-5 " type="radio" checked={aydinlatma} value="aydinlatma"
                onChange={handleAydinlatmaInput} />
              <p className="ml-2">Kişisel verilerinize dair Aydınlatma Metni için tıklayınız</p>
            </div>


            <div className={error ? "inline-flex mt-5" : "hidden"}  >

              <p className="ml-2 text-red-500">*** {error ? error : ""} !</p>
            </div>


          </div>

          <div className="bg-purple-500 rounded-lg flex text-white h-10 mt-10 text-center  justify-center">
            <button type="submit" className="font-semibold m-2 ">Kayıt Ol</button>
          </div>

        </div>
      </form>
      <div className="bg-gray-100 rounded-lg m-2 flex text-gray-700
        font-semibold h-10 mt-10 text-center w-full  justify-center">
        <p className=" m-2 ">Getir'e üyeyseniz <a href="/" className="text-purple-500">Giriş yap</a> </p>
      </div>

    </div>
  )
}

export default SignUpForm
