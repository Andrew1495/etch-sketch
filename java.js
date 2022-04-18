
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = `#333333`;
const DEFAULT_MODE = `normal`;

let currentMode = DEFAULT_MODE;
let size = DEFAULT_SIZE;

const etch =document.querySelector(`#etch`);
const clear=document.querySelector(`#clear`);
const eraseButton=document.querySelector(`#erase`);
const rainbowButton=document.querySelector(`#rainbow`);
const normalColorButton=document.querySelector(`#normal`);
const slider=document.querySelector(`#slider`);
const newGrid =document.querySelector(`#change`);





gridSize(size);

let mouseDown = false;
document.body.onmousedown = () =>(mouseDown=true);
document.body.onmouseup = () =>(mouseDown=false);



clear.addEventListener(`click`,()=>{ //on click clears grid
    gridClear(size);
})
normalColorButton.addEventListener(`click`,()=>{
    currentMode = `normal`
    activeButton()
    changeColor()
})



eraseButton.addEventListener(`click`,()=>{
    currentMode = `erase`
    activeButton()
    changeColor()
})


rainbowButton.addEventListener(`click`,()=>{
    currentMode = `rainbow`
    activeButton()
    changeColor()
})



slider.addEventListener(`change`,()=>{
console.log(slider.value);
size = slider.value;
const sizeVal = document.querySelector(`#sizeval`);
sizeVal.textContent = size;

})


newGrid.addEventListener(`click`,()=>{
    gridDelete(size)
    gridSize(size);
})


function gridSize(size){   //defines grid size and lets user color it
    etch.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    etch.style.gridTemplateRows = `repeat(${size}, 1fr)` 
        for(x=0; x<(size*size);x++){
        const grid = document.createElement(`div`);
        grid.classList.add(`grid`);
        grid.addEventListener(`mouseover`,changeColor)
        grid.addEventListener(`mousedown`,changeColor)
         etch.appendChild(grid);
        }
}




function gridClear(size){ // clears grid and make a new one
    while (etch.hasChildNodes()) {
        etch.removeChild(etch.firstChild);
      }
      gridSize(size);
}

function gridDelete(size){
while (etch.hasChildNodes()) {
    etch.removeChild(etch.firstChild);
  }
}


function changeColor(){
    const grid= document.querySelector(`#grid`);
    if (mouseDown !== true)
        return;
    else if(currentMode === `erase`){
    this.style.backgroundColor = `white`;
    }
    else if(currentMode === `normal`){
    this.style.backgroundColor = `black`;
    }
    else if (currentMode === `rainbow`){
        let randomColor = Math.floor(Math.random()*1677215).toString(16);
    this.style.backgroundColor ="#" + randomColor;
    }
}

function activeButton(){
    if(currentMode === `normal`){
        normalColorButton.classList.remove(`active`);
    }else if (currentMode === `erase`){
        eraseButton.classList.remove(`active`);
    }else if (currentMode=== `rainbow`){
        rainbowButton.classList.remove(`active`);
    }
    if(currentMode === `normal`){
        normalColorButton.classList.add(`active`)
    }else if (currentMode === `erase`){
        eraseButton.classList.add(`active`);
    }else if (currentMode=== `rainbow`){
        rainbowButton.classList.add(`active`);
    }
}



