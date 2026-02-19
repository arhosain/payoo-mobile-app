console.log("login page function connected")

document.getElementById('login-btn').addEventListener('click', function () {
  const numberInput = document.getElementById('input-number'); 
  const contactNumber = numberInput.value;
  console.log(contactNumber)

  const inputPin  = document.getElementById('input-pin'); 
  const pinNumber = inputPin.value;
  console.log(pinNumber)

  if (contactNumber === "01900000000" && pinNumber === "1234") {
  alert("login successful")
}
  else {
    alert("login failed")
    return; 
  }

  /**
   points
   1. get the mobile number 
   2. get the pin
   3. match pin and mobile number 
   3-1. true:::>> alert > homepage
   3-1. true:::>> alert > return
  
  */
})