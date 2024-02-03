var timer =60;
var scoreInc = 0;

function makeBubble(){
    var clutter = "";



for(var i = 1 ; i <= 102; i++ ){
    var rand = Math.floor(Math.random()*10);
    clutter += `<div class ="bubble">${rand}</div>`;

}

document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
   
    var time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(time);
        }
     
    },1000)
}

function hitNumber(){
    var rand = Math.floor(Math.random()*6);
    document.querySelector("#hit").textContent = rand
}

function score(){
scoreInc += 10;
document.querySelector("#score").textContent = scoreInc;
}



score()
score()
hitNumber()
runTimer()
makeBubble()