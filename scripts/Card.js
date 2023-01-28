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

    this._elementsCard = elementTemlate.cloneNode(true);
    this._setEventListener();
    //получаем элемент  лайк и удаление со слушателями
    this._elementTitle = this._elementsCard.querySelector('.element__image-title');
    //присваемваем значения
    this._elementTitle.textContent = this._data.name;
    this._elementImage.src = this._data.link;
    this._elementImage.alt = this._data.name;

    //слушатели событий удаления лайка

    return this._elementsCard;
  }

  _setEventListener() {
    const elementLikeButton = this._elementsCard.querySelector('.element__like');
    const elementDeleteButton = this._elementsCard.querySelector('.element__delete');
    this._elementImage = this._elementsCard.querySelector('.element__image');

    elementLikeButton.addEventListener('click', this._hendlerLikeCard);
    elementDeleteButton.addEventListener('click', this._hendlerDeleteCard);
    this._elementImage.addEventListener('click', () => this._watchImageClick(this._data.name, this._data.link));
  }
}
