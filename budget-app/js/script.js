'use strict';

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  buttons = document.querySelectorAll('button');

let money, time;


// событие при нажатии на кнопку [начать расчет]
startBtn.addEventListener('click', function () {
  // если программа еще не запущена, то кнопки неактивные
  buttons.forEach(item => {
    item.removeAttribute('disabled');
  });
  
  // принимаем от пользователя дату, далее ее форматируем в верный формат
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  // принимаеи от пользователя бюджет на месяц (только число)
  money = +prompt("Ваш бюджет на месяц?", '');

  // проверяем и принимаем только в правильном формате
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }

  appData.budget = money;
  appData.timeData = time;
  // выводим исправленную версию числа на экран
  budgetValue.textContent = money.toFixed();
  // создаем дату (год)
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  // создаем дату (месяц), выводит только 11 месяцев, поэтому + 1
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  // создаем дату (день)
  dayValue.value = new Date(Date.parse(time)).getDate();
});

// событие при нажатии на кнопку [утвердить] обязательные расходы
expensesBtn.addEventListener('click', function () {
  let sum = 0;

  // цикл для перебора всех input, суммируем все цифры и выводим общее
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

// событие при нажатии на кнопку [утвердить] необязательные расходы
// перебор всех input и вывод всех полей с расходами
optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

// событие при нажатии на кнопку [рассчитать] дневной бюджет
countBtn.addEventListener('click', function () {
  // проверка на пустое поле бюджета
  if (appData.budget != undefined) {
    // делим общий бюджет (минус обязательные расходы) на количество дней и закругляем число
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    // выводим число на экран
    dayBudgetValue.textContent = appData.moneyPerDay;

    // выводим уровень достатка, зависимый от дохода и бюджета на день
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    // выводим ошибку, если пустое поле бюджета
    dayBudgetValue.textContent = 'Произошла ошибка';
    dayBudgetValue.style.color = 'red';
  }
});

// событие на изменение input
incomeItem.addEventListener('input', function () {
  // берем значение из написанной информации пользователем
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

// событие накоплений [checkbox]
checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

// событие расчета накоплений за год и месяц
sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    // сохраняем написанные пользователем данные в переменные
    let sum = +sumValue.value,
        percent = +percentValue.value;

        // процент на 1 месяц и 1 год
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        // выводим на экран проценты на месяц и год
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

// событие расчета накоплений за год и месяц (percent)
percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    // сохраняем написанные пользователем данные в переменные
    let sum = +sumValue.value,
        percent = +percentValue.value;

        // процент на 1 месяц и 1 год
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        // выводим на экран проценты на месяц и год
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};