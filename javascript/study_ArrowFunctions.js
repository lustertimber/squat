'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력

console.log("_> Load completed : study_ArrowFunction.js");

/*
    Function
    - fundamental building blick in the program 
    - subProgram can be used multiple times : 재사용 가능
    - performs a task or calulates a value

    1.  Function declaration
        function name(param1, param2) {body... return;}
        one function === one thing
        naming : doSomething, command, verb
        e.g createCardAndPoint -> createCard, CreatePoint
        function is object in JS
*/

console.log("_> 1.Function declaration : printHello()");
function printHello() {
    console.log('Hello');
}
printHello();

console.log("_> log(messange)");
function log(message) { // parameter에 대한 데이터타입을 지정하지 않는다.
    console.log(message)
}
log('Hello');
log(1234);

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
console.log("_> 2.Parameters : changeName(obj)");
function changeName(obj) {
    obj.name = 'coder';
}
const luster = {name:'lustertimber'};
changeName(luster); // 해당 구문에서 변수의 ㅏㄹ당 정보가 변경된다.
console.log(luster);

// 3. Defalut parameters (added in ES6)
console.log("_> 3. Defalut parameters : showMessage(messange, from = 'unknown')");
function showMessage(messange, from = 'unknown') {
    console.log(`${messange} by ${from}`);
}
showMessage('Hi!',undefined);

// 4. Rest Parameters (added in ES6)
console.log("_> 4. Rest Parameters (added in ES6)");
function restParams(...args) {
    for (let i=0; i < args.length; i++) {
        console.log(`defalut for : ${args[i]}`);
    }

    for (const arg of args) { // c#의 foreach와 유사
        console.log(`ES6 for : ${arg}`);
    }

    args.forEach((arg) => console.log(`forEach : ${arg}`)); // linq or ramda
}
restParams('l','u','s','ter','timber',1,2,3,4,5); // 배열 형태의 정보를 파라미터로 사용

// 5. Local scope
console.log("_> 5. Local scope");
let globalMessage = 'globalMessage' // global variable
function localScope() {
    let message = 'Hello localScope';
    console.log(message);
    console.log(globalMessage);
}
localScope();

// 6. Return a value
console.log("_> 6. Return a value");
function sum(a,b) {
    return a + b;
}
const result = sum(1,2);
console.log(`result : ${result}`);
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit
// bad
console.log("_> 7. Early return, early exit");
const user = {'point':11};
function upgradeUser(user) {
    if(user.point > 10) {
        console.log(`7. Early return, early exit bad : bad`);
    }
    else {
        console.log(`7. Early return, early exit bad : good`);
    }
}

upgradeUser(user);

//조건에 맞지 않으면 리턴을 가장  빠르게 처리한다.
function upgradeUserGood(user) {
    if(user.point >= 10)
        return 'good';
    else
        return 'bad';
}

console.log(`7. Early return, early exit good : ${upgradeUserGood(user)}`);

// 8. Anonymous Function : function의 이름 미지정
/*
    First-class function
    functions are treated like any other variable
    can be assigned as value to variable
    can be passed as an argument to other functions
    can be returned by another function

    1. Function expression
    a function declaration can be called earlier than is defiend. (hoisted)
        (hoisted) : 함수 선언전에 호출하여도 가능하도록 js가 선처리
    a function expression is created when the execution reaches it.
*/
console.log("_> 8. Function expression");
const anonymousFunction = function () {
    console.log('result : anonymousFunctoin');
}
anonymousFunction();
const anonymousFunctionAgain    = anonymousFunction;
const sumAgain                  = sum;
anonymousFunctionAgain(); // 변수나 상수로 지정하고 호출 시 함수형으로 처리
console.log(`sumAgain() : ${sumAgain(1,2)}`);

// 9. Callback function using function expression
console.log("_> 9. Callback function using function expression");
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'play guitar') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log("randomQuiz : yes!");
}

const printNo = function print() { // 디버깅 시 함수명을 알기 위해서 명칭을 지정
    console.log("randomQuiz : no!");
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('play guitar', printYes, printNo);

// 10. Arrow function
// always anonymous
console.log("_> 10. Arrow function ");
const arrowFucntion1 = () => console.log('arrowFucntion1');
arrowFucntion1();

const arrowFucntion2 = (a,b) => a + b;
console.log(`arrowFucntion2 : ${arrowFucntion2(2,3)}`);

const arrowFucntion3 = (a,b) => {
    ++a;
    ++b;
    return a * b;
}
console.log(`arrowFucntion3 : ${arrowFucntion3(2,3)}`);

// 11. IIFE : Immediately Invoked Function Expression : 선언과 동시에 함수를 실행
// 선언과 동시에 함수를 실행
console.log("_> 11. IIFE : Immediately Invoked Function Expression : 선언과 동시에 함수를 실행");
(function IIFE() {
    console.log('IIFE');
})();

// 12. Fun Quiz time
// function calculate(command, x, y)
// command : add(+), subtract(-), divide(/), multiply(*), remainder(%)

function calculate(command, x, y)
{
    switch (command) {
        case '+' :
            return x + y;
        break;

        case '-' :
            return x - y;
        break;

        case '*' :
            return x * y;
        break;

        case '/' :
            return x / y;
        break;

        case '%' :
            return x % y;
        break;

        default : 
            return 'command error';
    }
}

console.log(`12. Fun Quiz time : 3 + 4 = ${calculate('+',3,4)}`);
console.log(`12. Fun Quiz time : 3 - 4 = ${calculate('-',3,4)}`);
console.log(`12. Fun Quiz time : 3 * 4 = ${calculate('*',3,4)}`);
console.log(`12. Fun Quiz time : 3 / 4 = ${calculate('/',3,4)}`);
console.log(`12. Fun Quiz time : 5 % 2 = ${calculate('%',5,2)}`);

(() => console.log('나는야 IIFE!! 이며 Arrow funcion이다'))();

let testtext = ((a,b) => a + b)(1,2);
console.log(testtext);