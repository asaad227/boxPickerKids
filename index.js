const btn1 = document.querySelector(".box1");
const btn2 = document.querySelector(".box2");
const btn3 = document.querySelector(".box3");
const btn4 = document.querySelector(".box4");
const btn5 = document.querySelector(".box5");
const btn7 = document.querySelector(".box7");
const btn6 = document.querySelector(".box6");
const btn8 = document.querySelector(".box8");
const btn9 = document.querySelector(".box9");
const btn10 = document.querySelector(".box10");
const btn11 = document.querySelector(".box11");
const btn12 = document.querySelector(".box12");
const score = document.querySelector(".total");
const level = document.querySelector(".round");
const mainDiv = document.querySelector(".mainDiv");
const mainDiv2 = document.querySelector(".mainDiv2");
const divBox = document.querySelector(".divBox");
const play = document.querySelector(".play");
const start = document.querySelector(".start")
const remainingBox = document.querySelector(".remainingBox");
const scoreDisplay = document.querySelector(".scoring");
const abra = document.querySelector(".abra")
const reload = document.querySelector(".reload");
const endBtn = document.querySelector(".endBtn");
const abra1 = document.querySelector(".abra1");
const start1 = document.querySelector(".start1")
// create box pick option for the player
var pickBox = 7;
let result= []
var round = [];
var count = []
// function start(){
//     const total = result.reduce((acc, curr)=> acc + curr, 0);
//     const game = round.length + 1
//     score.innerHTML = `Score: ${total}`;
//     level.innerHTML = `Level: ${game}`
//     //change class name so change display according to page need
//    mainDiv.className = "mainDiv1"
//    divBox.style.display = "initial";
//    play.style.display = "none";
//    abra.className = "abra1"
   
// }

// play.addEventListener("click", start)

document.addEventListener("click", function(event){
      if(event.target === play){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-game-click-1114.wav"
        audio.play()
        const total = result.reduce((acc, curr)=> acc + curr, 0);
        const game = round.length + 1;
        score.innerHTML = `Score: ${total}`;
        level.innerHTML = `Level: ${game}`;
        //change class name so change display according to page need
       mainDiv.className = "mainDiv1";
       divBox.style.display = "initial";
       abra.className = "abra1";
       start.className = "start1";
      }

      if(event.target === reload){
        console.log("i have clicked")
       location.reload()
    
    }
    //keep pick box counter on display 
    let remender = pickBox - count.length;
    remainingBox.innerHTML = `Pick left: ${remender }`
    const random = Math.floor(Math.random()*4);
    const randomBox = Math.floor(Math.random()*4)
    if(count.length === pickBox){
       //nested codition to check round compeleted or not
        if(round.length > 0){
            level2()
        }else{
        winner()
        resetTable()
        }
        
    }else{
        if(event.target === btn1 ){
            //if button click it will update counter and pickbox
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                // if this condition meet it will update result score and button class
                result.push(10)
                btn1.className = "boxG";
                //disabled as soon as player this button, so no second pick
                btn1.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn1.className = "boxP";
                btn1.disabled = true;
            }
           
        }
      
        if(event.target === btn2 ){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn2.className = "boxG";
                btn2.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn2.className = "boxP";
                btn2.disabled = true;
            }
        }
        if(event.target === btn3){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn3.className = "boxG";
                btn3.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn3.className = "boxP";
                btn3.disabled = true;
            }
        }
      
        if(event.target === btn4){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn4.className = "boxG";
                btn4.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn4.className = "boxP";
                btn4.disabled = true;
            }
        }
       
        if(event.target === btn5){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn5.className = "boxG";
                btn5.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn5.className = "boxP";
                btn5.disabled = true;
            }
        }
       
        if(event.target === btn6){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn6.className = "boxG";
                btn6.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn6.className = "boxP";
                btn6.disabled = true;
            }
        }
      
        if(event.target === btn7){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn7.className = "boxG";
                btn7.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn7.className = "boxP";
                btn7.disabled = true;
            }
        }
        
        if(event.target === btn8 ){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn8.className = "boxG";
                btn8.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn8.className = "boxP";
                btn8.disabled = true;
            }
        }
       
        if(event.target === btn9){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn9.className = "boxG";
                btn9.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn9.className = "boxP";
                btn9.disabled = true;
            }
        }

        if(event.target === btn10){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn10.className = "boxG";
                btn10.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn10.className = "boxP";
                btn10.disabled = true;
            }
        }

        if(event.target === btn11){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn11.className = "boxG";
                btn11.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn11.className = "boxP";
                btn11.disabled = true;
            }
        }

        if(event.target === btn12){
            count.push(1)
            remender = pickBox - count.length;
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                btn12.className = "boxG";
                btn12.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn12.className = "boxP";
                btn12.disabled = true;
            }
        }  
    }

    const finalScore = result.reduce((acc, curr)=> acc + curr, 0);
    score.innerHTML = `Score: ${finalScore}`
})


function winner(){
    // score set 
    const topScore = 10;
    //keep update total score 
    var total = result.reduce((acc, curr)=> acc+curr, 0);

    if(total > topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
        audio.play()
        alert(`Well done lets play next round!!`)
        //run reset table for next level
        resetTable()
        
        document.querySelector(".boxes2").style.display = "block"
        pickBox = 10;
        const remender = pickBox - count.length;
        remainingBox.innerHTML = `Pick left: ${remender}`
        round.push(1)
        level.innerHTML= "Level: 2"
        result = [];
        score.innerHTML = `Score: 0`
        
    }

    if(total < topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        alert(document.querySelector(".result").innerHTML = "Better luck next time")
       
        level.style.display ="none"
        remainingBox.style.display = "none";
        scoreDisplay.className = "scoring1"
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total === topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        alert(document.querySelector(".result").innerHTML = "Whoops Draw!!!")
     
        level.style.display ="none";
        remainingBox.style.display = "none";
        scoreDisplay.className = "scoring1"
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv4";
        document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }
    
console.log(round)
console.log(result)
console.log(count)
}
function resetTable(){
    // as all these boxes has been disbled so this function will enabled all the boxes
    btn1.className = "box1"
    btn1.disabled = false; 
    btn2.className = "box2"
    btn2.disabled = false; 
    btn3.className = "box3"
    btn3.disabled = false; 
    btn4.className = "box4"
    btn4.disabled = false; 
    btn5.className = "box5"
    btn5.disabled = false; 
    btn6.className = "box6"
    btn6.disabled = false; 
    btn7.className = "box7"
    btn7.disabled = false; 
    btn8.className = "box8"
    btn8.disabled = false; 
    btn9.className = "box9"
    btn9.disabled = false;
    btn10.className = "box10"
    btn10.disabled = false;
    btn11.className = "box11"
    btn11.disabled = false;
    btn12.className = "box12"
    btn12.disabled = false;
    // reset the counter for the round 
    count.length = 0; 
    
   }

   function level2(){
    // set the score to beat
    const topScore = 30;
    const total = result.reduce((acc, curr)=> acc+curr, 0);

    if(total > topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
        audio.play()
        document.querySelector(".result").innerHTML = "Congratulation you are the winner"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv3";
        document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total < topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        document.querySelector(".result").innerHTML = "Better luck next time"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total === topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        document.querySelector(".result").innerHTML = "Better luck next time"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv4";
        document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }
   
console.log("first")
console.log(result)
console.log(count)
}

