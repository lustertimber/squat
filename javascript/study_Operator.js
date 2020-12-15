'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력

console.log("_> Load completed : study_Operator.js");

/*  1. String concatenation */
console.log("_> 1. String concatenation");
console.log('my' + 'Guitar');
console.log('1' + 2);
console.log(`string literals:                           


''''
1+2= ${1+2}`)

console.log('lustertimber\'s guitar');
console.log("lustertimber's guitar");
console.log("lustertimber's\tguitar");
console.log("lustertimber's\nguitar");

// 2. Numeric operators
console.log("_> 2. Numeric operators");
console.log(1 + 1);
console.log(1 - 1);
console.log(4 / 3);     // 나누기
console.log(2 * 2);     // 곱하기
console.log(5 % 2);     // 나눈 값의 나머지
console.log(2 ** 3);    // 제곱 계산

// 3. Increment and decrement operators
console.log("_> 3. Increment and decrement operators");
let counter = 2;
console.log(`counter : ${counter}`);
const preIncrement = ++counter; // 증가값 처리
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter; // 감소값 처리
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);

// 4. Assignment operatros
console.log("_> 4. Assignment operatros");
let x = 3;
let y = 6;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);

// 5. Comparison operatros
console.log("_> 5. Comparison operatros");
console.log(10 < 6);    // lesss than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical Operatros : || (or), && (and), ! (not)
console.log("_> 6. Logical Operatros");

const value1 = false;
const value2 = 4 < 2;

// || (or) 여러개의 파라미터를 순차적으로 연산하고 결과가 true면 뒤의 파라미터는 bypass
console.log(`or : ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log("ㅡ_ㅡ");
    }
    return true;
}

// && (and)
console.log(`and : ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something
let nullableObject = null;
// let nullableObject = 'a';
if(nullableObject != null) {
    console.log(`nullableObject : ${nullableObject}`);
    console.log(`nullableObject.something : ${nullableObject.something}`);
} else {
    console.log(nullableObject);
}

// 7. ! (not)
console.log("_> 7. ! (not)");
let value3 = false;
console.log(!value3);

// 8. Equality
console.log("_> 8. Equality");
const strFive       = '5';
const numberFive    = 5;

// == loose Equality, with type conversion : 데이터 타입을 변경하여 비교
console.log(`== : ${strFive == numberFive}`);
console.log(`!= : ${strFive == numberFive}`);

// === strict Equality, no type conversion : 데이터 타입을 변경하지 않고 비교
console.log(`=== : ${strFive === numberFive}`);
console.log(`!== : ${strFive === numberFive}`);

// 9. object equality by references
console.log("_> 9.object equality by references");
const lustertimber1 = {name: 'lustertimber', age : 40};
const lustertimber2 = {name: 'lustertimber', age : 40};
const lustertimber3 = lustertimber1;

console.log(lustertimber1 == lustertimber2);            // memory ref 1 == memory ref 2
console.log(lustertimber1.for == lustertimber2.for);    // memory ref 1 value == memory ref 2 value 
console.log(lustertimber1 === lustertimber2);           // memory ref 1 == memory ref 2
console.log(lustertimber1 == lustertimber3);            // memory ref 1 == memory ref 1
console.log(lustertimber1 === lustertimber3);           // memory ref 1 == memory ref 1

// 10. Test
console.log("_> 10.Test");
console.log(`0 == false         : ${0 == false}`);          // true
console.log(`0 === false        : ${0 === false}` );        // false
console.log(`'' == false        : ${'' == false}`);         // true
console.log(`'' === false       : ${'' === false}`);        // false
console.log(`null == undefined  : ${null == undefined}`);   // true : 신기하지만 그렇다...
console.log(`null === undefined : ${null === undefined}`);  // false

// 11. Conditional operators : if
// if, else if, else
console.log("_> 11. Conditional operators : if, else if, else");
const name = 'lustertimber';
if(name === 'lustertimber') {
    console.log(`Welcome ${name}`);
} else if (name === 'kkw') {
    console.log(`Welcome ${name}`);
} else {
    console.log(`unKnow`);
}

const number11 = '1';
if(number11 === 1) {
    console.log(`number11 if : ${number11}`);
} else if (number11 === '1') {
    console.log(`number11 else if : ${number11}`);
} else {
    console.log(`number11 else : unKnow`);
}

// 12. Ternary operator : ?
console.log("_> 12. Ternary operator : ?");
console.log(`? : ${name === 'lustertimber' ? 'yes' : 'no'}`);

// 13. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
console.log("_> 13. Switch statement");
const browser = 'CHROME';
// const browser = 
switch (browser) {
    case 'IE' :
        console.log(`browser : ${browser}`);
        break;
    case 'CHROME' :
        console.log(`browser : ${browser}`);
        break;
    case 'FIREFOX' :
        console.log(`browser : ${browser}`);
        break;
    default :
        console.log(`browser : What the?`);
        break;
}

// console.log(navigator.userAgent);

// 14. Loops
// while loop, while the condition is truthy,
// body code is executed.
console.log("_> 14. Loops : while, do while, for");
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// 무조건 1회는 실행
do {
    console.log(`do while : ${i}`)
    i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let j = 3; j > 0; j = j - 2) {
    console.log(`inLine variable for : ${j}`);
}

// nested loops
for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
        console.log(`nested loops (for for) - j : ${j}, k : ${k}`)
    }
}

// break, continue 
// Q1. 0~10 에서 짝수만 출력
let fortextQ1 = "Q1. 0~10 에서 짝수만 출력 :";
for (let j = 0; j < 10; j++) {
    if(j > 0){
        if(j % 2 == 0)
            fortextQ1 += ` ${j}`
        continue;
    }
}
console.log(fortextQ1);

// Q2. 0~10 에서 8보다 작은 수만 출력
let fortextQ2 = "Q2. 0~10 에서 8보다 작은 수만 출력 :";
for (let j = 0; j < 10; j++) {
    if(j < 8)
        fortextQ2 += ` ${j}`;
    else
        break;
}
console.log(fortextQ2);