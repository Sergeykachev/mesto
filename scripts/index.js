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

  closePopup(popupEditProfile, formAddNewUser.reset());
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

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// шесть карточек из коробки делаем выборку элементов
const popupNewCard = document.querySelector('.popup-profile');
const profileAddButton = profileElement.querySelector('.profile__add-button');
const profileRemoveButton = popupNewCard.querySelector('.popup-profile__close');
const profileCreateButton = popupNewCard.querySelector('.popup-profile__create');

// Находим поля формы шесть карточек
const profileForm = popupNewCard.querySelector('.popup__form');
const formCreateButton = profileForm.querySelector('.popup-profile__create');
const formInputName = profileForm.querySelector('.popup__input_form_name-element');
const formInputLink = profileForm.querySelector('.popup__input_form_link-element');

// получаем попап увеличения картинки
const profileSlaider = document.querySelector('.popup-slaider');
const profileSlaiderPictures = profileSlaider.querySelector('.popup-slaider__pictires');
const profileSlaiderSubtitle = profileSlaider.querySelector('.popup-slaider__subtitle');
const profileSlaiderCloseButton = profileSlaider.querySelector('.popup-slaider__close');

// Находим элементы карточки
const sectionElements = document.querySelector('.elements');
const elementTemlate = document.querySelector('.template').content.querySelector('.element');

//  добавляем новую карту и отправляем форму

function createProfileFormButton(name) {
  // получаем новые значения
  const takingElemensValue = {
    name: formInputName.value,
    link: formInputLink.value,
  };

  // создаем новую карту в начале массива

  const newElement = createCard(takingElemensValue);
  sectionElements.prepend(newElement);

  closePopup(popupNewCard, profileForm.reset());
}

// Клонирование карточки и добавляем addEventListener
function createCard({ name, link }) {
  const elementsCard = elementTemlate.cloneNode(true);

  //получаем элемент  лайк и удаление со слушателями
  const elementTitle = elementsCard.querySelector('.element__image-title');
  const elementImage = elementsCard.querySelector('.element__image');
  const elementLikeButton = elementsCard.querySelector('.element__like');
  const elementDeleteButton = elementsCard.querySelector('.element__delete');

  //присваемваем значения
  elementTitle.textContent = name;
  elementImage.src = link;
  elementImage.alt = name;

  //слушатели событий удаления лайка
  elementLikeButton.addEventListener('click', hendlerLikeCard);
  elementDeleteButton.addEventListener('click', hendlerDeleteCard);

  //получаем элементы из shadowDom по клику для увеличения картинки
  elementImage.addEventListener('click', () => {
    openPopup(profileSlaider);
    profileSlaiderPictures.src = link;
    profileSlaiderSubtitle.textContent = name;
    profileSlaiderPictures.alt = name;
  });

  return elementsCard;
}

// перебор массива и добавление элементов
initialCards.forEach(function ({ name, link }) {
  const forEachArray = createCard({ name, link });
  sectionElements.append(forEachArray);
});

// добавляем лайк
function hendlerLikeCard(evt) {
  evt.target.classList.toggle('element_change-like');
}

//удаляем карточку
function hendlerDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

// регистрируем обработчики событий по клику элементов добавления  пользователя в profile.
profileAddButton.addEventListener('click', () => openPopup(popupNewCard));
profileRemoveButton.addEventListener('click', () => closePopup(popupNewCard));
profileCreateButton.addEventListener('click', createProfileFormButton);

//слушатель закрытие попап слайдера
profileSlaiderCloseButton.addEventListener('click', () => closePopup(profileSlaider));

//слушатели клика закрытия модального окна по странице
profileSlaider.addEventListener('click', closePopupByClickWindow);
popupEditProfile.addEventListener('click', closePopupByClickWindow);
popupNewCard.addEventListener('click', closePopupByClickWindow);
