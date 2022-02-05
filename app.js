const button = document.querySelector('button')
const box_container = document.querySelector('.box-container')
const boxes = document.querySelectorAll('.box')
const changing_color = document.querySelector('.newColor')
const heading = document.createElement('h2')



let randomBox;
let randomColor;
let colorNw;
let timeOut; 

function randomTimeOut(){
    timeOut = Math.floor(Math.random() * 1000 + 2000);
}


function getRandomBox(){
    const a = Math.floor(Math.random() * boxes.length)
    randomBox = boxes[a]
}

button.addEventListener('click', () => {
    randomTimeInterval()
    getRandomBox()
    getRandomColor()
    newgenerate()
    randomTimeOut()
    
    boxes.forEach(box => {
        while (box.hasChildNodes()) {  
            box.removeChild(box.firstChild);
          }
    })


    setTimeout(() => {

        clearInterval(colorNw)
        boxes.forEach(box => box.style.backgroundColor = 'rgb(218, 218, 218)')
        randomBox.style.backgroundColor = randomColor
        heading.innerText = randomColor
        randomBox.appendChild(heading)
        console.log(timeOut)

    }, timeOut)
    

    
})

function getRandomColor () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    randomColor = `rgb(${r}, ${g}, ${b})`
    
}

let timeInterval;

function randomTimeInterval (){
    timeInterval = Math.floor(Math.random() * 100 + 120)
}

function newgenerate(){
let i = 0;

    colorNw = setInterval(() => {

        boxes.forEach(box => box.style.backgroundColor = 'rgb(218, 218, 218)')
        getRandomColor()
        if(i > boxes.length - 1){
            boxes[0].style.backgroundColor = randomColor
            i = 0;
        } else {
            boxes[i].style.backgroundColor = randomColor
        }
    
        i++
        console.log(timeInterval)
    }, timeInterval)
}

