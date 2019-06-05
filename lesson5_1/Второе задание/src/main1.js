let start = document.getElementById('start'); // <- должно быть запятой
    budval = document.getElementsByClassName('budget-value'),
    dbdval =document.getElementsByClassName('daybudget-value'),
    levval = document.getElementsByClassName('level-value'),
    expval = document.getElementsByClassName('expenses-value'),
    incval = document.getElementsByClassName("income-value"),
     monsavval = document.getElementsByClassName("monthsavings-value"),
    yeasavval = document.getElementsByClassName("yearsavings-value"),
    yerval = document.getElementsByClassName("year-value"),
    monval =  document.getElementsByClassName("month-value"),
    dayval = document.getElementsByClassName( "day-value"); // <- не должно быть запятой

    let input = document.getElementsByClassName('expenses-item'),
    count = document.getElementsByTagName('button')[2],
     btnaffirm1 = document.getElementsByTagName('button')[0],
     btnaffirm2 = document.getElementsByTagName('button')[1];

     let optexp = document.querySelectorAll('optionalexpenses-item');
     let month = document.querySelector('month'),
      year = document.querySelector('year'),
      timedata = document.querySelector('time-data'),
      chinc = document.querySelector('choose-income'),
      checksav = document.querySelector('checksaving'),
      choosesum = document.querySelector('choose-sum'),
      choosepec = document.querySelector ('choose-percent');

      let money, time;

      

           startBtn.addEventListener('click', function() {
            time = prompt('Введите дату в формате YYYY-MM-DD', '   ' );
            money = prompt('Ваш бюджет на месяц?','    ');

            while(isNaN(money) || money == null) {
                 money = prompt('Ваш бюджет?', '');
            }
            appData.budget = money;
            appData.timedata = time;
            budgetValue.textContent = money.toFixed();
            yearValue.value = new Date(Date.parse(time));
           });

           let appData = {budget: money,
                expenses:{},
                optionalExpenses:{},
                income:[],
                timeData: time,
              saving: true,
                 chooseExpenses: function() {
                for (let i = 0; i < 2; i++) {
                let a = prompt('Введите обязательную статью расходов в этом месяце', '  ');
                b = prompt ('Во сколько обойдётся?','  ');
                               
              
  if ((typeof(a))!= null && (typeof(b))  != null && (a != '')&& (b !='') && (a.length < 50)) {
  console.log('Всё верно');
  appData.expenses[a]=b;
}else {
     i=i-1;
   
 }
   }
},

  heckSaving: function() {
      if (appData.saving == true){ 
          let save = prompt('Какова сумма накоплений?','  '),
          percent = prompt('Под какой процент?','  ');
          appData.MonthIncome = save/100/12*percent;
          alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
       for (i =1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
       }
  } ,  
  chooseIncome: function() {
           let items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую.',' ,');

       if ((typeof(item)=='string') && (items != '')&&( items != null)){
            appData.income = items.split(", ");
       }
            appData.income.forEach(function(a, i, mass) {
                 console.log((i+1) + ':' + a + ", arr = ["+ mass +"]");
             } );
       }

  } ,
  function detectLevel(money) {

       let moneyPerDay = money/30;
       alert ("Ежедневный бюджет: "+ moneyPerDay);
       if (moneyPerDay < 100)
       {
            console.log("Минимальный уровень достатка");
  } 
   if ((100 <= moneyPerDay) && (monayPerDay < 2000))
   {
        console.log("Средний уровень достатка");
   }
}
detectLevel(appData.budget)

let a;
let b;
let i = 0;
do {
     a = prompt ("Введите обязательную статью расходов","");
     b = prompt("Во сколько обойдётся?", "");
     if((typeof(a)==="string") && (typeof(a) != null) && (typeof(b) != null)
     &&(a !="") && ( b!= ""))
     {
          appData.espenses[a] = b;
          i++;
     }

} while((i < 3))
 console.log("done");

 function detectDayBudget (c) {

     let h = (c/30);
     console.log(h)
     return (h);
 };
 appData.moneyPerDay = detectDayBudget(appData.budget);

 appData.chooseExpenses();
 appData.chooseIncome();
 appData.chooseOptExpenses();

 console.log('Наша программа включает в себя данные:');
 for(var propName in appData) {
      console.log("Свойство:" + propName +  "Значение:" + appData[propName]);
 }




