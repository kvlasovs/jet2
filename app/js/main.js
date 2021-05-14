"use strict";
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const close = document.getElementsByClassName("modal-content__bottom-btn")[0];
const next = document.getElementsByClassName("modal-content__bottom-btn--continue")[0];
btn.addEventListener('click', () => {
  modal.classList.add("modal--active");
});
close.addEventListener('click', () => {
  modal.classList.remove("modal--active");
});
next.addEventListener('click', () => {
  modal.classList.remove("modal--active");
});