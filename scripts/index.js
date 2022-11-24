// делаем выборку дом элементов
let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let profileElement = document.querySelector('.profile');
let mainForm = popupElement.querySelector('.popup__save');
let formElementName = popupElement.querySelector('.popup__input_name');
let formElementAbout = popupElement.querySelector('.popup__input_about');
let profileElementTitle = document.querySelector('.profile__title');
let profileElementSubtitle = document.querySelector('.profile__subtitle');
// сохранение данных формы

function saveFormClick(evt) {
  evt.preventDefault(evt);

  profileElementTitle.textContent = formElementName.value;

  profileElementSubtitle.textContent = formElementAbout.value;

  closePopup();
}

//подключаем popup

let openPopup = function () {
  popupElement.classList.add('popup_open');

  profileElementSubtitle.textContent = formElementAbout.value;

  profileElementTitle.textContent = formElementName.value;
};

let closePopup = function () {
  popupElement.classList.remove('popup_open');
};

// регистрируем обработчик событий по клику
mainForm.addEventListener('submit', saveFormClick);
mainForm.addEventListener('click', saveFormClick);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
