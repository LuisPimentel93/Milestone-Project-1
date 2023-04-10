// This is how I added CSS using JS

// h1 CSS
const header = document.querySelector("h1");
header.style.fontSize = "60px";
header.style.textTransform = "uppercase";


// container CSS
const gameStyle = document.querySelector(".container")
gameStyle.style.padding = "10em";
gameStyle.style.height = "100px";
gameStyle.style.display = "flex";
gameStyle.style.justiyContent = "center";
gameStyle.style.alignItems = "center";
gameStyle.style.flexDirection = " column";
gameStyle.style.backgroundColor = "black";

// gameboard CSS
const boardLayout = document.querySelector("#gameboard")
boardLayout.style.width = "450px";
boardLayout.style.display = "flex";
boardLayout.style.flexWrap = "wrap";
boardLayout.style.marginTop = "40px";
boardLayout.style.justiyContent = "center";
boardLayout.style.alignItems = "center";
boardLayout.style.textAlign = "center";
boardLayout.style.marginBottom = "40px";
boardLayout.style.marginLeft = "27%";
boardLayout.style.marginRight = "27%";

// button 

const reset = document.getElementById("reStartBtn")
reset.style.padding = " 10px 20px";
reset.style.borderRadius = "10px";
reset.style.backgroundColor = "gold";
reset.style.fontSize = "18px";
reset.style.transition = "200ms transform";
reset.style.fontWeight = "600";
reset.style.cursor ="pointer"
reset.style.transform ="translateY(-2px)"









