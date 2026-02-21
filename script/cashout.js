
document.getElementById('cashout-btn').addEventListener('click', function () {
  //  1. get the agent number & validate
  const agentNumber = getValueFromInput('agent-number');

  if (agentNumber.length !== 11) {
    alert('Invalid Agent Number');
    return;
  }
  console.log(agentNumber);
  //  2. get the amount , validate, convert to
  const cashoutAmount = getValueFromInput('cashout-amount');
  console.log(cashoutAmount);
  //  3. get the current Balance . validate, convert to number

  const currentBalance  = getBalance()
  //  4. calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }

  //  5. get the pin and verify

  const pin = getValueFromInput('input-pin');
  console.log(pin)
  if (pin === '1234') {
    alert('cashout successful');
    setBalance(newBalance);

    // addTransaction
    // 1- history container ke niye ashbo

    const history = document.getElementById('history-container');
    // 2.create new div
    const newHistory = document.createElement('div');
    // 3. add innerHTML in new div
    newHistory.innerHTML = `
     <div class="transaction-card p-5 bg-yellow-50">
 
     cashout ${cashoutAmount} taka,agent-no ${agentNumber} at ${new Date()}
  </div>
    `;
    // 4. newDiv add and append in history container

    history.append(newHistory);
    
  }
  else {
    alert("invalid pin");
    return;
  }
})



// document.getElementById('cashout-btn').addEventListener('click', function () {

//   //  1. get the agent number & validate
//   const agentNumberInput = document.getElementById('agent-number');
//   const agentNumber = agentNumberInput.value;
//   if (agentNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return; 
//   }
//   console.log(agentNumber)
//   //  2. get the amount , validate, convert to number

//   const cashoutAmountInput = document.getElementById('cashout-amount');
//   const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount)

//   //  3. get the current Balance . validate, convert to number

//   const balanceElement = document.getElementById('balance');
//   const balance = balanceElement.innerText; 
//   console.log(balance)

//   //  4. calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
  
  
//   if (newBalance < 0) {
//     alert("Invalid Amount")
//     return; 
//   }
//   console.log("new balance",newBalance);
//   //  5. get the pin and verify
//   const cashoutPinInput = document.getElementById('input-pin');
//   const pin = cashoutPinInput.value; 

//   if (pin === "1234") {
//     //  5-1. true :: show an alert > set Balance
//     // const currentAmountElement = balance.innerText;
//     alert("cashout successful"); 
//     console.log(newBalance)
//     balanceElement.innerText = newBalance; 
//   }
//   else {
//     alert("Invalid Pin"); 
//     return; 
//   }
//   //  5-2. true ::show an error alert > return
// });

// 01900000000

