/* == Snake Game == */

//grab the HTML elements
const gridEl = document.querySelector(".grid")
const startBtnEL = document.querySelector(".start")
const scoreEl = document.querySelector("#score")

// create an empty squares array to hold our *squares* created in the createGrid() function.
let squares = []
// the currentSnake array represents our snake, it's head position, tail and length.
let currentSnake = [2, 1, 0]
// snakeDirection controls the left/right value in +/- 1 block intervals.
let snakeDirection = 1
// width controls the up/down value in +/- 10 block intervals.
const width = 10
// the appleIndex variable holds the random generated number for a new apple position.
let appleIndex = 0
// set an initial score state to be changed on apple consumption.
let score = 0
// the intervalTime var has an init of 1000(ms) and will be used in our snake speed part of the move() function that will update when an apple is eaten.
let intervalTime = 1000
//
let speed = 0.9
//
let timerID = 0


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

function startGame() {
    // remove the snake
    currentSnake.forEach(index => squares[index].classList.remove("snake"))
    // remove the apple
    squares[appleIndex].classList.remove("apple")
    // clear
    clearInterval(timerID)
    // reset currentSnake array numbers
    currentSnake = [2, 1, 0]
    // reset snakeDirection
    snakeDirection = 1
    // reset score in variable
    score = 0
    // readd new score to browser window
    scoreEl.textContent = score
    //
    intervalTime = 1000
    // generate a new random apple seed
    generateApple()
    // readd the class of snake to our new 'start' snake
    currentSnake.forEach(index => squares[index].classList.add("snake"))
    //
    timerID = setInterval(move, intervalTime)



    // this timerID variable holds the setInterval .window method that controls how often a function is called.
    // in this case we pass through our 'move()' function from above and set it at a 1000ms (1s) interval call.
    // this means that our snake body visually appears to move once per second, at initialization.
    timerID = setInterval(move, intervalTime)
}


// function move() to alter the visual appearance of the snakes tail and head.
function move() {
    // here we'll run a conditional (if statement) to see if the snake head has hit the top, bottom, left or right wall, OR if it's 'driven' into itself.
    if (
        // has snake hit bottom?
        (currentSnake[0] + width >= width * width && snakeDirection === width) ||
        // has snake hit right?
        (currentSnake[0] % width === width - 1 && snakeDirection === 1) ||
        // has snake hit left?
        (currentSnake[0] % width === 0 && snakeDirection === -1) ||
        // has snake hit top?
        (currentSnake[0] - width < 0 && snakeDirection === -width) ||
        // has snake driven into itself?
        squares[currentSnake[0] + snakeDirection].classList.contains("snake")
    )
        return clearInterval(timerID)





    // removes the last element from our 'currentSnake' array.
    const tail = currentSnake.pop()
    // removes the styling from the last element in our 'currentSnake' array.
    squares[tail].classList.remove("snake")
    // adds a square in the direction we're heading.
    currentSnake.unshift(currentSnake[0] + snakeDirection)


    // deal with snake-head eating the apple.
    // looks at the first index position of 'currentSnake' within the squares array, and if that position (on the squares grid) already has a class list of .apple, then the statement is true and execute the following code.
    if (squares[currentSnake[0]].classList.contains("apple")) {
        // then remove the class .apple from the same position as the above.
        squares[currentSnake[0]].classList.remove("apple")
        // grow the snake by adding the class of .snake to the position of the 'tail' by referencing the 'tail' constant as defined above. Right now, we're just adding the class name .snake AT the position of the tail, but it is not 'attached' or following the snake as we've not yet added it to the actual 'currentSnake' array.
        squares[tail].classList.add("snake")
        // using the push() method add the tail onto the currentSnake array.
        currentSnake.push(tail)
        // generate a new apple by simply invoking the generateApple() function.
        generateApple()
        // very simply we use the increment operator to add +1 to score.
        score++
        // change the value of scrore.
        scoreEl.textContent = score

        //
        clearInterval(timerID)
        // speed up snake movement.
        intervalTime = intervalTime * speed
        // 
        timerID = setInterval(move, intervalTime)


    }






    // adds the visual styling to the new square we're heading.
    squares[currentSnake[0]].classList.add("snake")
}



// TODO: The while loop loops through a block of code as long as a specified condition is true.

// TODO: The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// this function generates a random apple and places it somewhere in the 'grid'.
function generateApple() {
    // doWhile loop - do 'something, while a specific condition is met.
    do {
        // generate a random number from 0 to X (X = dynamic number from the 'squares' array with squares.length method, which in this case is 99) We also have a Math.floor() method to reduce it to the lowest whole number (0-99)... WHILE - ADD NOTE HERE.
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))

    // adds the class of .apple to the grid (squares) in the array position of appleIndex.
    squares[appleIndex].classList.add("apple")
}
generateApple()


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
document.addEventListener("keydown", control)

//
startBtnEL.addEventListener("click", startGame)