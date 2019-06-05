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

      function start() {
      }
           start();

           startBtn.addEventListener('click', function() {
            time = prompt('Введите дату в формате YYYY-MM-DD', '   ' );
            money = prompt('Ваш бюджет на месяц','    ');

            while(isNaN(money) || money == null) {
                 money = prompt('Ваш бюджет?', '');
            }
            appData.budget = money;
                       });

      