// записываем значение
localStorage.setItem('number', 1);
// получаем значение
localStorage.getItem('number');
// удаляем ключ
localStorage.removeItem('number');
// очистить данные
localStorage.clear();

// практика с формой
window.addEventListener('DOMContentLoaded', function () {
  let checkbox = document.getElementById('rememberMe'),
    change = document.getElementById('change'),
    form = document.getElementsByName('form')[0];

  // если isChecked уже нажат, то после обновление страницы 
  // держим чекбокс отмеченным
  if (localStorage.getItem('isChecked') == true) {
    checkbox.checked = true;
  }

  // оставляем цвет формы, если есть ключ
  if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#FF4766';
  }

  // если я нажимаю на чекбок, то у нас 
  // появляется новое значение
  checkbox.addEventListener('click', () => {
    localStorage.setItem('isChecked', true);
  });

  // меняем цвет формы
  change.addEventListener('click', () => {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = '#FF4766';
  });

  let persone = {
    name: 'Alex',
    age: 25,
    tech: ['mobile', 'notebook']
  };

  // превращаем объект в правильный формат jsona
  // и создаем ключ с объектом
  let serializedPersone = JSON.stringify(persone);
  localStorage.setItem('Alex', serializedPersone);

  // получаем данные в понятном для JS
  JSON.parse(localStorage.getItem('Alex'));
});