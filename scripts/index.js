// делаем выборку дом элементов
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const profileElement = document.querySelector(".profile");

const openPopup = function (event) {
  popupElement.classList.add("popup_open");
  console.log("Open popup clicked");
};

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup();
};

// регистрируем обработчик событий по клику
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
