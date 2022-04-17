
const DEFAULT_SIZE = 16;
const etch =document.querySelector(`#etch`);
const clear=document.querySelector(`#clear`);
let size = DEFAULT_SIZE;

gridSize(size);


function gridSize(size){   //defines grid size and lets user color it
    etch.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    etch.style.gridTemplateRows = `repeat(${size}, 1fr)` 
        for(x=0; x<(size*size);x++){
        const grid = document.createElement(`div`);
        grid.classList.add(`grid`);
        etch.appendChild(grid);
        grid.addEventListener(`mouseover`,() => {
        grid.setAttribute(`style`,`background-color: black;`)
})}}



clear.addEventListener(`click`,()=>{ //on click clears grid
    gridClear(size);
})


function gridClear(size){ // clears grid and make a ne wone
    while (etch.hasChildNodes()) {
        etch.removeChild(etch.firstChild);
      }
      gridSize(size);
}


