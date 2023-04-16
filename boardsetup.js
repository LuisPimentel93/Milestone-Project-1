const body = document.body

const div = document.createElement('div')
    div.id = 'container'
const h1 = document.createElement('h1')
    h1.id = 'playerText'
    h1.innerHTML = 'Tic Tac Toe'
    div.append(h1)
const button = document.createElement('button')
    button.id = 'restartButton'
    button.innerHTML = 'Restart'
    div.append(button)
    document.body.append(div)

const div2 = document.createElement('div')
    div2.id = 'gameboard'
    document.body.append(div2)

const div3 = document.createElement('div')
div3.id = 'avasTurn'
body.append(div3)
const avaName = document.createElement('h2')
avaName.innerText = 'Ava Marie'
avaName.id ='avatitle'
div3.append(avaName)
const imgava = document.createElement('img')
imgava.src="assets/Ava.JPG"
imgava.id = 'ava'
div3.append(imgava)


const div4 = document.createElement('div')
div4.id = 'arasTurn'
body.append(div4)
const araName = document.createElement('h2')
araName.innerText = 'Araceli Rose'
araName.id ='aratitle'
div4.append(araName)
const imgara = document.createElement('img')
imgara.src="assets/AraceliJPG.JPG"
imgara.id = 'ara'
div4.append(imgara)


// const img = document.createElement('img')
// img.src="assets/Ava.JPG"
// img.id = 'playerTurn'
// div2.append(img)



function element(num){
    let gameBoard =document.getElementById('#gameboard')
    const div = document.createElement('div')
    div.className = 'box'
    div.id = num
    div2.append(div)
}
element(0)
element(1)
element(2)
element(3)
element(4)
element(5)
element(6)
element(7)
element(8)




// const div = document.createElement('div')
// div.className = 'container'
// const h1 = document.createElement('h1')
// h1.id = 'playerText'
// h1.innerHTML = 'Tic Tac Toe'
// div.append(h1)
// const button = document.createElement('button')
// button.id = 'reStartBtn'
// button.innerHTML = 'Restart'
// div.append(button)
// document.body.append(div)

// const div2 = document.createElement('div')
// div2.id = 'gameboard'
// document.body.append(div2)
// // box 1
// const div3 = document.createElement('div')
// div3.className ='box'
// div3.id = '0'
// div2.append(div3)
// // box 2
// const div4 = document.createElement('div')
// div4.className ='box'
// div4.id = '1'
// div2.append(div4)
// // box 3
// const div5 = document.createElement('div')
// div5.className ='box'
// div5.id = '2'
// div2.append(div5)


