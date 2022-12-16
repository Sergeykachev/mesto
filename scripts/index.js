// делаем выборку дом элементов
const popupEditProfile = document.querySelector('.popup');
const popupCloseButtonNewUser = popupEditProfile.querySelector('.popup__close');
const popupOpenButtonNewUser = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile');

// Находим форму в DOM
const formAddNewUser = popupEditProfile.querySelector('.popup__forms');

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

  closeMainPopup(popupEditProfile, formAddNewUser.reset());
}

//получение значений в форму profile после открытия

function getValueForProfileForm() {
  formInputNewUserName.value = profileElementTitle.textContent;
  formInputNewUserAbout.value = profileElementSubtitle.textContent;
}

//универсальные функции открытия, закрытия popup

function openMainPopup(elem) {
  elem.classList.add('popup_open');
}

function closeMainPopup(elem) {
  elem.classList.remove('popup_open');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formAddNewUser.addEventListener('submit', saveFormAddNewUser);
// регистрируем обработчики событий по клику
popupOpenButtonNewUser.addEventListener('click', () => {
  openMainPopup(popupEditProfile);
  getValueForProfileForm();
});
popupCloseButtonNewUser.addEventListener('click', () => closeMainPopup(popupEditProfile));

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

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
const popupProfile = document.querySelector('.popup-profile');
const profileAddButton = profileElement.querySelector('.profile__add-button');
const profileRemoveButton = popupProfile.querySelector('.popup-profile__close');
const profileCreateButton = popupProfile.querySelector('.popup-profile__create');

// Находим поля формы шесть карточек
const profileForm = popupProfile.querySelector('.popup-profile__forms');
const formCreateButton = profileForm.querySelector('.popup-profile__create');
const formInputName = profileForm.querySelector('.popup-profile__input_form_name-element');
const formInputLink = profileForm.querySelector('.popup-profile__input_form_link-element');

// //универсальные функции открытия, закрытия popup-profile формы шесть карточек
// function openProfileFormButton(elem) {
//   elem.classList.add('popup_open-button');
// }

// function closeProfileFormButton(elem) {
//   elem.classList.remove('popup_open-button');
// }

// функции открытия и закрытия popup-profile
function realizeOpenProfileFormButton() {
  openMainPopup(popupProfile);
}

function realizeCloseProfileFormButton() {
  closeMainPopup(popupProfile);
}

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

  realizeCloseProfileFormButton(profileForm.reset());
}

//получаем значения для отправки формы
function sendClickProfileForm(evt) {
  evt.preventDefault();
  formInputName.value;
  formInputLink.value;
  realizeCloseProfileFormButton();
}

// регистрируем обработчики событий по клику
profileAddButton.addEventListener('click', realizeOpenProfileFormButton);
profileRemoveButton.addEventListener('click', realizeCloseProfileFormButton);
profileCreateButton.addEventListener('click', createProfileFormButton);
//отправляем форму
profileForm.addEventListener('submit', sendClickProfileForm);

// получаем попап увеличения картинки
const profileSlaider = document.querySelector('.popup-slaider');
const profileSlaiderPictures = profileSlaider.querySelector('.popup-slaider__pictires');
const profileSlaiderSubtitle = profileSlaider.querySelector('.popup-slaider__subtitle');
const profileSlaiderCloseButton = profileSlaider.querySelector('.popup-slaider__close');

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

  //слушатели событий удаления лайка
  elementLikeButton.addEventListener('click', hendlerLikeCard);
  elementDeleteButton.addEventListener('click', hendlerDeleteCard);

  //получаем элементы из shadowDom по клику для увеличения картинки
  elementImage.addEventListener('click', function profileSlaiderOpen() {
    profileSlaider.classList.add('popup_open');
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
const closeProfileSlaiderByClickSite = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  removeProfileSlaider();
};
//закрытие profileSlaider
function removeProfileSlaider() {
  profileSlaider.classList.remove('popup_open');
}

//слушатель закрытие попап слайдера
profileSlaiderCloseButton.addEventListener('click', removeProfileSlaider);

//слушатель клика за границе profileSlaider
profileSlaider.addEventListener('click', closeProfileSlaiderByClickSite);
