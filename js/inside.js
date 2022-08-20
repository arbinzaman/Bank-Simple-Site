document.getElementById('btn-deposite').addEventListener('click',function(){
    const deposite = document.getElementById('your-deposite')
    const valueDeposite = deposite.value;
  
    const currentTotal = document.getElementById('deposite-field');
    const newCurrentTotal = currentTotal.innerText;     
    currentTotal.innerText = valueDeposite;

  })
  
  
  