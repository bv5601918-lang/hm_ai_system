function submitTask(amount) {
  balance += amount;

  document.getElementById("balanceText").innerText =
    "💰 Balance: ৳" + balance.toFixed(2);

  alert("✅ Task Submitted! +৳" + amount);
}
