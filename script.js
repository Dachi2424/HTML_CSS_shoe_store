// open/close cart logic
function openCart() {
  const cartBar = document.querySelector(".header__cart-section");
  const darkBG = document.querySelector(".header__cart-dark-background");

  cartBar.style.display = "unset";
  darkBG.style.display = "unset";
}
function closeCart() {
  const cartBar = document.querySelector(".header__cart-section");
  const darkBG = document.querySelector(".header__cart-dark-background");

  cartBar.style.display = "none";
  darkBG.style.display = "none";
}

// open/close login logic
function openLogin() {
  const login = document.querySelector(".header__login-section");
  login.style.display = "flex";

  document.body.style.overflow = "hidden";
}
function closeLogin() {
  const login = document.querySelector(".header__login-section");
  login.style.display = "none";

  document.body.style.overflow = "auto";
}
