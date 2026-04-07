function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* BUY CLICK */
function buy(item) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");

  modal.classList.remove("hidden");

  title.innerText =
    item +
    "\n\nIf you need to buy Stuff/Ranks/Gear.\nGo to Discord → Make ticket → Talk with staff.";
}

/* CLOSE MODAL */
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* REMOVE PAYMENT REDIRECT */
function payNow() {
  alert("Go to Discord → Make ticket");
}

/* PAYMENT MESSAGE */
function paymentDone() {
  document.getElementById("payment-msg").innerText =
    "✅ Go to Discord → Make ticket → Talk with staff.";
}

/* DISCORD OPEN */
function openDiscord() {
  window.open("https://discord.gg/HDpkv4N4", "_blank");
}
