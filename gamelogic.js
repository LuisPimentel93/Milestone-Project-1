let playerText = document.getElementById("playerText"); 
let reStartBtn = document.getElementById("restartButton");
// changed the html collection to an array usin Array.from
let boxes = Array.from(document.getElementsByClassName("box")); 
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
// let drawIndicator = getComputedStyle(document.body).getPropertyValue('--draw-block')
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]

]
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
// this varilable  is making sure that the boxes that a used can not be changed
let spaces = Array(9).fill(null);
// let count_plays = 0


const startGame =() => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id] ){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        // this will change the Tic Tac Toe message to either X or O has won
        if(playerHasWon() !==false){

             playerText.innerText = `${currentPlayer} Has Won!`
            let winning_blocks = playerHasWon()
            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }
      
        // this is a If statement that changes from X text to O text when a box is clicked
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}



// this is how  the game check to if there is an X or an O for each position in the array of the in th winning combos
function playerHasWon(){
    for ( const condition of winningCombos){
        let [a, b, c] = condition

            if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
                
                return [a, b, c]
            }
    }
    return false
}

// code below is for the restart button and set the X_TEXT to be the default
reStartBtn.addEventListener('click', restart)

function restart(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}
startGame()