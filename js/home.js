
document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();
  

  // add money
 const addMoneyInput =  document.getElementById('input-add-money').value

//  get pin number
const pinNumberInput = document.getElementById('input-pin-number').value;
  console.log(pinNumberInput, addMoneyInput);
  

  // verify pin number
  // wrong way 
  if(pinNumberInput === '1234'){
    console.log('added money to your wallet');
    // get current balance
  const balance = document.getElementById('account-balance').innerText;
  
  // add money with input balance
  const addMoney = parseFloat(addMoneyInput);
  const addBalance = parseFloat(balance);
  const newbalance = addMoney + addBalance;
  console.log(newbalance);

  // update balance dom/ui
  document.getElementById('account-balance').innerText = newbalance; 
  
  
  
  } else{ 
    alert('failed to add mone, plz put validate pin number')
  }
  
})