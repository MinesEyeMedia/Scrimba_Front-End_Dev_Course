/* == Snake Game == */

//grab the HTML elements
const gridEl = document.querySelector(".grid")
const startBtnEL = document.querySelector(".start")
const scoreEl = document.querySelector("#score")

// create an empty squares array to hold our *squares* created in the createGrid() function.
let squares = []
// create currentSnake array which will be modified and will represent our snake.
let currentSnake = [2, 1, 0]
// snakeDirection controls the left/right value in +/- 1 block intervals.
let snakeDirection = 1
// width controls the up/down value in +/- 10 block intervals.
let width = 10

// function to create the 100 individual <div>'s.
function createGrid() {
    for (let i = 0; i < 100; i++) {
        // create an HTMLelement "div" and store in 'square' constant.
        const square = document.createElement("div")
        // add the class ".square" to each div created in the loop.
        square.classList.add("square")
        // we'll append the newly created <div>'s to the parent div.grid HTML element.
        gridEl.appendChild(square)
        // we push that new <div> (stored in the 'square' const) into our array called 'squares'.
        squares.push(square)
    }
}
// call the function.
createGrid()


// right now I'm fuzzy on exactly how this forEach loop works, I believe it's like:
// modifies the currentSnake array.
// forEach loop the indici... nfc atm.
currentSnake.forEach(index => squares[index].classList.add('snake'))

// function move() to alter the visual appearance of the snakes tail and head.
function move() {
    // removes the last element from our 'currentSnake' array.
    const tail = currentSnake.pop()
    // removes the styling from the last element in our 'currentSnake' array.
    squares[tail].classList.remove("snake")
    // adds a square in the direction we're heading.
    currentSnake.unshift(currentSnake[0] + snakeDirection)
    // adds the visual styling to the new square we're heading.
    squares[currentSnake[0]].classList.add("snake")
}
// call the move() function.
move()

// this timerID variable holds the setInterval .window method that controls how often a function is called.
// in this case we pass through our 'move()' function from above and set it at a 1000ms (1s) interval call.
// this means that our snake body visually appears to move once per second, at initialization.
let timerID = setInterval(move, 1000)

// the control function that will be tied to an eventListener("keyup").
// basically says, on right cursor snakeDirection = 1, on left - 1, on up '+width' (which has a value of 10) and on down '-width' (value of 10).
// the reason we have to do this is because the individual squares generated in the createGrid() function assign numbers to squares from 1 - 100. If we want the snake to appear to move right, we have to add +1 to the current square. So if position was square66, +1 becomes square67. The same in reverse, 66 becomes 65 on left press. However, when we want to move up or down, we are moving +/- 10 squares at a time. So if the current snake head was on square85 and we moved up, we'd need to move the new 'head' space to square75, and so forth for going down. The new head position would move from square85 to square95 to visually appear that the head is now in that square/block.
function control(e) {
    if (e.key === "ArrowRight") {
        snakeDirection = 1
        console.log("Right")
    } else if (e.key === "ArrowUp") {
        snakeDirection = -width
        console.log("Up")
    } else if (e.key === "ArrowLeft") {
        snakeDirection = -1
        console.log("Left")
    } else if (e.key === "ArrowDown") {
        snakeDirection = +width
        console.log("Down")
    }
}

// simply tying the 'control()' function to the 'keyup' event listener.
document.addEventListener("keyup", control)