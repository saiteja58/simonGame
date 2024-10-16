let level=0;
let randomSequence=[];
let userSequence=[];
const match=["green","red","yellow","blue"]
let heading=document.querySelector("h1");
let buttons=document.querySelectorAll(".btn")
let gameStarted=false;
document.addEventListener("keydown",()=>{
    if(!gameStarted){
        randomGenerator()
        heading.textContent=`Level ${level}`
        gameStarted=true;
    }
})


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        // this.style.backgroundColor="white"
       userSequence.push(buttons[i].id)
       playSound(buttons[i].id)
        buttonPress(buttons[i])
        checkAnswer(userSequence.length-1)
    })
}

















function randomGenerator(){
    userSequence=[];
    level++;
    heading.textContent=`Level ${level}`
    let randomNumber=Math.floor(Math.random()*4)
  randomSequence.push(match[randomNumber])
  console.log(randomSequence)
//   buttonPress(buttons[randomNumber])
  $(`#${match[randomNumber]}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(buttons[randomNumber].id)
  
  

 }
  

  
  
  


function checkAnswer(currentNum){
    if(randomSequence[currentNum]==userSequence[currentNum]){
        if(randomSequence.length==userSequence.length){
            setTimeout(() => {
                randomGenerator()
                console.log("lets move to next level")
            }, 1000);
        }
        console.log("go on you are correct")
    }
    else{
        console.log("stop idiot its wrong")
        $("body").addClass("game-over")
        playSound("wrong")
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        startOver()
    }
 

}


function buttonPress(btn){
btn.classList.add("pressed");
setTimeout(() => {
    btn.classList.remove("pressed");
    
}, 400);
}

function startOver(){
    userSequence=[]
    randomSequence=[]
    level=0;
    gameStarted=false;
    heading.textContent="OOPs its wrong try again, Press any key to start"
}

function playSound(songName){
var audio=new Audio(`/sounds/${songName}.mp3`);
audio.play()
}