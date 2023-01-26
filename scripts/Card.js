//класс Card, который создаёт карточку с текстом и ссылкой на изображение
export class Card {
  constructor(data, cardTemplateSelector, watchImageClick) {
    this._data = data;
    this._cardTemplateSelector = cardTemplateSelector;
    this._watchImageClick = watchImageClick;
  }

  // добавляем лайк
  _hendlerLikeCard = (evt) => {
    evt.target.classList.toggle('element_change-like');
  };

  //удаляем карточку
  _hendlerDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
  };

  _getCardTemplate = () => {
    return document.querySelector(this._cardTemplateSelector).content.querySelector('.element');
  };

  generateNewCard() {
    const elementTemlate = this._getCardTemplate();

    const elementsCard = elementTemlate.cloneNode(true);

    //получаем элемент  лайк и удаление со слушателями
    const elementTitle = elementsCard.querySelector('.element__image-title');
    const elementImage = elementsCard.querySelector('.element__image');
    const elementLikeButton = elementsCard.querySelector('.element__like');
    const elementDeleteButton = elementsCard.querySelector('.element__delete');

    //присваемваем значения
    elementTitle.textContent = this._data.name;
    elementImage.src = this._data.link;
    elementImage.alt = this._data.name;

    //слушатели событий удаления лайка
    elementLikeButton.addEventListener('click', this._hendlerLikeCard);
    elementDeleteButton.addEventListener('click', this._hendlerDeleteCard);
    elementImage.addEventListener('click', () => this._watchImageClick(this._data.name, this._data.link));

    return elementsCard;
  }
}

new Card({ name: '', link: '' }, '.template');
