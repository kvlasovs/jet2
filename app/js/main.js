const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const close = document.getElementsByClassName("modal-content__bottom-btn")[0];
const next = document.getElementsByClassName("modal-content__bottom-btn--continue")[0];


btn.addEventListener('click', function() {
  modal.classList.add("modal--active");
})

close.addEventListener('click', function() {
  modal.classList.remove("modal--active");
})

next.addEventListener('click', function() {
  modal.classList.remove("modal--active");
})
