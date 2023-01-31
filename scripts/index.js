//импорт класса FormValidator
import { FormValidation } from './FormValidator.js';
//импорт класса Card
import { Card } from './Card.js';

//массив элементов карточек

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//переменные с формами
const profileUserPopup = document.querySelector('.popup-user');
const profileEditForm = profileUserPopup.querySelector('.popup__form');

const profileCreateNewCard = document.querySelector('.popup-profile');
const profileCreateFormNewCard = profileCreateNewCard.querySelector('.popup__form');

// функция с селекторами из задания
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const addCardFormValidation = new FormValidation(settings, profileEditForm);
const createNewCardFormValidation = new FormValidation(settings, profileCreateFormNewCard);

addCardFormValidation.enableValidation();
createNewCardFormValidation.enableValidation();

// делаем выборку дом элементов
const popupEditProfile = document.querySelector('.popup');
const popupCloseButtonNewUser = popupEditProfile.querySelector('.popup__close');
const popupOpenButtonNewUser = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile');

// Находим форму в DOM
const formAddNewUser = popupEditProfile.querySelector('.popup__form');

// Находим поля формы в DOM
const formInputNewUserName = formAddNewUser.querySelector('.popup__input_form_name');
const formInputNewUserAbout = formAddNewUser.querySelector('.popup__input_form_about');
// Выберите элементы, куда должны быть вставлены значения полей
const profileElementTitle = profileElement.querySelector('.profile__title');
const profileElementSubtitle = profileElement.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function saveFormAddNewUser(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  // Вставьте новые значения с помощью textContent
  profileElementTitle.textContent = formInputNewUserName.value;
  profileElementSubtitle.textContent = formInputNewUserAbout.value;

  closePopup(popupEditProfile);
}

//получение значений в форму profile после открытия

function getValueForProfileForm() {
  formInputNewUserName.value = profileElementTitle.textContent;
  formInputNewUserAbout.value = profileElementSubtitle.textContent;
}

//универсальные функции открытия, закрытия popup
function openPopup(elem) {
  elem.classList.add('popup_open');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(elem) {
  elem.classList.remove('popup_open');
  document.removeEventListener('keydown', closeByEsc);
}

//универсальная функция закрытия popup по нажатию клавишы Escape

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');

    closePopup(openedPopup);
  }
}

//универсальная функция закрытия модального окна по клику на страницу

function closePopupByClickWindow(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  const openedPopup = document.querySelector('.popup_open');

  closePopup(openedPopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formAddNewUser.addEventListener('submit', saveFormAddNewUser);
// регистрируем обработчики событий по клику
popupOpenButtonNewUser.addEventListener('click', () => {
  openPopup(popupEditProfile);
  getValueForProfileForm();
});
popupCloseButtonNewUser.addEventListener('click', () => closePopup(popupEditProfile));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// шесть карточек из коробки делаем выборку элементов
const popupNewCard = document.querySelector('.popup-profile');
const profileAddButton = profileElement.querySelector('.profile__add-button');
const profileRemoveButton = popupNewCard.querySelector('.popup-profile__close');
const profileCreateButton = popupNewCard.querySelector('.popup-profile__create');
const profileNewCardForm = popupNewCard.querySelector('.popup__form');

// получаем попап увеличения картинки
const profileSlaider = document.querySelector('.popup-slaider');
const profileSlaiderPictures = profileSlaider.querySelector('.popup-slaider__pictires');
const profileSlaiderSubtitle = profileSlaider.querySelector('.popup-slaider__subtitle');

// Находим элементы карточки
const sectionElements = document.querySelector('.elements');
const templateSelector = '.template';
//кнопка закрытия модального окна увеличения картинки
const profileSlaiderCloseButton = profileSlaider.querySelector('.popup-slaider__close');
// получаем значения из инпутов
const inputCardName = document.querySelector('.popup__input_form_name-element');
const inputCardlink = document.querySelector('.popup__input_form_link-element');

// функция увеличения картинки
const watchImage = (name, link) => {
  profileSlaiderPictures.src = link;
  profileSlaiderPictures.alt = name;
  profileSlaiderSubtitle.textContent = name;

  openPopup(profileSlaider);
};

function renderCard(data) {
  // создаем новую карту из массива

  const newElement = new Card(data, templateSelector, watchImage);
  const card = newElement.generateNewCard();
  sectionElements.prepend(card);
}

function createCardNewUser(evt) {
  evt.preventDefault();
  // присваиваем новые значения
  const takingElemensValue = {
    name: inputCardName.value,
    link: inputCardlink.value,
  };

  //создаем новую карту в начале массива
  renderCard(takingElemensValue);

  closePopup(popupNewCard);
}

// перебор массива и добавление элементов
initialCards.forEach(function (data, sectionElements) {
  renderCard(data, sectionElements);
});

//слушатель закрытие попап слайдера
profileCreateButton.addEventListener('click', createCardNewUser);
profileSlaiderCloseButton.addEventListener('click', () => closePopup(profileSlaider));

// регистрируем обработчики событий по клику элементов добавления  пользователя в profile.
profileAddButton.addEventListener('click', () => {
  profileNewCardForm.reset();
  openPopup(popupNewCard);
});
profileRemoveButton.addEventListener('click', () => closePopup(popupNewCard));

//слушатели закрытия модального окна кликом по странице
popupEditProfile.addEventListener('click', closePopupByClickWindow);
popupNewCard.addEventListener('click', closePopupByClickWindow);
profileSlaider.addEventListener('click', closePopupByClickWindow);
