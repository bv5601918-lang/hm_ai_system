let balance = 0;

function showPage(page) {

  document.getElementById("home").style.display = "none";
  document.getElementById("tasks").style.display = "none";
  document.getElementById("packages").style.display = "none";
  document.getElementById("menu").style.display = "none";

  document.getElementById(page).style.display = "block";
}

function watchAd() {
  balance += 0.50;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("🎉 You earned ৳0.50");
}
