document.getElementById('btn-submit').addEventListener('click',function(){
  
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if(email === 'sontan@baap.com' && password === '1111'){
       window.location.href ='bank.html'; //problem
  }
  else{
      alert('Tui password vule gesos!! Toke ami teijjo sontan gosona korlam.')
  }
})







