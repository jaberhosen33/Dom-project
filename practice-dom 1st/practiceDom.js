function makeGreen() {
    document.body.style.backgroundColor='green';
}


const buttonRed=document.getElementById('Red');
buttonRed.onclick=makeRed;

function makeRed()
{
    document.body.style.backgroundColor='red';
}

const buttonBlue=document.getElementById('blue');
buttonBlue.addEventListener('click',function(){
    document.button.style.backgroundColor='blue';
});


