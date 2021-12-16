// Project section modals

const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".modal-close");
const modal_container = document.querySelectorAll(".modal_container");

open.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

close.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".modal_container").style.display = "none");
  };
});

// open.addEventListener("click", () => {
//   modal_container.classList.add("show");
// });

// close.addEventListener("click", () => {
//   modal_container.classList.remove("show");
// });
