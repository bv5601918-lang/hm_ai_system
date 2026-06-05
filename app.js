let balance = 0;

// SHOW PAGE (SAFE)
function showPage(page) {

  let pages = ["home", "tasks", "packages", "menu"];

  for (let i = 0; i < pages.length; i++) {
    document.getElementById(pages[i]).style.display = "none";
  }

  document.getElementById(page).style.display = "block";
}

// ADS
function watchAd() {
  balance += 0.50;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("Earned ৳0.50");
}

// TASK SUBMIT
function submitTask(amount) {
  balance += amount;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("Task completed +৳" + amount);
}

// AUTO OPEN HOME
document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});
