const burgerBtn = document.getElementById("burger-btn");
const burgerMenuList = document.getElementById("burger-menu-list");

burgerBtn.addEventListener("click", () => {
  burgerMenuList.classList.toggle("hidden");
});
