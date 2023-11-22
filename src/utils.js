const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

// Массив случайных кодов, сгенерированных в рамках сессии для соблюдения уникальности
const randomCodes = []

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function codeGen() {
  let code = Math.floor((Math.random()*1000)+1);
  while (randomCodes.find((el) => el === code) && randomCodes.length < 1000) {
    code = Math.floor((Math.random()*10)+1);
  }
  randomCodes.push(code);
  return code;
}



