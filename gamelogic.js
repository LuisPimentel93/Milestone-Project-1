
let playerText = document.getElementById("playerText"); 
let reStartBtn = document.getElementById("reStartBtn");
// changed the html collection to an array usin Array.from
let boxes = Array.from(document.getElementsByClassName("box"));




const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
// this varilable  is making sure that the boxes that a used can not be changed
let spaces = Array(9).fill(null);

console.log(spaces)
const startGame =() => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        // this is a If statement that changes from X text to O text when a box is clicked
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

reStartBtn.addEventListener('click', restart)

function restart(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
    })
    currentPlayer = X_TEXT
}
startGame()