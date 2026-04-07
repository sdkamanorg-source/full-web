function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function buy(item) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-title").innerText = item;
}
