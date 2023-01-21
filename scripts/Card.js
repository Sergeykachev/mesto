// //массив элементов карточек

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
//   },
// ];

// //все карточки должны увеличиваться
// //все формы должны валидироваться
// //получаю элементы
// // const sectionElementsClass = document.querySelector('.elements');

// // const elementTemlateClass = document.querySelector('.template').content.querySelector('.element');
// // const elementsCardClass = elementTemlateClass.cloneNode(true);
// // const elementTitleClass = elementsCardClass.querySelector('.element__image-title');
// // const elementImageClass = elementsCardClass.querySelector('.element__image');
// // const elementLikeButtonClass = elementsCardClass.querySelector('.element__like');
// // const elementDeleteButtonClass = elementsCardClass.querySelector('.element__delete');

// // const profileAddButton = document.querySelector('.profile__add-button'); //кнопка открытия модального окна добавления карточки

// // получаем попап увеличения картинки
// // const profileSlaider = document.querySelector('.popup-slaider');
// // const profileSlaiderPictures = profileSlaider.querySelector('.popup-slaider__pictires');
// // const profileSlaiderSubtitle = profileSlaider.querySelector('.popup-slaider__subtitle');
// // const profileSlaiderCloseButton = profileSlaider.querySelector('.popup-slaider__close');

// const formInputName = document.querySelector('.popup__input_form_name-element');
// const formInputLink = document.querySelector('.popup__input_form_link-element');
// const profileCreateButton = popupNewCard.querySelector('.popup-profile__create');

// //класс Card, который создаёт карточку с текстом и ссылкой на изображение
// class Card {
//   constructor(data, templateSelector) {
//     this._name = data.name;
//     this._link = data.link;
//     this._like = data.like;
//     this._del = data.del;
//     this._templateSelector = templateSelector;
//   }

//   _getTemplate() {
//     const elementTemlate = document
//       .querySelector(this._templateSelector)
//       .content.querySelector('.element')
//       .cloneNode(true);

//     return elementTemlate;
//   }

//   generateNewCard() {
//     this._element.querySelector('.element__image-title').textContent = formInputName._name;
//     this._element.querySelector('.element__image').src = formInputLink._link;

//     return this._element;
//   }

//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();
//     this._element.querySelector('.element__image-title').textContent = this._name;
//     this._element.querySelector('.element__image').src = this._link;

//     return this._element;
//   }
//   //СЛУШАТЕЛИ
//   _setEventListeners() {
//     this._element.querySelector('.element__like').addEventListener('click', () => {
//       this._hendlerLikeCard();
//     });
//     this._element.querySelector('.element__delete').addEventListener('click', () => {
//       this._hendlerDeleteCard();
//     });
//   }

//   // добавляем лайк
//   _hendlerLikeCard() {
//     this._element.querySelector('.element__like').classList.toggle('element_change-like');
//   }

//   //удаляем карточку
//   _hendlerDeleteCard() {
//     this._element.querySelector('.element__delete').closest('.element').remove();
//   }
// }

// initialCards.forEach((item) => {
//   const card = new Card(item, '.template');
//   const cardElement = card.generateCard();

//   document.querySelector('.elements').prepend(cardElement);

//   profileCreateButton.addEventListener('click', () => {
//     const newCard = new Card(item, '.template');
//     const newCardElement = newCard.generateNewCard();

//     document.querySelector('.elements').prepend(newCardElement);
//   });
// });

// // class AddCard extends Card {
// //   constructor(data, templateSelector) {
// //     this._name = data.name;
// //     this._link = data.link;
// //     this._like = data.like;
// //     this._del = data.del;
// //     this._templateSelector = templateSelector;
// //   }

// //   generateCard() {
// //     this._element = this._getTemplate();
// //     this._setEventListeners();
// //     this._element.querySelector('.element__image-title').textContent = this._name;
// //     this._element.querySelector('.element__image').src = this._link;
// //     this._element.querySelector('.element__like');
// //     this._element.querySelector('.element__delete');

// //     return this._element;
// //   }
// // }
