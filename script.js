const PASSWORD = "@MEHEDIVAI115";

// 👉 তোমার লিংক এখানে সেট করা আছে
const TARGET_LINK = "https://hgnice.bet/#/register?invitationCode=531211974484";

const pass = document.getElementById("pass");
const loginBox = document.getElementById("login");
const app = document.getElementById("app");

const timeBox = document.getElementById("timeBox");
const valueBox = document.getElementById("value");

let offset = 0;

/* LOGIN */
function login(){
    if(pass.value === PASSWORD){
        loginBox.style.display = "none";
        app.style.display = "block";
        start();
    }else{
        alert("WRONG PASSWORD");
    }
}

/* REAL SERVER TIME */
async function syncTime(){
    try{
        let res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Dhaka");
        let data = await res.json();

        offset = new Date(data.datetime).getTime() - Date.now();

    }catch(e){
        console.log("time sync error");
    }
}

/* GET SYNC TIME */
function now(){
    return new Date(Date.now() + offset);
}

/* UPDATE UI */
function update(){

    let t = now();
    timeBox.innerText = "SERVER: " + t.toLocaleTimeString();

    let sec = t.getSeconds();

    if(sec === 0 || sec === 30){
        valueBox.innerText = Math.random() > 0.5 ? "BIG" : "SMALL";
    }
}

/* OPEN LINK */
function openSite(){
    window.open(TARGET_LINK, "_blank");
}

/* START */
async function start(){
    await syncTime();
    setInterval(update, 1000);
}
