const startBtn = document.getElementById("startBtn");
const  scoreValue = document.getElementById("score");
const  timer = document.getElementById("timer");
const  board = document.getElementById("board");
const holes = document.querySelectorAll(".hole"); //Module1
const result = document.getElementById("result")

let currScore = 0;
let gameRun = false
let currTime= 30;
let currMole;//Module2

function startGame(){
   currTime = 30;
   currScore = 0
   gameRun = true;
   result.textContent= "";
   timer.textContent=currTime;
   scoreValue.textContent=currScore;
   startTimer()
   showMole()
   
   

   console.log("Game starting"); 
}

startBtn.addEventListener("click",() => {
   startGame();
})//Module3

function getRandomHole(){
    let randomIndex = Math.floor(Math.random() * holes.length);
    let randomHole = holes[randomIndex]
    return randomHole
}

//Module 4

function showMole(){
    currMole = getRandomHole()
    currMole.classList.add('mole')
    hideMole()
    
} //Module 5

function hideMole(){
    setTimeout(()=>{
        if(currMole){
        currMole.classList.remove('mole')
        }
        if(gameRun){
            showMole()
        }
    },1000)
} //module 6 

function startTimer(){
    let startInterval = setInterval(()=>{
          currTime--;
          timer.textContent = currTime;
     if(currTime === 0){
        clearInterval(startInterval)
        gameRun = false
        result.textContent = `Final Score : ${currScore}, Game is Over`

    }
    },1000)
}

function handleBoardClick(event){
    if(!gameRun) return
     let clickedHole = event.target.closest(".hole")

     if(!clickedHole) return 

     if(clickedHole === currMole){
        currScore++;
        scoreValue.textContent = currScore
         currMole.classList.remove('mole')
         currMole = null
     }
  
}
 board.addEventListener("click",handleBoardClick)