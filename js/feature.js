// show cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
  document.getElementById('cash-out-form').classList.remove('hidden');

  // hide the add money form
  document.getElementById('add-money-form').classList.add('hidden')
  
})
// show add money form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
  document.getElementById('add-money-form').classList.remove('hidden');

  // hide the add money form
  document.getElementById('cash-out-form').classList.add('hidden')
  
})