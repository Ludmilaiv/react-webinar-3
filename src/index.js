import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';
import {codeGen} from './utils.js';

const store = new Store({
  list: [
    {code: codeGen(), title: 'Название элемента', focusCount: 0},
    {code: codeGen(), title: 'Некий объект', focusCount: 0},
    {code: codeGen(), title: 'Заголовок', focusCount: 0},
    {code: codeGen(), title: 'Очень длинное название элемента из семи слов', focusCount: 0},
    {code: codeGen(), title: 'Запись', focusCount: 0},
    {code: codeGen(), title: 'Шестая запись', focusCount: 0},
    {code: codeGen(), title: 'Седьмая запись', focusCount: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
