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
