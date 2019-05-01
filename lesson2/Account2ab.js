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
        

appData.moneyPerDay = appData.budjet / 30;
                   
alert("Ежедневный бюджет" + appData.moneyPerDay);        
     
if(appData.moneyPerDay < 100) {
     console.log("Минимальный уровень достатка");
} else if (appData.monayPerDay > 100 && appData.monayPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.monayPerDay > 2000) {
        console.log("Высокий уровень достатка");    
} else {
    console.log("Произошла ошибка")
};
     


appData.moneyPerDay = apdata.budget/30;

        alert(apdata.budget/30);

/*
 let j = 0
while (j < 2)
 {
   let a = prompt("Введите обязательную статью расходов в этом месяце",''), 
        b = prompt ("Во сколько обойдётся?",'');

if ( (typeof(a))=== 'string' && (typeof(a) != null && (typeof(b) != null
     && a !='' && b != '' && a.lenth < 50)))  {
     console.log("done");
    appData.expenses[a] = b;
     } else {
      console.log("try again")
        
    }  
   j++;
}     
*/
/*
let i = 0; 
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце",''), 
    b = prompt ("Во сколько обойдётся?",'');
    if ( (typeof(a))=== 'string' && (typeof(a) != null && (typeof(b) != null
        && a !='' && b != '' && a.lenth < 50))) 
         { 
             console.log("done");
           appData.expenses[a] = b;
        }

       else
        {
            console.log("try again")
        }

    i++                  
}while (i<2); 
*/