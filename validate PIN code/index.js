// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  const myRe = /[0-9]/g;
  const replaceAllNumber = pin.replace(myRe, "");

  //return true or false
  if (pin.length == 4 || pin.length == 6) {
    if (!replaceAllNumber) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }
  console.log(false);

  return false;
}

// validatePIN("1234")  -->  true
// validatePIN("023451") //  -->  true

validatePIN("12.0");
//  -->  false
