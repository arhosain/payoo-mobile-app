
document.getElementById('add-money-btn').addEventListener("click", function () {

  // 1. get the bank and validate 
  const bankName = getValueFromInput('select-bank');
  console.log(bankName)
  if (bankName === "Select a bank") {
    alert("please select a bank");
    return;
  }
  // 2. get the account number and validate 
  const accountNumber = getValueFromInput('account-number');
  if (accountNumber.length !== 11) {
    alert("Invalid Account Number")
    return;
  }
  // 3. get the amount  

  const ammount = getValueFromInput('add-amount');
  const newBalance = getBalance() + Number(ammount); 

  // 4. verify pin 
  const pin = getValueFromInput('add-pin');
  if (pin === '1234') {
    // alert('add amount successful');
    alert(`add money success from ${bankName}  to ${new Date()}`)
    setBalance(newBalance);
  } else {
    alert('add amount failed');
    return;
  }
});