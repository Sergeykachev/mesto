// // функция показа ошибки
// const checkInputValidity = (input, config) => {
//   const error = document.querySelector(`#${input.id}-error`);

//   if (input.validity.valid) {
//     error.textContent = '';
//     error.classList.remove(config.errorClass);
//     input.classList.remove(config.inputErrorClass);
//   } else {
//     error.textContent = input.validationMessage;
//     error.classList.add(config.errorClass);
//     input.classList.add(config.inputErrorClass);
//   }
// };

// // функция переключения активации кнопки
// const toggleButton = (inputs, button, config) => {
//   // функция фильтр невалидных инпутов
//   const checkEmptyInput = inputs.some(function (input) {
//     return input.validity.valid;
//   });
//   // условия переключения активации кнопки
//   if (checkEmptyInput) {
//     button.classList.remove(config.inactiveButtonClass);
//     button.disabled = '';
//   } else {
//     resetButton(button, config);
//   }
// };

// // функция сбрасывания активации кнопки после отправки на сервер
// const resetButton = (button, config) => {
//   button.classList.add(config.inactiveButtonClass);
//   button.disabled = 'disabled';
// };

// // функция со слушателями сабмит, инпут и массивом инпутов.
// const enableValidation = (config) => {
//   const forms = [...document.querySelectorAll(config.formSelector)];

//   forms.forEach((form) => {
//     const inputs = [...document.querySelectorAll(config.inputSelector)];
//     const button = form.querySelector(config.submitButtonSelector);

//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       resetButton(button, config);
//     });

//     inputs.forEach((input) => {
//       input.addEventListener('input', () => {
//         checkInputValidity(input, config);

//         toggleButton(inputs, button, config);
//       });
//     });
//   });
// };

class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  // функция со слушателями сабмит, инпут и массивами инпутов, кнопок и форм.
  enableValidation = () => {
    // forms.forEach((form) => {
    const inputs = [...document.querySelectorAll(this._config.inputSelector)];
    const button = this._form.querySelector(this._config.submitButtonSelector);

    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   _resetButton(button);
    // });

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);

        this._toggleButton(inputs, button);
      });
    });
    // });
  };

  // функция показа ошибки
  _checkInputValidity = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      error.textContent = '';
      error.classList.remove(this._config.errorClass);
      input.classList.remove(this._config.inputErrorClass);
    } else {
      error.textContent = input.validationMessage;
      error.classList.add(this._config.errorClass);
      input.classList.add(this._config.inputErrorClass);
    }
  };

  // функция переключения активации кнопки
  _toggleButton = (inputs, button) => {
    // функция фильтр невалидных инпутов
    const checkEmptyInput = inputs.every(function (input) {
      return input.validity.valid;
    });
    // условия переключения активации кнопки
    if (checkEmptyInput) {
      button.classList.remove(this._config.inactiveButtonClass);
      button.disabled = '';
    } else {
      button.classList.add(this._config.inactiveButtonClass);
      button.disabled = 'disabled';
    }
  };
}

// функция с селекторами из задания
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// const settingsFormNewCard = {
//   inputSelector: '.popup__input-profile',
// };
const form = document.querySelector(settings.formSelector);

const formsValidation = new FormValidator(settings, form);
// const formsValidationNewCard = new FormValidator(settingsFormNewCard, form);

formsValidation.enableValidation();
