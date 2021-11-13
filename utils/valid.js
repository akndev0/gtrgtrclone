const valid = (name, email, password, phoneNumber,newsletter) => {

  
  if(!name || !email || !password || !phoneNumber || !newsletter)
  return 'Please add all fields.'

  if(!validateEmail(email))
  return 'Invalid emails.'

  if(password.length < 6)
  return 'Password must be at least 6 characters.'
  
  if(phoneNumber.length != 7)
  return 'Please type valid Phone Number.'

}


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid