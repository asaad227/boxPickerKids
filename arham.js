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
   play.style.display = "none"
   
}

play.addEventListener("click", start)
function box1 (){
    if(count.length < pickBox){
        count.push(1)
        const random = Math.floor(Math.random()*4);
        const randomNum = Math.floor(Math.random()*4)
        console.log(randomNum, random)
        if(randomNum === random ){
            result.push(10);
            btn1.className = "boxG"
        }else{
            btn1.className = "boxP"
        }
            btn1.disabled = true;
            const total = result.reduce((acc, curr)=> acc + curr, 0)
            document.querySelector(".total").innerHTML = `Score: ${total}`
        
    }else{
        if(round.length > 0){
            level2()
                                    }else{
                                        winner()
                                    }
        
    }
}

btn1.addEventListener("click", box1)

function box2 (){
    if(count.length < pickBox){
        count.push(1)
        const random = Math.floor(Math.random()*4);
        const randomNum = Math.floor(Math.random()*4)
        console.log(randomNum, random)
        if(randomNum === random ){
            result.push(10);
            btn2.className = "boxG"
        }else{
            btn2.className = "boxP"
        }
        btn2.disabled = true;
            const total = result.reduce((acc, curr)=> acc + curr, 0)
            document.querySelector(".total").innerHTML = `Score: ${total}`
        
    }else{

        if(round.length > 0){
            level2()
                                    }else{
                                        winner()
                                    }
        
    }
    }
 
    btn2.addEventListener("click", box2)

    function box3 (){
        if(count.length < pickBox){
            count.push(1)
            const random = Math.floor(Math.random()*4);
            const randomNum = Math.floor(Math.random()*4)
            console.log(randomNum, random)
            if(randomNum === random ){
                result.push(10);
                btn3.className = "boxG"
            }else{
                btn3.className = "boxP"
            }
            btn3.disabled = true;
                const total = result.reduce((acc, curr)=> acc + curr, 0)
                document.querySelector(".total").innerHTML = `Score: ${total}`
            
        }else{

            if(round.length > 0){
                level2()
                                    }else{
                                        winner()
                                    }
            
        }
        }
        
        btn3.addEventListener("click", box3)

        function box4 (){
            if(count.length < pickBox){
                count.push(1)
                const random = Math.floor(Math.random()*4);
                const randomNum = Math.floor(Math.random()*4)
                console.log(randomNum, random)
                if(randomNum === random ){
                    result.push(10);
                    btn4.className = "boxG"
                }else{
                    btn4.className = "boxP"
                }
                btn4.disabled = true;
                const total = result.reduce((acc, curr)=> acc + curr, 0)
                document.querySelector(".total").innerHTML = `Score: ${total}`
                
            }else{

                if(round.length > 0){
                    level2()
                }else{
                    winner()
                }
                
            }
            }
           
            btn4.addEventListener("click", box4)

            function box5 (){
                if(count.length < pickBox){
                    count.push(1)
                    const random = Math.floor(Math.random()*4);
                    const randomNum = Math.floor(Math.random()*4)
                    console.log(randomNum, random)
                    if(randomNum === random ){
                        result.push(10);
                        btn5.className = "boxG"
                    }else{
                        btn5.className = "boxP"
                    }
                    btn5.disabled = true;
                        const total = result.reduce((acc, curr)=> acc + curr, 0)
                        document.querySelector(".total").innerHTML = `Score: ${total}`
                    
                }else{

                    if(round.length > 0){
                        level2()
                    }else{
                        winner()
                    }
                    
                }
                }
              
                btn5.addEventListener("click", box5)

                function box6 (){
                    if(count.length < pickBox){
                        count.push(1)
                        const random = Math.floor(Math.random()*4);
                        const randomNum = Math.floor(Math.random()*4)
                        console.log(randomNum, random)
                        if(randomNum === random ){
                            result.push(10);
                            btn6.className = "boxG"
                        }else{
                            btn6.className = "boxP"
                        }
                        btn6.disabled = true;
                            const total = result.reduce((acc, curr)=> acc + curr, 0)
                            document.querySelector(".total").innerHTML = `Score: ${total}`
                        
                    }else{

                        if(round.length > 0){
                            level2()
                        }else{
                            winner()
                        }
                        
                    }
                    }
                 
                    btn6.addEventListener("click", box6)

                    function box7 (){
                        if(count.length < pickBox){
                            count.push(1)
                            const random = Math.floor(Math.random()*4);
                            const randomNum = Math.floor(Math.random()*4)
                            console.log(randomNum, random)
                            if(randomNum === random ){
                                result.push(10);
                                btn7.className = "boxG"
                            }else{
                                btn7.className = "boxP"
                            }
                            btn7.disabled = true;
                                const total = result.reduce((acc, curr)=> acc + curr, 0)
                                document.querySelector(".total").innerHTML = `Score: ${total}`
                            
                        }else{

                            if(round.length > 0){
                                level2()
                            }else{
                                winner()
                            }
                            
                        }
                        }
               
                        btn7.addEventListener("click", box7)

                        function box8 (){
                            if(count.length < pickBox){
                                count.push(1)
                                const random = Math.floor(Math.random()*4);
                                const randomNum = Math.floor(Math.random()*4)
                                console.log(randomNum, random)
                                if(randomNum === random ){
                                    result.push(10);
                                    btn8.className = "boxG"
                                }else{
                                    btn8.className = "boxP"
                                }
                                btn8.disabled = true;
                                    const total = result.reduce((acc, curr)=> acc + curr, 0)
                                    document.querySelector(".total").innerHTML = `Score: ${total}`
                                
                            }else{

                                if(round.length > 0){
                                    level2()
                                }else{
                                    winner()
                                }
                                
                            }
                            }
                       
                            btn8.addEventListener("click", box8)

                            function box9 (){
                                if(count.length < pickBox){
                                    count.push(1)
                                    const random = Math.floor(Math.random()*4);
                                    const randomNum = Math.floor(Math.random()*4)
                                    console.log(randomNum, random)
                                    if(randomNum === random ){
                                        result.push(10);
                                        btn9.className = "boxG"
                                    }else{
                                        btn9.className = "boxP"
                                    }
                                    btn9.disabled = true;
                                        const total = result.reduce((acc, curr)=> acc + curr, 0)
                                        document.querySelector(".total").innerHTML = `Score: ${total}`
                                    
                                }else{
                                    if(round.length > 0){
                                       level2()
                                    }else{
                                        winner()
                                    }
                                   
                                    
                                }

                                  
                                }
                         
                                btn9.addEventListener("click", box9)

                                function box10 (){
                                    if(count.length < pickBox){
                                        count.push(1)
                                        const random = Math.floor(Math.random()*4);
                                        const randomNum = Math.floor(Math.random()*4)
                                        console.log(randomNum, random)
                                        if(randomNum === random ){
                                            result.push(10);
                                            btn10.className = "boxG"
                                        }else{
                                            btn10.className = "boxP"
                                        }
                                        btn12.disabled = true;
                                            const total = result.reduce((acc, curr)=> acc + curr, 0)
                                            document.querySelector(".total").innerHTML = `Score: ${total}`
                                        
                                    }else{
                                        if(round.length > 0){
                                           level2()
                                        }else{
                                            winner()
                                        }
                                       
                                        
                                    }
    
                                      
                                    }
                             
                                    btn10.addEventListener("click", box10)

                                    function box11 (){
                                        if(count.length < pickBox){
                                            count.push(1)
                                            const random = Math.floor(Math.random()*4);
                                            const randomNum = Math.floor(Math.random()*4)
                                            console.log(randomNum, random)
                                            if(randomNum === random ){
                                                result.push(10);
                                                btn11.className = "boxG"
                                            }else{
                                                btn11.className = "boxP"
                                            }
                                            btn11.disabled = true;
                                                const total = result.reduce((acc, curr)=> acc + curr, 0)
                                                document.querySelector(".total").innerHTML = `Score: ${total}`
                                            
                                        }else{
                                            if(round.length > 0){
                                               level2()
                                            }else{
                                                winner()
                                            }
                                           
                                            
                                        }
        
                                          
                                        }
                                 
                                        btn11.addEventListener("click", box11)

                                        function box12 (){
                                            if(count.length < pickBox){
                                                count.push(1)
                                                const random = Math.floor(Math.random()*4);
                                                const randomNum = Math.floor(Math.random()*4)
                                                console.log(randomNum, random)
                                                if(randomNum === random ){
                                                    result.push(10);
                                                    btn12.className = "boxG"
                                                }else{
                                                    btn12.className = "boxP"
                                                }
                                                btn12.disabled = true;
                                                    const total = result.reduce((acc, curr)=> acc + curr, 0)
                                                    document.querySelector(".total").innerHTML = `Score: ${total}`
                                                
                                            }else{
                                                if(round.length > 0){
                                                   level2()
                                                }else{
                                                    winner()
                                                }
                                               
                                                
                                            }
            
                                              
                                            }
                                     
                                            btn12.addEventListener("click", box12)

function winner(){
    const topScore = 10;
    var total = result.reduce((acc, curr)=> acc+curr, 0);

    if(total > topScore){
        alert(`you are the winner ${total}`)
        resetTable()
        document.querySelector(".boxes2").style.display = "block"
        pickBox = 10;
        round.push(1)
        result = [];
      
        
    }

    if(total < topScore){
        alert("Better luck next time  ")
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total === topScore){
        alert("Draw  ")
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra").style.display = "none"
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
        alert("you are the winner ")
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total < topScore){
        alert("Better luck next time  ")
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }

    if(total === topScore){
        alert("Draw  ")
        document.querySelector(".total").innerHTML = `Score: ${total}`
        document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        document.querySelector(".mainDiv1").className = "mainDiv2";
        document.querySelector(".abra").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
    }
   
  console.log("first")
console.log(result)
console.log(count)
}