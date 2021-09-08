/* == Snake Game == */

//grab the main .grid
const gridEl = document.querySelector(".grid")
const startBtnEL = document.querySelector(".start")
const scoreEl = document.querySelector("#score")
let squares = []

function createGrid() {
    for (let i = 0; i < 99; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        gridEl.appendChild(square)
        squares.push(square)
    }
}

createGrid()
