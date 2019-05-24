
/*function function1() {    
var pnt = document.getElementById('menu-item');

document.body.insertBefore (pnt[2], pnt[1])};

function function2() {

 var ul = document.getElementByTagName('menu');

// var pnt = document.createElement('pnt'),
 //   li = uppendChild(document.createTextNode('абббаЙ аПбаНаКб'));
  
  let li = document.createElement('li');

  li.classList.add('menu-item');
  li.textContent = 'абббаЙ аПбаНаКб';
  ul.uppendChild('li');
};
function function3() {
   
  titl.title = 'аб аПбаОаДаАбаМ баОаЛбаКаО аПаОаДаЛаИаНаНбб баЕбаНаИаКб Apple';
  var column = getElementByClassName('column');
  document.body.removeChild('column');
var a = takeElementByID('prompt')
  a = prompt('ааАаК аВб аОбаНаОбаИбаЕбб аК баЕбаНаИаКаЕ Apple?',  ''),
  console.log(a);
}*/
let title = document.getElementById('title'),
    li = document.getElementsByTagName('li'),
    ul = document.getElementsByTagName('ul')[0],
    column = document.querySelector('.column'),
    oneColumn = document.querySelectorAll('.column')[1],
    adv = document.getElementsByClassName('adv')[0],
    promptObj = document.getElementById('prompt');
    //title = document.getElementById('title');
    console.log(title);
    console.log(li);
    console.log(li[1]);
    console.log(oneColumn);
    console.log(column);
    console.log(adv);
    console.log(prompt);
    //console.log(title);

    let newLi = document.createElement('li');
    newLi.classList.add('menu-item');
    newLi.innerHTML = 'Пятый пункт';
    ul.appendChild(newLi);
    ul.insertBefore(li[2], li[1]);
    oneColumn.removeChild(adv);

    document.body.style.backgroundImage = "url('./img/apple_true.jpg')"

    title.textContent = title.textContent.replace("технику", "подлинную технику");

    let answer = prompt('Как вы относитесь к технике Apple?', ' ' );
        console.log (answer);
 