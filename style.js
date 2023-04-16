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
gameStyle.style.flexDirection = "column"
gameStyle.style.backgroundColor = '#FFFDD0'
gameStyle.style.gridRow = "1"
gameStyle.style.gridColumn = "1/4"

// // gameboard CSS
const boardLayout = document.querySelector("#gameboard")
boardLayout.style.display = "grid";
boardLayout.style.justifyContent = "center"
boardLayout.style.alignContent = "center"
boardLayout.style.gridTemplateColumns = "repeat(3, auto)"
boardLayout.style.backgroundColor = "lightpink"
boardLayout.style.gridRow = "2"
boardLayout.style.gridColumn = "2"

const h1Style = document.querySelector("#playerText")
h1Style.style.fontSize = "54px"
h1Style.style.justifyContent = "center"
h1Style.style.alignContent = "center"
h1Style.style.fontFamily= "cursive"
h1Style.style.color= "lightblue"

// // button 

const reset = document.getElementById("restartButton")

reset.style.borderRadius = "10px";
reset.style.backgroundColor = "gold";
reset.style.fontSize = "18px";
reset.style.transition = "200ms transform";
reset.style.fontWeight = "600";
reset.style.cursor ="pointer"
reset.style.transform ="translateY(-2px)"
reset.style.backgroundColor = 'lightblue'
reset.style.color = 'orange'
reset.style.gridRow = '2'

const gameFooter = document.querySelector("#audio")
gameFooter.style.justifyContent = "center"
gameFooter.style.alignContent = "center"
gameFooter.style.display = "grid"
gameFooter.style.backgroundColor = '#FFFDD0'
gameFooter.style.gridRow = "3"
gameFooter.style.gridColumn = "1/4"
gameFooter.style.fontSize ='36px'












