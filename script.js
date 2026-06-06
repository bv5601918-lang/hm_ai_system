const box = document.getElementById("box");
const timer = document.getElementById("timer");

let timeLeft = 30;

// change BIG/SMALL
function changeText(){

    let r = Math.random();

    if(r < 0.5){
        box.innerText = "BIG";
        box.style.background = "#00ff88";
    } else {
        box.innerText = "SMALL";
        box.style.background = "#ff3333";
    }
}

// timer update
function updateTimer(){

    timeLeft--;

    timer.innerText = timeLeft;

    if(timeLeft === 0){
        changeText();
        timeLeft = 30; // reset timer
    }
}

// first run
changeText();
timer.innerText = timeLeft;

// every 1 second timer run
setInterval(updateTimer, 1000);
