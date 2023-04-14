// // This is how I added CSS using JS

// // h1 CSS
// const header = document.querySelector("h1");
// header.style.fontSize = "60px";
// header.style.textTransform = "uppercase";


// container CSS
const gameStyle = document.querySelector("#container")
gameStyle.style.justifyContent = "center"
gameStyle.style.alignContent = "center"
gameStyle.style.display = "grid"
gameStyle.style.padding = "40px"
gameStyle.style.backgroundColor = "blue"

gameStyle.style.flexDirection = "column"


// // gameboard CSS
const boardLayout = document.querySelector("#gameboard")
boardLayout.style.width = "100vw";
boardLayout.style.height = "100vh"
boardLayout.style.display = "grid";
boardLayout.style.justifyContent = "center"
boardLayout.style.alignContent = "center"
boardLayout.style.gridTemplateColumns = "repeat(3, auto)"

const h1Style = document.querySelector("#playerText")
h1Style.style.fontSize = "54px"
h1Style.style.justifyContent = "center"
h1Style.style.alignContent = "center"
h1Style.style.fontFamily= "cursive"

// // button 

const reset = document.getElementById("restartButton")

reset.style.borderRadius = "10px";
reset.style.backgroundColor = "gold";
reset.style.fontSize = "18px";
reset.style.transition = "200ms transform";
reset.style.fontWeight = "600";
reset.style.cursor ="pointer"
reset.style.transform ="translateY(-2px)"









