document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposite = document.getElementById('your-deposite')
    const valueDepositeString = deposite.value;
    const valueDeposite =parseFloat(valueDepositeString); 
  
    const currentTotal = document.getElementById('deposit-total');
    const previousCurrentTotalString = currentTotal.innerText;     
    const previousCurrent = parseFloat(previousCurrentTotalString);

    const newCurrentTotal = valueDeposite + previousCurrent;
    currentTotal.innerText = newCurrentTotal;

  })
  
  
//   n///////////////////////////////////////////////next


document.getElementById('btn-withdraw').addEventListener('click', function(){
   const valueWithdraw = document.getElementById('withdraw-field');
   const withdrawString   = valueWithdraw.value;
   const withdrawTotal = parseFloat(withdrawString);

   const previousWithdraw = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = previousWithdraw.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   const newWithdrawTotal = withdrawTotal + previousWithdrawTotal ;
   previousWithdraw.innerText= newWithdrawTotal;


   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalElement = balanceTotal.innerText;
   const wholeTotal = balanceTotalElement -newWithdrawTotal;
   balanceTotal.innerText = wholeTotal;

   
})



// next step





