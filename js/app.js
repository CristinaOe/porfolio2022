// Project section modals

const open = document.querySelectorAll(".modal-open");
const close = document.querySelectorAll(".modal-close");
const modal_container = document.querySelectorAll(".modal-container");

open.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

close.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".modal-container").style.display = "none");
  };
});

window.onclick = function (e) {
  if (e.target.classList.contains("modal-container")) {
    e.target.style.display = "none";
  }
};
// open.addEventListener("click", () => {
//   modal_container.classList.add("show");
// });

// close.addEventListener("click", () => {
//   modal_container.classList.remove("show");
// });
