let money = 0 ;
let time = 0;


money = prompt("Ваш бюджет на месяц?",money);
console.log(money);

time = prompt("Введите дату в фортмате YYYY.MM,DD",time);
console.log (time);

 appData = {moneyData: money,
     timeData: time,
      expenses: {},
      optionalExpenses: {},
       income : [],
       saving : false
    };

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "ответ на первый вопрос");
console.log(answer1);
let answer2 = prompt("Во сколько обойдётся?", "ответ на второй вопрос");
console.log(answer2);
appData.expenses[answer1] = answer2;

answer1 = prompt("Введите обязательную статью расходов в этом месяце", "ответ на первый вопрос");
console.log(answer1);
answer2 = prompt("Во сколько обойдётся?", "ответ на второй вопрос");
console.log(answer2);
appData.expenses[answer1] = answer2;

alert("бюджет на один день: "+appData.moneyData/30)