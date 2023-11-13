let display = document.querySelector('[data-display]');
let btn9 = document.querySelector('[data-9]');
btn9.addEventListener('click', ()=> addValue(btn9.value))
// ()=> is an annonymous fx callBack. This makes sure alert is ONLY popping 
// when button is pressed


let btn8 = document.querySelector('[data-8]');
btn8.addEventListener('click', ()=> addValue(btn8.value))
let btn7 = document.querySelector('[data-7]');
btn7.addEventListener('click', ()=> addValue(btn7.value))
let btn6 = document.querySelector('[data-6]');
btn6.addEventListener('click', ()=> addValue(btn6.value))
let btn5 = document.querySelector('[data-5]');
btn5.addEventListener('click', ()=> addValue(btn5.value))
let btn4 = document.querySelector('[data-4]');
btn4.addEventListener('click', ()=> addValue(btn4.value))
let btn3 = document.querySelector('[data-3]');
btn3.addEventListener('click', ()=> addValue(btn3.value))
let btn2 = document.querySelector('[data-2]');
btn2.addEventListener('click', ()=> addValue(btn2.value))
let btn1 = document.querySelector('[data-1]');
btn1.addEventListener('click', ()=> addValue(btn1.value))
let btn0 = document.querySelector('[data-0]');
btn0.addEventListener('click', ()=> addValue(btn0.value))
let plus = document.querySelector('[data-plus]');
plus.addEventListener('click', ()=> addValue(plus.value))
let dot = document.querySelector('[data-dot]');
dot.addEventListener('click', ()=> addValue(dot.value))
let subtract = document.querySelector('[data-subtract]');
subtract.addEventListener('click', ()=> addValue(subtract.value))
let times = document.querySelector('[data-times]');
times.addEventListener('click', ()=> addValue(times.value))
let divide = document.querySelector('[data-divide]');
divide.addEventListener('click', ()=> addValue(divide.value))
let clear = document.querySelector('[data-clear]');
clear.addEventListener('click', ()=> clearDisplay(display))

let equal = document.querySelector('[data-equal]');
equal.addEventListener('click', ()=> equalTo(display.value))

function clearDisplay(a){
    display.value = ' ';
}

function addValue(value){
    display.value += value;
    function anotherFunction(){
        // a callback fx = a function w/in another function

    }
}

function equalTo(x){
    answer = eval(x);
    console.log(answer);
    display.value = answer;
}
 
