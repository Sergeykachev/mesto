// const forms = [...document.querySelectorAll('.popup__form')];
// const inputs = [...document.querySelectorAll('.popup__input')];
// const title = document.querySelector('.popup__title');
// const titleProfile = document.querySelector('.popup-profile__title');

// const checkInputValidity = (forms, input, config) => {
//   const error = document.querySelector(`#${input.id}-error`);

//   if (input.validity.valid) {
//     error.textContent = '';
//     error.classList.remove(config.errorClass);
//     input.classList.remove(config.inputErrorClass);
//     title.classList.remove('popup__title_disabled');
//     titleProfile.classList.remove('popup__title_disabled');
//   } else {
//     error.textContent = input.validationMessage;
//     error.classList.add(config.errorClass);
//     input.classList.add(config.inputErrorClass);
//     title.classList.add('popup__title_disabled');
//     titleProfile.classList.add('popup__title_disabled');
//   }
// };

// const toggleButton = (inputs, button, config) => {
//   const isFormValid = inputs.some((input) => input.validity.valid);

//   if (isFormValid) {
//     button.classList.remove(config.inactiveButtonClass);
//     button.disabled = '';
//   } else {
//     button.classList.add(config.inactiveButtonClass);
//     button.disabled = 'disabled';
//   }
// };

// const enableValidation = (config) => {
//   const forms = [...document.querySelectorAll(config.formSelector)];

//   forms.forEach((form) => {
//     const inputs = [...document.querySelectorAll(config.inputSelector)];
//     const button = form.querySelector(config.submitButtonSelector);

//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//     });

//     inputs.forEach((input) => {
//       input.addEventListener('input', () => {
//         checkInputValidity(input, config);

//         toggleButton(inputs, button, config);
//       });
//     });
//   });
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible',
// });
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup_input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = (formElement) => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      checkInputValidity(formElement, inputElement);
    });
    setEventListeners(formElement);
  });
};
enableValidation();
