

  var balancefield=document.getElementById('Balance');
  var currentBalance=parseFloat(balancefield.innerText);

 const dipositButton=document.getElementById('button-deposit').addEventListener('click',function(){

    const inputdeposit=document.getElementById('deposit-field');
    const totalDiposit=document.getElementById('deposit'); //totaldeposit 
//    inputdeposit.value
const depositfield=inputdeposit.value;

// totalDiposit.innerText=depositfield;
inputdeposit.value='';
const currentDiposit=parseFloat (totalDiposit.innerText);
// console.log(currentDiposit);
 const newdeposit=parseFloat(depositfield);
//  console.log(newdeposit);
const newtotalDeposit=currentDiposit+newdeposit;
// console.log(newtotalDeposit);
totalDiposit.innerText=newtotalDeposit;




const newBalance=currentBalance+newdeposit;
balancefield.innerText=newBalance;




})


document.getElementById('button-widraw').addEventListener('click',function(){

    const inputwidraw=document.getElementById('widraw-field');
    let widrawtfield=document.getElementById('widraw');
//    inputdeposit.value
const currentwidraw=parseFloat( inputwidraw.value);

const currentnewBalance=currentBalance-currentwidraw;
widrawtfield.innerText=currentwidraw;
balancefield.innerText=currentnewBalance;
inputwidraw.value='';


})
