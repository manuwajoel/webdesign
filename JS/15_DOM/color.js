const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');


console.log(red)
//An Alternative
//const anotherRed = document.getElementById('red');

//click event
red.addEventListener('click', changeBackgroundColor);
blue.addEventListener('click', changeBackgroundcolor2);
black.addEventListener('click', changeBackgroundcolor3);

function changeBackgroundColor(){
    console.log('clicked');
    document.body.style.backgroundColor = red.style.backgroundColor;
}




function changeBackgroundcolor2(){
    console.log('clicked');
    document.body.style.backgroundColor = blue.style.backgroundColor;
}
function changeBackgroundcolor3(){
    console.log('clicked');
    document.body.style.backgroundColor = black.style.backgroundColor;
    
}