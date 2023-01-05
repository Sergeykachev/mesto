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

  closeMainPopup(popupEditProfile, formAddNewUser.reset());
}

//получение значений в форму profile после открытия

function getValueForProfileForm() {
  // formInputNewUserName.value = profileElementTitle.textContent;
  // formInputNewUserAbout.value = profileElementSubtitle.textContent;
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
