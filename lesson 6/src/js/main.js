let startBtn = document.getElementById('start'); // <- должно быть запятой
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue =document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
     monthSavingValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue =document.querySelector('.choose-percent'),
    yearValue = document.querySelector(".year-value"),
    monthValue =  document.querySelector(".month-value"),
    dayValue = document.querySelector( ".day-value"); // <- не должно быть запятой

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
    time = prompt('Введите дату в формате YYYY-MM-DD', '' );
    money = +prompt('Ваш бюджет на меяц?','');

    while(isNaN(money) || money == null || money == '') {
            money = prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timedata = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

let appData = {
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
        saving: false};
   /* chooseExpenses: function() {
        let save = prompt('Какова сумма накоплений?','  '),
        percent = prompt('Под какой процент?','  ');
        appData.MonthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита:' + appData.monthIncome);       
    
    },
    chooseOptExpenses: function() {
    for (i =1; i < 3; i++){
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
            }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую.',' ,');

      if ((typeof(item)=='string') && (items != '')&&( items != null)){
           appData.income = items.split(", ");
        }
           appData.income.forEach(function(a, i, mass) {
                ((i+1) + ':' + a + ", arr = ["+ mass +"]");
            } );
        }
}

appData.budget = money;
appData.timedata = time;
budgetValue.textContent = money.toFixed();
yearValue.value = new Date(Date.parse(time)).getFullYear();
monthValue.value = new Date(Date.parse(time)).getMonth()+1;
dayValue.value = new Date(Date.parse(time)).getDate();
 
expensesItem.addEventListener('ValueChange', function(){
    alert("changed!")
});*/

expensesBtn.addEventListener('click',function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
             b = expensesItem[++i].value;         
           
                    

        if ((typeof(a))!= null && (typeof(b))  != null && 
                            (a != '')&& (b !='') && (a.length < 50)) {
            alert('Всё верно');
            appData.expenses[a]=b;
            sum += +b;
        }else {
            i=i-1;

        }
            }
            
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i=0; i < optionalExpensesItem.length; i++)  {
        let  opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } 
});





countBtn.addEventListener('click', function() {
      if (appData.budget != undefined) {
        appData.moneyPerDay =  (appData.budget/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay; 


    if (appData.moneyPerDay < 100)
    {
        levelValue.textContent = "Минимальный уровень достатка";
    } 
    else if ((100 <= appData.moneyPerDay) && (appData.moneyPerDay < 2000))
    {
        levelValue.textContent = "Средний уровень достатка";   
    }
    else if(appData.moneyPerDay > 2000) {
        levelValue.textContent =  "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
    } else {
     budgetValue.textContent = "Произошла ошибка"; 
    }
    });
    
    incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
     appData.income = items.split(", ");
     incomeValue.textContent = appData.income;
    });
    checkSavings.addEventListener('click', function() {

        if (appData.saving == true) { 
            appData.saving = false;
        } else {
            appData.saving = true;   
        }
        });

      sumValue.addEventListener('input', function() {
        if (appData.saving == true) {
         let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingValue.textContent =  appData.monthIncome.toFixed(1);
            yearSavingValue.textContent =  appData.yearIncome.toFixed(1);
        }
      });
     percentValue.addEventListener('input', function() {
        if (appData.saving == true) {
         
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingValue.textContent =  appData.monthIncome.toFixed(1);
            yearSavingValue.textContent =  appData.yearIncome.toFixed(1);

        }
    });

    /*function detectDayBudget (c) {

        let h = (c/30);
        (h)
        return (h);
    };
incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    if ((typeof(item)=='string') && (items != '')&&( items != null)){
        appData.income = items.split(", ");}
        incomeValue.textContent = appData.income;   
});




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
/*
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
*/
expensesBtn.disabled = true;
let nonEmptyExpensesItems = [];
for (let i = 0; i <= expensesItem.length-1; i++){
    nonEmptyExpensesItems[i] = 0;
    expensesItem[i].addEventListener('change', function(){
        //console.log(this)
        if (this.value == ''){
            expensesBtn.disabled = true;
            nonEmptyExpensesItems[i] = 0;
        }else{
            nonEmptyExpensesItems[i] = 1;
            //console.log(nonEmptyExpensesItems.reduce((a, b) => a + b,0))
            if (nonEmptyExpensesItems.reduce((a, b) => a + b,0) == nonEmptyExpensesItems.length){
                expensesBtn.disabled = false;
            }
        }
        //console.log(nonEmptyExpensesItems)
    });
}
optionalExpensesBtn.disabled = true;
let nonEmptyOptionalExpensesItems = [];
for (let i = 0; i <= OptionalExpensesItem.length-1; i++){
    nonEmptyOptionalExpensesItems[i] = 0;
    optionalExpensesItem[i].addEventListener('change', function(){
        //console.log(this)
        if (this.value == ''){
            optionalExpensesBtn.disabled = true;
            nonEmptyOptionalExpensesItems[i] = 0;
        }else{
            nonEmptyOptionalExpensesItems[i] = 1;
            //console.log(nonEmptyOptionalExpensesItems.reduce((a, b) => a + b,0))
            if (nonEmptyOptionalExpensesItems.reduce((a, b) => a + b,0) == nonEmptyOptionalExpensesItems.length){
                optionalExpensesBtn.disabled = false;
            }
        }
        //console.log(nonEmptyExpensesItems)
    });
}