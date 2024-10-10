document.getElementById('btn-cash-out').addEventListener('click', function(event){
event.preventDefault();
const inputCashOut = document.getElementById('input-cash-out').value;
const inputPin = document.getElementById('input-cash-out-pin').value;

if(inputPin === '1234'){
  const balance = document.getElementById('account-balance').innerText;
const inputCash = parseFloat(inputCashOut);
const presBalance = parseFloat(balance);
currentBalance = presBalance - inputCash;

document.getElementById('account-balance').innerText = currentBalance;


} else{
  alert('wrong pin , plz try again')
}

})