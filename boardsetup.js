const body = document.body

const div = document.createElement('div')
    div.className = 'winning-message.show'
    
    div.id = "winningMessage"
let winMessage = document.getElementById('#winningMessage')
    const div3 = document.createElement('div')
    div3.id = "dataWinningMessage"
    div.append(div3)
const button = document.createElement('button')
    button.id = 'restartButton'
    button.innerHTML = 'Restart'
    div.append(button)
    document.body.append(div)

const div2 = document.createElement('div')
    div2.id = 'gameboard'
    document.body.append(div2)

function element(num){
    let gameBoard =document.getElementById('#gamebaord')
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
// // box 4
// const div6 = document.createElement('div')
// div6.className ='box'
// div6.id = '3'
// div2.append(div6)
// // box 5
// const div7 = document.createElement('div')
// div7.className ='box'
// div7.id = '4'
// div2.append(div7)
// // box 6
// const div8 = document.createElement('div')
// div8.className ='box'
// div8.id = '5'
// div2.append(div8)
// // box 7
// const div9 = document.createElement('div')
// div9.className ='box'
// div9.id = '6'
// div2.append(div9)
// // box 8
// const div10 = document.createElement('div')
// div10.className ='box'
// div10.id = '7'
// div2.append(div10)
// // box 9
// const div11 = document.createElement('div')
// div11.className ='box'
// div11.id = '8'
// div2.append(div11)

   

    
   
    
    



 


// document.getElementById("container")
//  innerHTML = <h1>"Tic Tac Toe"</h1>
//  document.body.append(container)

