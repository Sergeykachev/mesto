export class FormValidation {
  constructor(config, form) {
    this._form = form;
    this._config = config;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);

        this._toggleButton(this._inputs, this._button);
      });
    });
  }

  // функция показа ошибки
  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputErrors(input, input.validationMessage);
    } else {
      this._hideInputErrors(input);
    }
  };

  _showInputErrors = (input, errorMessage) => {
    const error = this._form.querySelector(`#${input.id}-error`);

    input.classList.add(this._config.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._config.errorClass);
  };

  _hideInputErrors = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.classList.remove(this._config.errorClass);
    input.classList.remove(this._config.inputErrorClass);
    error.textContent = '';
  };

  // функция фильтр невалидных инпутов
  _hasInvalidInput = (inputs) => {
    return inputs.some(function (input) {
      return !input.validity.valid;
    });
  };

  // функция переключения активации кнопки
  _toggleButton = (inputs) => {
    // условия переключения активации кнопки
    if (this._hasInvalidInput(inputs)) {
      this._disabledSubmitButton(this._button);
    } else {
      this._enableSubmitButton(this._button);
    }
  };

  _enableSubmitButton = (button) => {
    button.classList.remove(this._config.inactiveButtonClass);
    button.disabled = '';
  };

  _disabledSubmitButton = (button) => {
    button.classList.add(this._config.inactiveButtonClass);
    button.disabled = 'disabled';
  };
}
