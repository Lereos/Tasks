/*str, my_str, myStr,a1, $, $а допустимые имена переменных*/

// Переменные 
// Ключевое слово var, let, const 
// Формат LowerCamelCase (верблюжья нотация)

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(second);

// Типы данных, классификация

// Примитивный тип данных

//Строка string 
// двойные кавычки, одинарные кавычки-простые, обратные-имеют расширенный функционал

// let string = "hello';
// console.log(string);
// let name = "Иван"; 
// console.log(name);

//Числа number

//let number = 5;
//console.log(number);

//Специальный тип данных null
//null// специальное значение, которое представляет отсутсутствующий объект

// console.log(something);

//undefined //представляет значение переменной, которая не была инициализирована

// let numb;
// console.log(numb);

//NaN //специальное значение "не число", которая говорит о том, что была выполнена бессмысленная операция

//console.log('string' * 4);

//Infinity //бесконечность

//console.log(4/0);

//Логический тип данных boolean (true, false)

//let boolean = true;
//console.log(boolean);

// Абстрактный тип данных object(}, это набор свойст и значений

//let obj = {};

//let persone = {
//    name: 'kseniya',
//    age: 14,
//    icMarriered: false
//};

//console.log(persone['name']);

//Массив

//let arr = ['plum.jpeg', 'apple.bmp', 'orange.png'];
//console.log(arr[0]);

//Простое общение с пользователем

//alert("hello, Ksenya!");
//alert("ilv");

//let answer = confirm('How are you');
//console.log(answer);

//let answer = promt('18 yesti??????', 'da')
//console.log(answer)

// оператор typeof, для определения типа данных
// let answer = prompt('Есть ли вам 18 лет?', 'Да');
// console.log(typeof(answer));
// оПЕРАТОРЫ js
// унарный +

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

//Инкремент и декремент
//++префиксный инкремент
// --постфиксный инкремент

//let post = 10;
//    decr = 10;

//    console.log(incr++);
//    console.log(--decr);

//Остаток от деления

// console.log(5%2);

//= присваивание 
// == проверка на равенство

//console.log('2' == 2);


//оператор && (и)

//let isChecked = true;
//    isClosed = true;
//consolelog(isChecked && isClosed);

// оператор || (или)

//let isChecked = true;
//    isClosed = true;
//consolelog(isChecked || isClosed)
document.querySelector("#submit1").onclick = function(){
    let obj = ['1', '2', '3', '4', '5']

    for ( let i = 0; i <obj.length; i++) {
        console.log(obj[i])
    }
}

document.querySelector("#submit2").onclick = function(){
    let obj = ['1', '2', '3', '4', '5']
    let result = 0
    for ( let i = 0; i <obj.length; i++) {
        result += Number(obj[i])
    }  console.log(result) 
    
}

document.querySelector("#submit3").onclick = function(){
    let obj = {a: '1',b: '2',c: '3',d: '4',e: '5'}
    for ( let key in obj) {
        console.log(obj[key])
    }
}

document.querySelector("#submit4").onclick = function(){
    let obj = {"kolya" : '200','vasya' : '300',"petya" : '400'}
    for ( let key in obj) {
        console.log(key + ' zarplata ' + obj[key] + ' dollars')
    }
}

document.querySelector("#submit5").onclick = function(){
    let obj = [2, 5 ,9 , 15, 0, 4]
    for ( let i = 0; i < obj.length; i++) {
        if (obj[i] < 3 || obj[i] > 9){
            continue
        }
        console.log(obj[i]);
    }
}

document.querySelector("#submit6").onclick = function(){
    let obj = [-2, 5 ,9 , -4 ,-13, 4, 10]
    let result = 0
    for ( let i = 0; i < obj.length; i++) {
        if (obj[i] < 0){
            continue
        }
        result += obj[i]
    } console.log(result)
}

document.querySelector("#submit7").onclick = function(){
    let obj = [1, 2, 5 ,9 , 4 ,13, 4, 10]
    for ( let i = 0; i < obj.length; i++) {
        if (obj[i] = 4 ){
            console.log('yest');
            break
        }  
    }
}

document.querySelector("#submit8").onclick = function(){
    let obj = [10, 20, 30, 50, 235, 3000]
    for ( let i = 0; i < obj.length; i++) {
        let num = String(obj[i]);
        let char = num[0];
        if (char == 1 || char == 2 || char == 5) {
            console.log(num);
        }
    }
}

