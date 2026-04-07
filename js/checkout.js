function payNow() {
  alert("Redirecting to payment...");

  // 🔥 ADD YOUR REAL PAYMENT LINK HERE
  window.open("https://your-tebex-or-payment-link.com", "_blank");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
