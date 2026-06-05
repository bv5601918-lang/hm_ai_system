let balance = 0;

// প্রথমে Home show হবে (IMPORTANT FIX)
document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});

// PAGE SWITCH
function showPage(page) {

  let pages = ["home", "tasks", "packages", "menu"];

  pages.forEach(p => {
    document.getElementById(p).style.display = "none";
  });

  document.getElementById(page).style.display = "block";
}

// ADS
function watchAd() {
  balance += 0.50;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("Earned ৳0.50");
}

// TASK
function submitTask(amount) {
  balance += amount;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("Task submitted +৳" + amount);
}
