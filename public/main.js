const navToggle = document.querySelector(".menu-icon");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});
