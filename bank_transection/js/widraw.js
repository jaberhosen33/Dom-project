document.getElementById('button-widraw').addEventListener('click',function(){

    const inputwidraw=document.getElementById('widraw-field');
    let widrawtfield=document.getElementById('widraw');
//    inputdeposit.value
const currentwidraw=parseFloat( inputwidraw.value);
const currentnewBalance=newBalance-currentwidraw;
widrawtfield.innerText=currentwidraw;
balancefield.innerText=currentnewBalance;
inputwidraw.value='';


})
