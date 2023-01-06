//массив элементов карточек

let initialCards = [
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

function createProfileFormButton() {
  // получаем новые значения
  const takingElemensValue = {
    name: formInputName.value,
    link: formInputLink.value,
  };

  // создаем новую карту в начале массива
  createCard = () => {
    const newElement = createCardElements(takingElemensValue);
    sectionElements.prepend(newElement);
  };
  createCard();

  closeMainPopup(popupNewCard, profileForm.reset());
}

//получаем значения для отправки формы
function sendClickProfileForm(evt) {
  evt.preventDefault();
  formInputName.value;
  formInputLink.value;
  closeMainPopup(popupNewCard);
}

// Клонирование карточки и добавляем addEventListener
function createCardElements({ name, link }) {
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
    openMainPopup(profileSlaider);
    profileSlaiderPictures.src = link;
    profileSlaiderSubtitle.textContent = name;
  });

  return elementsCard;
}

// перебор массива и добавление элементов
initialCards.forEach(function ({ name, link }) {
  const forEachArray = createCardElements({ name, link });
  sectionElements.append(forEachArray);
  return forEachArray;
});

// добавляем лайк
function hendlerLikeCard(evt) {
  evt.target.classList.toggle('element_change-like');
}

//удаляем карточку
function hendlerDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

//функция отслеживания клика и закрытия profileSlaider по странице
const closePopupByClickSite = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeMainPopup(profileSlaider);
  closeMainPopup(popupEditProfile);
  closeMainPopup(popupNewCard);
};

// регистрируем обработчики событий по клику элементов добавления  пользователя в profile.
profileAddButton.addEventListener('click', () => openMainPopup(popupNewCard));
profileRemoveButton.addEventListener('click', () => closeMainPopup(popupNewCard));
profileCreateButton.addEventListener('click', createProfileFormButton);
//отправляем форму пользователя в profile
profileForm.addEventListener('submit', sendClickProfileForm);

//слушатель закрытие попап слайдера
profileSlaiderCloseButton.addEventListener('click', () => closeMainPopup(profileSlaider));

//слушатель клика за границей popup
profileSlaider.addEventListener('click', closePopupByClickSite);
popupEditProfile.addEventListener('click', closePopupByClickSite);
popupNewCard.addEventListener('click', closePopupByClickSite);
