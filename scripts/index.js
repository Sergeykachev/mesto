// делаем выборку дом элементов
const popupMain = document.querySelector('.popup');
const popupCloseButtonNewUser = popupMain.querySelector('.popup__close');
const popupOpenButtonNewUser = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile');

// Находим форму в DOM
const formAddNewUser = popupMain.querySelector('.popup__forms');

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

  closeMainPopup(popupMain, formAddNewUser.reset());
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
popupOpenButtonNewUser.addEventListener('click', () => openMainPopup(popupMain));
popupCloseButtonNewUser.addEventListener('click', () => closeMainPopup(popupMain));

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

//универсальные функции открытия, закрытия popup-profile
function openProfileFormButton(elem) {
  elem.classList.add('popup_open-button');
}

function closeProfileFormButton(elem) {
  elem.classList.remove('popup_open-button');
}

// функции открытия и закрытия popup-profile
function realizeOpenProfileFormButton() {
  openProfileFormButton(popupProfile);
}

function realizeCloseProfileFormButton() {
  closeProfileFormButton(popupProfile);

  // получаем новые значения
  const takingElemensValue = {
    name: formInputName.value,
    link: formInputLink.value,
  };
  // создаем новую карту в начале массива
  function renderCard() {
    createCard = () => {
      const newElement = createCardElements(takingElemensValue);
      sectionElements.prepend(newElement);
    };
    createCard();
  }
  renderCard();

  // закрываем форму
  // profileFormCloseButton(profileForm.reset());
}
// получаем значения для отправки формы
function sendClickProfileForm(evt) {
  evt.preventDefault();
  formInputName.value;
  formInputLink.value;
  realizeCloseProfileFormButton();
}

// регистрируем обработчики событий по клику
profileAddButton.addEventListener('click', realizeOpenProfileFormButton);
profileRemoveButton.addEventListener('click', realizeCloseProfileFormButton);
//отправляем форму
profileForm.addEventListener('submit', sendClickProfileForm);

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

// получаем попап увеличения картинки
const profileSlaider = document.querySelector('.popup-slaider');
const profileSlaiderPictures = profileSlaider.querySelector('.popup-slaider__pictires');
const profileSlaiderSubtitle = profileSlaider.querySelector('.popup-slaider__subtitle');
const profileSlaiderClose = profileSlaider.querySelector('.popup-slaider__close');

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
  elementLikeButton.addEventListener('click', hendlerLikeCard);
  elementDeleteButton.addEventListener('click', hendlerDeleteCard);

  //получаем элементы из shadowDom по клику для увеличения картинки
  elementImage.addEventListener('click', function profileSlaiderOpen() {
    profileSlaider.classList.add('popup_open-click');
    profileSlaiderPictures.src = link;
    profileSlaiderSubtitle.textContent = name;
  });

  return elementsCard;
}

//  добавляем новую карту и отправляем форму

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
  profileSlaider.classList.remove('popup_open-click');
}

//слушатель закрытие попап слайдера
profileSlaiderClose.addEventListener('click', removeProfileSlaider);

//слушатель клика за границе profileSlaider
profileSlaider.addEventListener('click', closeProfileSlaiderByClickSite);
