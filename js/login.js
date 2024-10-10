// console.log('add push');
document.getElementById('login-button').addEventListener('click', function(event){
  event.preventDefault(); //prevent reloading browser- vejal to beginners
  // console.log('button clicked');
 const phoneNumber =  document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value; 

 console.log(pinNumber, phoneNumber);
 
 if(phoneNumber === '5' && pinNumber === '1234'){
  console.log(' you are logged in');
  // window.location.href = '/homepage.html'
  window.location.href = '/homepage.html'
  
 } else{
  alert('wrong phone number or passward')
 }
 
  
})
