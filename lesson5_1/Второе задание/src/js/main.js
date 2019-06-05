let startBtn = document.getElementById('start'); // <- должно быть запятой
    budval = document.getElementsByClassName('budget-value')[0],
    dbdval =document.getElementsByClassName('daybudget-value')[0],
    levval = document.getElementsByClassName('level-value')[0],
    expval = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue =document.getElementsByClassName('optionalexpenses-value')[0],
    incval = document.getElementsByClassName("income-value")[0],
     monsavValue = document.getElementsByClassName("monthsavings-value")[0],
    yeasavValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('choose-incom'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue =document.querySelector('.choose-percent'),
    yearValue = document.getElementsByClassName("year-value"),
    monthValue =  document.getElementsByClassName("month-value"),
    dayValue = document.getElementsByClassName( "day-value"); // <- не должно быть запятой

    let input = document.getElementsByClassName('expenses-item'),
    count = document.getElementsByTagName('button')[2],
     btnaffirm1 = document.getElementsByTagName('button')[0],
     btnaffirm2 = document.getElementsByTagName('button')[1];

     let optexp = document.querySelectorAll('optionalexpenses-item'),
      month = document.querySelector('month'),
      year = document.querySelector('year'),
      timedata = document.querySelector('time-data'),
      chinc = document.querySelector('choose-income'),
      checksav = document.querySelector('checksaving'),
      choosesum = document.querySelector('choose-sum'),
      choosepec = document.querySelector ('choose-percent');

      let money, time;

      
           startBtn.addEventListener('click', function() {
            time = prompt('Введите дату в формате YYYY-MM-DD', '   ' );
            money = prompt('Ваш бюджет на меяц?','    ');

            while(isNaN(money) || money == null) {
                 money = prompt('Ваш бюджет?', '');
            }
            appData.budget = money;
            appData.timedata = time;
            budgetValue.textContent = money.toFixed();
            yearValue.value = new Date(Date.parse(time)).getFullYear();
            monthValue.value = new Date(Date.parse(time)).getMonth()+1;
            dayValue.value = new Date(Date.parse(time)).getDate();
     

            expensesBtn.eddEventListener('click',function() {
                       let sum = 0;

                       for (let i = 0; i < expenses.length; i++) {
                         let a = expensesItem.lenth[i].value,
                         b = expensesItem[++i];
                                        
                       
           if ((typeof(a))!= null && (typeof(b))  != null && (a != '')&& (b !='') && (a.length < 50)) {
           ('Всё верно');
           appData.expenses[a]=b;
           sum += +b;
         }else {
              i=i-1;
            
          }
            }
            expensesValue.textContent = sum;
            });
           optionalexpensesBtn.addEventListener('click', function() {
           for(let i=0; i < optionalexpensesItem.lenth; i++)  {
               let  opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent <= appData.optionalExpenses[i] + '';

           } 
           });
           function detectDayBudget (c) {

               let h = (c/30);
               (h)
               return (h);
           };


          countBtn.addEventListener('click', function() {
               if (appData.budget != undefined) {
           appData.moneyPerDay =  (appData.budget/30).toFixed();
           daybudgetValue.textContent = appData.moneyPerDay; 
           appData.moneyPerDay = detectDayBudget(appData.budget);

           
            if (moneyPerDay < 100)
               {
               levelValue.textContent = "Минимальный уровень достатка";
          } 
           else if ((100 <= moneyPerDay) && (monayPerDay < 2000))
           {
               levelValue.textContent = "Средний уровень достатка";
             
           }
           else if(moneyPerDay > 2000) {
               levelValue.textContent =  "Высокий уровень достатка";
           } else {
               levelValue.textContent = "Произошла ошибка";
           }
          } else {
             daybudgetValue.textContent =  "Произошла ошибка";
          }
          });

          incomeItem.addEventListener('input', function() {
               let items = incomeItem.value;
               if ((typeof(item)=='string') && (items != '')&&( items != null)){
                    appData.income = items.split(", ");}
                    incomeValue.textContent = appData.income;
               
          });
          checkSavings.addEventListener('click', function() {

               if (appData.saving == true) { 
                    appData.saving = false;
               } else {
                   appData.saving = true;   
               }
              });

           let appData = {budget: money,
                expenses:{},
                optionalExpenses:{},
                income:[],
                timeData: time,
              saving: true,
                 chooseExpenses: function() {
                    let save = prompt('Какова сумма накоплений?','  '),
                    percent = prompt('Под какой процент?','  ');
                    appData.MonthIncome = save/100/12*percent;
                    alert('Доход в месяц с вашего депозита:' + appData.monthIncome);       
               
},
      chooseOptExpenses: function() {
       for (i =1; i < 3; i++)
                    let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
       },
       chooseIncome: function() {
          let items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую.',' ,');

      if ((typeof(item)=='string') && (items != '')&&( items != null)){
           appData.income = items.split(", ");
      }
           appData.income.forEach(function(a, i, mass) {
                ((i+1) + ':' + a + ", arr = ["+ mass +"]");
            } );

/*tectDayBudget: function() {
   /*  detectLevel: function() {  */
   /* alert('Ежедневный бюджет' + appData.moneyPerDay);
}

},*/




 
  
 /* function detectLevel(money) {

       let moneyPerDay = money/30;
       alert ("Ежедневный бюджет: "+ moneyPerDay);
       
 }

detectLevel(appData.budget)*/

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
 ("done");

 
 

 appData.chooseExpenses();
appData.chooseIncome();
appData.chooseOptExpenses();    

console.log ('Наша программа включает в себя данные:');
for (var propName in appData) {
    console.log ("Свойство: " + propName +  "; Значение: " + appData[propName]);}

 