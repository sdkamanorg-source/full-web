function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function buy(item) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-title").innerText = item;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function payNow() {
  window.open("https://your-payment-link.com", "_blank");
}

function paymentDone() {
  document.getElementById("payment-msg").innerText =
    "✅ Make ticket in Discord!";
}

function openDiscord() {
  window.open("https://discord.gg/HDpkv4N4", "_blank");
}
