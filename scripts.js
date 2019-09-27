const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hiddenUL.classList.toggle("is-hidden--tablet");
});
