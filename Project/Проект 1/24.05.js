let money = prompt('Ващ бюджет на месяц? Введите цифру.');
let time = prompt ('Введите дату в формате YYYY-MM-DD');
let Expenses = {};
let optionalExpenses = {};
let income = {};
let appData = {
    budget: money,
    timeData: time,
    expenses_0: Expenses,
    expenses_1: optionalExpenses,
    expenses_2: income,
    savings: false
};
/ appData["budget"] = money;
alert (appData["budget"]);
Expenses["Ответ на первый вопрос"] = prompt ("Введите обязательную статью расходов в этом месяце!");
Expenses ["Ответ на второй вопрос"] = prompt ("Во сколько обойдётся?");
alert (`Ваш бюджет на день${money / 30} рублей`);
alert (appData["timeData"]);
