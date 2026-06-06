const box = document.getElementById("box");

function flash(){
    box.style.transform = "scale(1.2)";

    setTimeout(()=>{
        box.style.transform = "scale(1)";
    }, 200);
}

function changeText(){

    let r = Math.random();

    if(r < 0.5){
        box.innerText = "BIG";
        box.style.background = "#00ff88";
    } else {
        box.innerText = "SMALL";
        box.style.background = "#ff3333";
    }

    flash();
}

// প্রথমবার চালাবে
changeText();

// 🔥 প্রতি ৩০ সেকেন্ডে পরিবর্তন
setInterval(changeText, 30000);
