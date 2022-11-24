// делаем выборку дом элементов
let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let profileElement = document.querySelector('.profile');

// Находим форму в DOM
let mainForm = popupElement.querySelector('.popup__forms');

// Находим поля формы в DOM
let formElementName = mainForm.querySelector('.popup__input_form_name');
let formElementAbout = mainForm.querySelector('.popup__input_form_about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function saveFormClick(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей formElementName и formElementAbout из свойства value
  formElementName.value;
  formElementAbout.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  let profileElementTitle = profileElement.querySelector('.profile__title');
  let profileElementSubtitle = profileElement.querySelector('.profile__subtitle');

  // Вставьте новые значения с помощью textContent
  formElementName.value = profileElementTitle.textContent;
  formElementAbout.value = profileElementSubtitle.textContent;

  closePopup();
}

//подключаем popup

let openPopup = function () {
  popupElement.classList.add('popup_open');
};

let closePopup = function () {
  popupElement.classList.remove('popup_open');
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
mainForm.addEventListener('submit', saveFormClick);
// регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
