// red button


const redButton=document.getElementById('red');
redButton.onclick= clickRed;


function clickRed()
        {
    document.body.style.backgroundColor= 'rgb(247, 151, 142)';
}


// green button
function clickGreen()
        {
    document.body.style.backgroundColor= 'green';
}
// make blue
const blueButton=document.getElementById('blue');
blueButton.onclick=makeblue;

function makeblue(){
    makeblue.style.backgroundColor='blue';
}

// make yello 

const yellowButton=document.getElementById('yellow');
yellowButton.onclick=function(){
    document.body.style.backgroundColor='rgb(245, 255, 159)';
}

// make black addevenlistener

 const blackButton=document.getElementById('black');
 blackButton.addEventListener('click',makeblack)

 function makeblack(){

    document.body.style.backgroundColor='black';
 }