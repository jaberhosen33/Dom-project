

function clickmethod(){
    const clickshow=document.getElementById('wellcomeText');
    clickshow.innerText='WellCome my Event';
}

// explore Hedding
const exploreButton=document.getElementById('explore');
exploreButton.onclick=exploringMe;
function exploringMe(){
    const makeExplore=document.getElementById('wellcomeText');
    makeExplore.innerText='Hi! I am Html Headding.';
}


// input value 

document.getElementById('update').addEventListener('click',function(){
    const inputText= document.getElementById('input'); 
    const showText=document.getElementById('wellcomeText');

showText.innerText=inputText.value;
inputText.value=''; 

})