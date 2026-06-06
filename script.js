const PASSWORD = "MEHEDIVAI115";

window.onload = function(){

    const pass = document.getElementById("pass");
    const loginBox = document.getElementById("loginBox");
    const app = document.getElementById("app");

    const timeBox = document.getElementById("timeBox");
    const valueBox = document.getElementById("value");

    function login(){

        if(pass.value === PASSWORD){

            loginBox.style.display = "none";
            app.style.display = "block";

            start();

        }else{
            alert("Wrong Password");
        }
    }

    function now(){
        return new Date();
    }

    function update(){

        let t = now();

        timeBox.innerText = t.toLocaleTimeString();

        let sec = t.getSeconds();

        if(sec % 30 === 0){

            valueBox.innerText =
                Math.random() > 0.5 ? "BIG" : "SMALL";
        }
    }

    function openSite(){

        const url =
        "https://hgnice.bet/#/register?invitationCode=531211974484";

        const link = document.createElement("a");

        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function start(){

        update();

        setInterval(update, 1000);
    }

    window.login = login;
    window.openSite = openSite;
};
