let balance = 0;

// PAGE SWITCH FIX
function showPage(page) {

  let pages = ["home", "tasks", "packages", "menu"];

  for (let i = 0; i < pages.length; i++) {
    document.getElementById(pages[i]).style.display = "none";
  }

  document.getElementById(page).style.display = "block";
}

// ADS SYSTEM
function watchAd() {
  balance += 0.50;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("🎉 Earned ৳0.50");
}

// TASK SYSTEM (WITH IMAGE CHECK)
function submitTask(amount, inputId) {

  let file = document.getElementById(inputId);

  if (!file || file.files.length === 0) {
    alert("❌ Please upload screenshot first");
    return;
  }

  balance += amount;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("✅ Task Completed +৳" + amount);
}

// START PAGE FIX
document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});
