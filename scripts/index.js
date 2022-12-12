// делаем выборку дом элементов
const popupAddNewUser = document.querySelector('.popup');
const popupCloseButtonNewUser = popupAddNewUser.querySelector('.popup__close');
const popupOpenButtonNewUser = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile');

// Находим форму в DOM
const formAddNewUser = popupAddNewUser.querySelector('.popup__forms');

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

  closePopup();
}

//подключаем popup

const openPopup = function () {
  popupAddNewUser.classList.add('popup_open');

  formInputNewUserName.value = profileElementTitle.textContent;
  formInputNewUserAbout.value = profileElementSubtitle.textContent;
};

const closePopup = function () {
  popupAddNewUser.classList.remove('popup_open');
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formAddNewUser.addEventListener('submit', saveFormAddNewUser);
// регистрируем обработчики событий по клику
popupOpenButtonNewUser.addEventListener('click', openPopup);
popupCloseButtonNewUser.addEventListener('click', closePopup);

// шесть карточек из коробки делаем выборку элементов
const popupProfile = document.querySelector('.popup-profile');
const profileAddButton = profileElement.querySelector('.profile__add-button');
const profileRemoveButton = popupProfile.querySelector('.popup-profile__close');
const profileCreateButton = popupProfile.querySelector('.popup-profile__create');

//подключаем popup-profile
const profileOpenButton = function () {
  popupProfile.classList.add('popup_open-button');
};

const profileCloseButton = function () {
  popupProfile.classList.remove('popup_open-button');
};

// регистрируем обработчики событий по клику
profileAddButton.addEventListener('click', profileOpenButton);
profileRemoveButton.addEventListener('click', profileCloseButton);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

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

// Находим поля формы
const profileForm = popupProfile.querySelector('.popup-profile__forms');
const formCreateButton = profileForm.querySelector('.popup-profile__create');
const formInputName = profileForm.querySelector('.popup-profile__input_form_name-element');
const formInputLink = profileForm.querySelector('.popup-profile__input_form_link-element');

// получаем попап увеличения картинки
const popupSlaider = document.querySelector('.popup-slaider');
const popupSlaiderPictures = popupSlaider.querySelector('.popup-slaider__pictires');
const popupSlaiderSubtitle = popupSlaider.querySelector('.popup-slaider__subtitle');
const popupSlaiderClose = popupSlaider.querySelector('.popup-slaider__close');

// Находим элементы карточки
const sectionElements = document.querySelector('.elements');
const elementTemlate = document.querySelector('.template').content.querySelector('.element');

// Клонирование карточки и добавляем addEventListener
function createCardElements({ name, link }) {
  const elementsCard = elementTemlate.cloneNode(true);

  //получаем элементы изображение, лайк и удаление со слушателями
  const elementTitle = elementsCard.querySelector('.element__image-title');
  const elementImage = elementsCard.querySelector('.element__image');
  const elementLikeButton = elementsCard.querySelector('.element__like');
  const elementDeleteButton = elementsCard.querySelector('.element__delete');

  //присваемваем значения
  elementTitle.textContent = name;
  elementImage.src = link;
  elementImage.alt = name;

  //слушатели событий удаления и клика по лайку
  elementLikeButton.addEventListener('click', elementLikeCard);
  elementDeleteButton.addEventListener('click', elementDeleteCard);

  //получаем элементы из shadowDom по клику для увеличения картинки
  elementImage.addEventListener('click', function popupSlaiderOpen() {
    popupSlaider.classList.add('popup_open-click');
    popupSlaiderPictures.src = link;
    popupSlaiderSubtitle.textContent = name;
  });

  return elementsCard;
}

//  добавляем новую карту и отправляем форму
function sendFormSubmit(evt) {
  evt.preventDefault();

  // получаем новые значения

  const takingElemensValue = {
    name: formInputName.value,
    link: formInputLink.value,
  };

  // создаем новую карту в начале массива
  const newElement = createCardElements(takingElemensValue);
  sectionElements.prepend(newElement);

  // закрываем форму
  profileCloseButton();
}

// перебор массива и добавление элементов
initialCards.forEach(function ({ name, link }) {
  const forEachArray = createCardElements({ name, link });
  sectionElements.append(forEachArray);
  return forEachArray;
});

// добавляем лайк
function elementLikeCard(evt) {
  evt.target.classList.toggle('element_change-like');
}

//удаляем карточку
function elementDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

//отправляем форму
profileForm.addEventListener('submit', sendFormSubmit);

//функция отслеживания клика и закрытия popupSlaider по странице
const closePopupSlaiderByClickSite = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  popupSlaiderRemove();
};
//закрытие popupSlaider
function popupSlaiderRemove() {
  popupSlaider.classList.remove('popup_open-click');
}

//слушатель закрытие попап слайдера
popupSlaiderClose.addEventListener('click', popupSlaiderRemove);

//слушатель клика за границе popupSlaider
popupSlaider.addEventListener('click', closePopupSlaiderByClickSite);
