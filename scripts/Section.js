export default class Section {
  constructor({ items, renderer }, sectionElements) {
    this._items = items; //массив который нужно добавить в index.js

    this._renderer = renderer; //функция которая отвечает за создание новой карты

    this._sectionElements = sectionElements; //контейнер элемента в который нужно добавить элементы
  }

  // Отрисовка всех элементов
  renderItems() {
    this._items.forEach((items, sectionElements) => {
      // Отрисовка каждого отдельного элемента
      this._renderer(items, sectionElements);
    });
  }

  // добавляем элементы в контейнер
  addItem(items, sectionElements) {
    this._renderer.prepend(items, sectionElements);
  }
}
