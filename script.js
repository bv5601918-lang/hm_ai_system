const box = document.getElementById("box");

function changeText(){

    let random = Math.random();

    if(random > 0.5){
        box.innerText = "BIG";
    } else {
        box.innerText = "SMALL";
    }

}

// প্রথমে একবার চালাবে
changeText();

// তারপর প্রতি 30 সেকেন্ডে বদলাবে
setInterval(changeText, 30000);
