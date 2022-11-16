// делаем выборку дом элементов
let popupElement = document.querySelector(".popup");
let popupCloseButtonElement = popupElement.querySelector(".popup__close");
let popupOpenButtonElement = document.querySelector(".profile__edit-button");
let profileElement = document.querySelector(".profile");

// сохранение данных формы

let mainForm = popupElement.querySelector(".popup__save");

mainForm.addEventListener("click", saveFormClick);

function saveFormClick() {
  let FormName = popupElement.querySelector(".popup__name").value;
  document.querySelector(".profile__title").textContent = FormName;

  let FormAbout = popupElement.querySelector(".popup__about").value;
  document.querySelector(".profile__subtitle").textContent = FormAbout;
  closePopup();
}

//подключаем popup

let openPopup = function (event) {
  popupElement.classList.add("popup_open");
  console.log("Open popup clicked");
};

let closePopup = function () {
  popupElement.classList.remove("popup_open");
};

let closePopupByClickOnOverlay = function (event) {
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
