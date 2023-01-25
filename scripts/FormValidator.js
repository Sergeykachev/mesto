export class FormValidation {
  constructor(config, form) {
    this._form = form;
    this._config = config;
  }

  enableValidation() {
    const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const button = this._form.querySelector(this._config.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);

        this._toggleButton(inputs, button);
      });
    });
  }

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
    const checkEmptyInput = inputs.some(function (input) {
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
