let money = prompt("Ваш бюджет на месяц?", '');
let    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt ("Во сколько обойдётся?",'');
    
    if ( (typeof(a))=== 'string' && (typeof(a) != null && (typeof(b) != null
          && a !='' && b != '' && a.lenth < 50)))  {
          console.log("done");
          appData.expenses[a] = b;
          } else {
          console.log("try again")
            
        }  
};    
        
/*
appData.moneyPerDay = appData.budget / 30;
                   
alert("Ежедневный бюджет" + appData.moneyPerDay);        
     
if(appData.moneyPerDay < 100) {
     console.log("Минимальный уровень достатка");
} else if (appData.monayPerDay > 100 && appData.monayPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.monayPerDay > 2000) {
        console.log("Высокий уровень достатка");    
} else {
    console.log("Произошла ошибка")
};*/
function detectLevel (money){
   
        //let money = prompt("Ваш бюджет на месяц?", '');
        //let appData = {budget: money};
        
    //appData.moneyPerDay = appData.budjet / 30;
    let moneyPerDay = money/30;
    alert("Ежедневный бюджет" + moneyPerDay);         
    if (moneyPerDay < 100)
    {
    console.log("Минимальный уровень достатка");
    }
    if (100 <= moneyPerDay < 2000)
    {
    console.log("Средний уровень достатка");
    }

    if (moneyPerDay >= 2000)
    {
    console.log("Высокий уровень достатка");
    }
}
 detectLevel(appData.budget)    


appData.moneyPerDay = appData.budget/30;

alert(appData.budget/30);

let a;
let b;
let i = 0;
do { 
    a = prompt ("Введите обязательную статью расходов", "");
    b = prompt ("Во сколько обойдется?", "");
    if((typeof(a)==="string") && (typeof(a) != null) && (typeof(b) != null)
    && (a !="") && (b != ""))
    {
        appData.expenses[a] = b;
        i++;
    }
} while ((i < 3))
    console.log("done");
    




    // Функции

    function detectDayBudget (c) {
      
       let h = (c / 30);
       console.log (h)
       return (h);
    };
     detectDayBudget();

     function chooseOptExpences() {
     let a;
     let optionalExpences = {};
         for(i = 0; i < 3; i++){
            a = prompt("Введите  статью необязательных расходов в этом месяце",'');
            optionalExpences[i] =  a;
         }
        return optionalExpences;
    }


