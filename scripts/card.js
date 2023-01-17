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

//получаю элементы, добавляю класс в название, чтобы не перезаписать.
const sectionElementsClass = document.querySelector('.elements');

const elementTemlateClass = document.querySelector('.template').content.querySelector('.element');
const elementsCardClass = elementTemlateClass.cloneNode(true);
//получаем элемент  лайк и удаление со слушателями
const elementTitleClass = elementsCardClass.querySelector('.element__image-title');
const elementImageClass = elementsCardClass.querySelector('.element__image');
const elementLikeButtonClass = elementsCardClass.querySelector('.element__like');
const elementDeleteButtonClass = elementsCardClass.querySelector('.element__delete');

//класс Card, который создаёт карточку с текстом и ссылкой на изображение
class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.like;
    this._del = data.del;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const elementTemlate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return elementTemlate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__image-title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__like');
    this._element.querySelector('.element__delete');

    return this._element;
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._openPopup(elem);
    });

    popupCloseButtonNewUser.addEventListener('click', () => {
      this._closePopup(elem);
    });
  }

  //универсальные функции открытия, закрытия popup
  _openPopup(elem) {
    elem.classList.add('popup_open');
    document.addEventListener('keydown', closeByEsc);
  }

  _closePopup(elem) {
    elem.classList.remove('popup_open');
    document.removeEventListener('keydown', closeByEsc);
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});
