// функция показа ошибки
const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    error.textContent = '';
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
  } else {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
  }
};

// функция переключения активации кнопки
const toggleButton = (inputs, button, config) => {
  // функция фильтр невалидных инпутов
  const checkEmptyInput = inputs.some(function (input) {
    return input.validity.valid;
  });
  // условия переключения активации кнопки
  if (checkEmptyInput) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
  } else {
    resetButton(button, config);
  }
};

// функция сбрасывания активации кнопки после отправки на сервер
const resetButton = (button, config) => {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = 'disabled';
};

// функция со слушателями сабмит, инпут и массивом инпутов.
const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach((form) => {
    const inputs = [...document.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      resetButton(button, config);
    });

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, config);

        toggleButton(inputs, button, config);
      });
    });
  });
};

// функция с селекторами из задания
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});

// слушатель закрытия модальных окон по нажатию клавишы
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePopup(popupEditProfile);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePopup(profileSlaider);
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePopup(popupNewCard);
  }
});