document.querySelector("#submit9").onclick = function(){
    let obj = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arr =''
    for ( let i = 0; i < obj.length; i++) {
         arr += '-' + String(obj[i])
    } 
    console.log(arr)
}

document.querySelector("#submit10").onclick = function(){
    let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'сб' || arr[i] == 'вс') {
            document.write('<b>' + arr[i] + '</b> ');
        } else {
            document.write(arr[i] + ' ');
        } 
} 

} 
    

document.querySelector("#submit11").onclick = function(){
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
      var d = new Date();
      var n = d.getDay();
      
      for(let i = 0; i < days.length; i++) {
        document.write(days[i] + ' ')
        if (i == n) {
            document.write('<b>' + days[i]+ '</b>')
        }
      }
 
}

document.querySelector("#submit12").onclick = function(){
    let n = 1000
    for(let i = 1 ; i<n; i++){
        let num = i
        n /= 2 
        if (n < 50) {
            alert(num + ' iterachiy')
            break
        }
    }
}

/*document.querySelector("#submit13").onclick = function(){
    let a = prompt ('Введите число: ');
    let b = prompt ('Введите число: ');
    if (a <= 1 && b >= 5) {
        alert(a+b)
    } else {
        alert(a-b)
    }
}

document.querySelector("#submit14").onclick = function(){
    let a = prompt ('Введите число: ');
    let b = prompt ('Введите число: ');
    if (a > 2 && a < 11 || b >= 6 && a < 14) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}


document.querySelector("#submit15").onclick = function(){
    let num = prompt ('Введите число: ');
    switch (num) {
	    case 1:
	    	alert("зима")
	    break;
	    case 2:
	    	alert("весна")
	    break;
	    case 3:
	    	alert("лето")
	    break;
	    default:
	    	alert("осень")
	    break;
    }   
}

document.querySelector("#submit16").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num/10 < 0) {
        alert("Введите положительное число")
    } if (num/10 > 0) {
        alert("1 декада")
    } if (num/10 > 1) {
        alert("2 декада")
    } if (num/10 > 2) {
        alert("3 декада")
    } else {
        alert("В месяце меньше дней")
    }
}

document.querySelector("#submit17").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num/3 < 0) {
        alert("Введите положительное число")
    } if (num/3 > 0) {
        alert("весна")
    } if (num/3 > 1) {
        alert("лето")
    } if (num/3 > 2) {
        alert("осень")
    } if (num/3 > 3) {
        alert("зима")
    } else {
        alert("В году меньше месяцев")
    }
}

document.querySelector("#submit18").onclick = function(){
    let str = 'abcde';

    if (str[0] == "a") {
	    alert("да");
    } else {
        alert("нет")
    }
}

document.querySelector("#submit19").onclick = function(){
    let str ='12345';

    if (str[1] == "1" || "2" || "3") {
	    alert("да");
    } else {
        alert("нет")
    }
}

document.querySelector("#submit20").onclick = function(){
    let str = '123';
    let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
    alert(sum);
}

document.querySelector("#submit21").onclick = function(){
    let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
}

document.querySelector("#submit22").onclick = function(){
    let str1='Привет,'  
    let str2='Мир!'
    alert(str1+str2)
}

document.querySelector("#submit23").onclick = function(){
    let a = prompt("Ваше имя?")
    alert("Ваше имя " + a)
}

document.querySelector("#submit24").onclick = function(){
    let a = prompt("Ваше число")
    alert("квадрат вашего числа: " + a*a)
}



document.querySelector("#submit1").onclick = function(){
    let number = 150;

    while (number < 155) {
        console.log(number);
        number++ ;
}
}

document.querySelector("#submit2").onclick = function(){
    let number = 150;

    do {
        console.log(number);
        number++;
    }

    while (number < 160)
}


document.querySelector("#submit3").onclick = function(){
    for (let i = 0; i<11; i++) {
        console.log(i);
    }
}

document.querySelector("#submit4").onclick = function(){
    let arr = ('a','b','c','d','e','f','g')

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

document.querySelector("submit5").onclick = function(){
    let obj = {a: 1, b: 2, c: 3};
    for(let key in obj) {
        console.log(obj[key])
    }
}*/