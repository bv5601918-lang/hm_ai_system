let balance = 0;

// fake database (local storage use)
let pendingTasks = JSON.parse(localStorage.getItem("pendingTasks") || "[]");

// page switch
function showPage(page) {
  let pages = ["home", "tasks", "packages", "menu", "admin"];

  pages.forEach(p => {
    let el = document.getElementById(p);
    if (el) el.style.display = "none";
  });

  document.getElementById(page).style.display = "block";

  if (page === "admin") loadAdmin();
}

// ads
function watchAd() {
  balance += 0.50;
  updateBalance();
}

// submit task -> goes to admin approval
function submitTask(amount, inputId) {
  let file = document.getElementById(inputId);

  if (!file || file.files.length === 0) {
    alert("Screenshot দিন");
    return;
  }

  let task = {
    id: Date.now(),
    amount: amount,
    proof: file.files[0].name,
    status: "pending"
  };

  pendingTasks.push(task);
  localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));

  alert("Task submitted (Pending approval)");
}

// ADMIN PANEL LOAD
function loadAdmin() {
  let adminDiv = document.getElementById("adminList");
  adminDiv.innerHTML = "";

  pendingTasks.forEach(task => {
    let div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <p>💰 Amount: ৳${task.amount}</p>
      <p>📸 Proof: ${task.proof}</p>

      <button onclick="approveTask(${task.id})">Approve</button>
      <button onclick="rejectTask(${task.id})">Reject</button>
    `;

    adminDiv.appendChild(div);
  });
}

// approve
function approveTask(id) {
  let task = pendingTasks.find(t => t.id === id);

  if (task) {
    balance += task.amount;
    pendingTasks = pendingTasks.filter(t => t.id !== id);

    save();
    updateBalance();
    loadAdmin();
  }
}

// reject
function rejectTask(id) {
  pendingTasks = pendingTasks.filter(t => t.id !== id);
  save();
  loadAdmin();
}

// helpers
function updateBalance() {
  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);
}

function save() {
  localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
}

// default page
document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});
