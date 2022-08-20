document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposite = document.getElementById('your-deposite')
    const valueDepositeString = deposite.value;
    const valueDeposite =parseFloat(valueDepositeString); 
  
    valueDeposite.value='';
    if(isNaN(valueDeposite)){
      alert('Please Provide a number')
      return;
     }
 
  
    const currentTotal = document.getElementById('deposit-total');
    const previousCurrentTotalString = currentTotal.innerText;     
    const previousCurrent = parseFloat(previousCurrentTotalString);

    const newCurrentTotal = valueDeposite + previousCurrent;
    currentTotal.innerText = newCurrentTotal;
      // added with Total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotal.innerText;
    const balanceTotalElement = parseFloat(balanceTotalElementString);
    const wholeTotal = balanceTotalElement + newCurrentTotal;
    balanceTotal.innerText = wholeTotal;


  })
  
  
//   n///////////////////////////////////////////////next


document.getElementById('btn-withdraw').addEventListener('click', function(){
   const valueWithdraw = document.getElementById('withdraw-field');
   const withdrawString   = valueWithdraw.value;
   const withdrawTotal = parseFloat(withdrawString);

   withdrawTotal.value= '';
   if(isNaN(withdrawTotal)){
    alert('Please Provide a number')
    
    return;
   }
 

   const previousWithdraw = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = previousWithdraw.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
   
  
  
  
 
   const newWithdrawTotal = withdrawTotal + previousWithdrawTotal ;
   previousWithdraw.innerText= newWithdrawTotal;
   

  // minus with Total
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalElement = balanceTotal.innerText;
   const wholeTotal = balanceTotalElement -newWithdrawTotal;
   balanceTotal.innerText = wholeTotal;

   if( newWithdrawTotal>balanceTotalElement){
    alert('Baper bank e eto tk nai')
    return;
   }
   balanceTotalElement.value='';
})




// next step





