// Vanilla JavaScript Dice Game

// pull all classes & IDs needed.
const messageEl = document.getElementById("message")
const player1ScoreboardEl = document.getElementById("player1Scoreboard")
const player2ScoreboardEl = document.getElementById("player2Scoreboard")
const player1DiceEl = document.getElementById("player1Dice")
const player2DiceEl = document.getElementById("player2Dice")
const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")

// initial game state variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

// hides Roll button and displays Reset button.
function showResetButton() {
    rollBtnEl.style.display = "none"
    resetBtnEl.style.display = "block"
}

// on rollBtnEl click run the following...
// roll random number between 1 and 6.
rollBtnEl.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    // if player1Turn is true...
    // add (+=) player1Score to the randomNumber roll
    // set player1Scoreboard's text to that new score
    // set the number in the 'dice block' to the latest random roll
    // remove the class '.active' (which is a shadow display look) from player1Dice
    // add that '.active' class to player2Dice
    // set the message (player turn) to "Player 2 Turn"
    // everything in the else{} condition is basically the opposite for player 2
    if (player1Turn) {
        player1Score += randomNumber
        player1ScoreboardEl.textContent = player1Score
        player1DiceEl.textContent = randomNumber
        player1DiceEl.classList.remove("active")
        player2DiceEl.classList.add("active")
        messageEl.textContent = "Player 2 Turn!"
    } else {
        player2Score += randomNumber
        player2ScoreboardEl.textContent = player2Score
        player2DiceEl.textContent = randomNumber
        player2DiceEl.classList.remove("active")
        player1DiceEl.classList.add("active")
        messageEl.textContent = "Player 1 Turn!"
    }

    // this conditional block basically just checks which player hit 20 first and displays the win message
    if (player1Score >= 20) {
        messageEl.textContent = "Player 1 wins! 🥳"
        showResetButton()
    } else if (player2Score >= 20) {
        messageEl.textContent = "Player 2 wins! 🎉"
        showResetButton()
    }

    // this sets playerTurn to equal 'not' playerTurn, or essentially re-declares it as the opposite of what it is currently set at.
    player1Turn = !player1Turn
})


// reset button event listener for reset() function
resetBtnEl.addEventListener("click", function () {
    reset()
})

// a function to reset the game to it's initial state
function reset() {
    messageEl.textContent = "Player 1 Turn"
    player1ScoreboardEl.textContent = 0
    player2ScoreboardEl.textContent = 0
    player1DiceEl.textContent = "-"
    player2DiceEl.textContent = "-"
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtnEl.style.display = "none"
    rollBtnEl.style.display = "block"
    player2DiceEl.classList.remove("active")
    player1DiceEl.classList.add("active")
}