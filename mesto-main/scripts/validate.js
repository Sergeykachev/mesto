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

const toggleButton = (inputs, button, config) => {
  const checkEmptyInput = inputs.filter(function (input) {
    return !input.validity.valid;
  }).length;

  if (checkEmptyInput <= 2) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  }
};

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach((form) => {
    const inputs = [...document.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, config);

        toggleButton(inputs, button, config);
      });
    });
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMainPopup(popupEditProfile);
    closeMainPopup(popupNewCard);
  }
});
