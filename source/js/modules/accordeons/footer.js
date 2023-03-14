const iconPlus = document.querySelector('.footer__accordeon-icon--plus');
const iconMinus = document.querySelector('.footer__accordeon-icon--minus');
const accordeons = document.querySelectorAll('.js-accordion');

function findElements(object, element) {
  const instance = object; // шаг 3 тут пустота пока
  instance.element = element; // шаг 4 а теперь мы сюда помещаем заголовок (ну тот самый js-accordion, каждый)
  instance.target = element.nextElementSibling; // шаг 5 а сюда мы помещаем то что надо будет открывать, то есть каждый следующий элемент после нашего js-accordion (это как соседний в css через + делается). То есть эта штука возьмет и найдет соседа следующего после js-accordion а это будет answer.
}

function hideElement(object) {
  for (let i = 0; i < accordeons.length; i++) {
    accordeons[i].style.height = 'null';
    iconMinus.style.display = 'none';
    iconPlus.style.display = 'block';
  }
  const instance = object;
  const {target} = instance;
  target.style.height = null;
  instance.isActive = false;
}

function showElement(object) {
  for (let i = 0; i < accordeons.length; i++) {
    accordeons[i].style.height = 'null';
    iconMinus.style.display = 'block';
    iconPlus.style.display = 'none';
  }
  const instance = object;
  const {target, height} = instance;
  target.style.height = `${height}px`; // шаг 10 на answer навесили сохранненую высоту
  instance.isActive = true; // шаг 11 теперь каждая часть аккордеона (каждый элемент массива) после клика на него будет активным (открытым)
}

function changeElementStatus(instance) {
  if (instance.isActive) { // ша 12 когда на элемент кликнули 2-й раз тут будет уже true
    hideElement(instance);
  } else {
    showElement(instance); // шаг 9 на первую итерацию цикла и первый клик на элемент – выполнится это
  }
}

function measureHeight(object) {
  const instance = object; // шаг 6 тут теперь уже не пусто, тут те самые параметры что в findElements
  instance.height = object.target.firstElementChild.clientHeight; // шаг 7 сохраняем высоту каждого answer
}

function subscribe(instance) {
  instance.element.addEventListener('click', (event) => { // шаг 8 на каждый js-accordion вешаем слушатель клика
    event.preventDefault();
    changeElementStatus(instance);
  });
  window.addEventListener('resize', () => measureHeight(instance)); // слушает изменение размера окна браузера (ну или вьюпорта) и меняет исходя из этого высоту каждого target (ну или answer)
}

function accordion(element) { // эта функция будет выполняться для каждого элемента
  const instance = {};

  function init() {
    closeAccordions();
    findElements(instance, element);
    measureHeight(instance);
    subscribe(instance);
  }

  init();
}

function closeAccordions() {
  for (let i = 0; i < accordeons.length; i++) {
    accordeons[i].style.height = 'null';
  }
}

const elements = [...document.querySelectorAll('.js-accordion')]; // шаг 1 – записываем все элементы аккордеона
const accordionRealisation = elements.forEach(accordion); // шаг 2 проходим по всем элементам функцией accordion

export {accordionRealisation};
