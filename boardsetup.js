const body = document.body

//  functions

function createImg(imgSrc, imgAlt, imgId, divNum){
    
    const img = document.createElement('img')
    img.id =  imgId
    img.src = imgSrc
    img.alt = imgAlt
    divNum.append(img)
}

function element(num){
    let gameBoard =document.getElementById('#gameboard')
    const div = document.createElement('div')
    div.className = 'box'
    div.id = num
    div2.append(div)
}

//  this code creates my container div
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

 // this code 
const div2 = document.createElement('div')
    div2.id = 'gameboard'
    document.body.append(div2)

for(let i = 0; i < 9; i++){
        element(i)
    }
    





const div3 = document.createElement('div')
div3.id = 'avasTurn'
body.append(div3)

createImg("assets/Ava.JPG", "Picture of Ava", 'ava', div3)
createImg("assets/165520-bluey-dog-free-download-image.png", "Picture of Bluey", 'bluey' ,div3)


const avaName = document.createElement('h2')
avaName.innerText = 'Ava Marie'
avaName.id ='avatitle'
div3.append(avaName)


const div4 = document.createElement('div')
div4.id = 'arasTurn'
body.append(div4)
createImg("assets/Araceli.JPG", "Picture of Araceli",'ara', div4)
createImg("assets/165525-bluey-download-hd.png", "Picture of Bingo",'bingo', div4)

const div5 = document.createElement('div')
div5.id = 'audio'
div5.innerHTML = "A Bluey Themed TIC Tac Toe game with my kids in mind!"
body.append(div5)

const araName = document.createElement('h2')
araName.innerText = 'Araceli Rose'
araName.id ='aratitle'
div4.append(araName)


const audio = document.createElement('audio')
audio.src="assets/tomp3.cc - Bluey Theme Song  10 Minute Loop  Bluey.mp3" 
audio.controls = true
audio.autoplay = 
div5.append(audio)
const healers = document.createElement('img')
healers.src ="assets/185.webp"
healers.alt ="Picture of bluey and bingo "
healers.id = 'healers'
div.append(healers)

// function element(num){
//     let gameBoard =document.getElementById('#gameboard')
//     const div = document.createElement('div')
//     div.className = 'box'
//     div.id = num
//     div2.append(div)
// }
// for(let i = 0; i < 9; i++){
//     element(i)
// }


