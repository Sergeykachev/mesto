console.log("hello world!");

document.querySelector(".popup");

const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".popup_open");
console.log(popupOpenButtonElement);
console.log(popupCloseButtonElement);

const togglePopupVisibility = function () {
  popupElement.classList.toggle("popup_open");
}

togglePopupVisibility();
