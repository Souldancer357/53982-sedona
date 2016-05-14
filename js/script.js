var link = document.querySelector(".search-btn");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var arrival_date = popup.querySelector("[name=arrival]");
var departure_date = popup.querySelector("[name=departure]");
var adult_quantity = popup.querySelector("[name=adult]");
var child_quantity = popup.querySelector("[name=child]");
var storage = {
  arrival_date: "",
  departure_date: ""
};
storage.arrival_date = localStorage.getItem("arrival_date");
storage.departure_date = localStorage.getItem("departure_date");

link.addEventListener("click", function (event) {
  if (popup.classList.contains("modal-content-show")) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  } else {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storage.arrival_date && storage.departure_date) {
      arrival_date.value = storage.arrival_date;
      departure_date.value = storage.departure_date;
      adult_quantity.focus();
    } else {
      arrival_date.focus();
    }
  }
});

form.addEventListener("submit", function (event) {
  if (!arrival_date.value || !departure_date.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Все поля должны быть заполнены");
  } else {
    localStorage.setItem("arrival_date", arrival_date.value);
    localStorage.setItem("departure_date", departure_date.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
