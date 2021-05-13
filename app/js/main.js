"use strict";

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var close = document.getElementsByClassName("modal-content__bottom-btn")[0];
var next = document.getElementsByClassName("modal-content__bottom-btn--continue")[0];
btn.addEventListener('click', function () {
  modal.classList.add("modal--active");
});
close.addEventListener('click', function () {
  modal.classList.remove("modal--active");
});
next.addEventListener('click', function () {
  modal.classList.remove("modal--active");
});