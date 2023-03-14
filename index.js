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
const divBox = document.querySelector(".divBox");
const play = document.querySelector(".start");
const remainingBox = document.querySelector(".remainingBox");
const scoreDisplay = document.querySelector(".scoring");
const abra = document.querySelector(".abra")
var pickBox = 7;
let result= []
var round = [];
var count = []
function start(){
    const total = result.reduce((acc, curr)=> acc + curr, 0);
    const game = round.length + 1
    score.innerHTML = `Score: ${total}`;
    level.innerHTML = `Level: ${game}`
   mainDiv.className = "mainDiv1"
   divBox.style.display = "initial";
   play.style.display = "none";
   abra.className = "abra1"
   
}

play.addEventListener("click", start)

document.addEventListener("click", function(event){
    count.push(1)
    const remender = pickBox - count.length;
    remainingBox.innerHTML = `Pick left: ${remender}`
    const random = Math.floor(Math.random()*4);
    const randomBox = Math.floor(Math.random()*4)
    if(count.length === pickBox){
        if(round.length > 0){
            level2()
        }else{
        winner()
        resetTable()
        }
        
    }else{
        if(event.target === btn1 ){
            if(random === randomBox){
                result.push(10)
                btn1.className = "boxG";
                btn1.disabled = true;
            }else{
                btn1.className = "boxP";
                btn1.disabled = true;
            }
           
        }
      
        if(event.target === btn2 ){
            if(random === randomBox){
                result.push(10)
                btn2.className = "boxG";
                btn2.disabled = true;
            }else{
                btn2.className = "boxP";
                btn2.disabled = true;
            }
        }
        if(event.target === btn3){
            if(random === randomBox){
                result.push(10)
                btn3.className = "boxG";
                btn3.disabled = true;
            }else{
                btn3.className = "boxP";
                btn3.disabled = true;
            }
        }
      
        if(event.target === btn4){
            if(random === randomBox){
                result.push(10)
                btn4.className = "boxG";
                btn4.disabled = true;
            }else{
                btn4.className = "boxP";
                btn4.disabled = true;
            }
        }
       
        if(event.target === btn5){
            if(random === randomBox){
                result.push(10)
                btn5.className = "boxG";
                btn5.disabled = true;
            }else{
                btn5.className = "boxP";
                btn5.disabled = true;
            }
        }
       
        if(event.target === btn6){
            if(random === randomBox){
                result.push(10)
                btn6.className = "boxG";
                btn6.disabled = true;
            }else{
                btn6.className = "boxP";
                btn6.disabled = true;
            }
        }
      
        if(event.target === btn7){
            if(random === randomBox){
                result.push(10)
                btn7.className = "boxG";
                btn7.disabled = true;
            }else{
                btn7.className = "boxP";
                btn7.disabled = true;
            }
        }
        
        if(event.target === btn8 ){
            if(random === randomBox){
                result.push(10)
                btn8.className = "boxG";
                btn8.disabled = true;
            }else{
                btn8.className = "boxP";
                btn8.disabled = true;
            }
        }
       
        if(event.target === btn9){
            if(random === randomBox){
                result.push(10)
                btn9.className = "boxG";
                btn9.disabled = true;
            }else{
                btn9.className = "boxP";
                btn9.disabled = true;
            }
        }

        if(event.target === btn10){
            if(random === randomBox){
                result.push(10)
                btn10.className = "boxG";
                btn10.disabled = true;
            }else{
                btn10.className = "boxP";
                btn10.disabled = true;
            }
        }

        if(event.target === btn11){
            if(random === randomBox){
                result.push(10)
                btn11.className = "boxG";
                btn11.disabled = true;
            }else{
                btn11.className = "boxP";
                btn11.disabled = true;
            }
        }

        if(event.target === btn12){
            if(random === randomBox){
                result.push(10)
                btn12.className = "boxG";
                btn12.disabled = true;
            }else{
                btn12.className = "boxP";
                btn12.disabled = true;
            }
        }
      
    }

    const finalScore = result.reduce((acc, curr)=> acc + curr, 0);
    score.innerHTML = `Score: ${finalScore}`
})

function winner(){
    const topScore = 10;
    var total = result.reduce((acc, curr)=> acc+curr, 0);

    if(total > topScore){
        alert(`Well done lets play next round!!`)
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
        alert(document.querySelector(".result").innerHTML = "Whoops Draw!!!")
        level.style.display ="none";
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
    
console.log(round)
console.log(result)
console.log(count)
}
function resetTable(){
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
    count.length = 0; 

    
   }

   function level2(){
    const topScore = 30;
    const total = result.reduce((acc, curr)=> acc+curr, 0);

    if(total > topScore){
        alert(document.querySelector(".result").innerHTML = "Congratulation you are the winner")
      
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

    if(total < topScore){
        alert(document.querySelector(".result").innerHTML = "Better luck next time")
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
        alert(document.querySelector(".result").innerHTML = "Better luck next time")
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
   
  console.log("first")
console.log(result)
console.log(count)
}