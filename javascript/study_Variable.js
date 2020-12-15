'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력

console.log("_> Load completed : study_Variable.js");

// let      : 읽고 쓰기 가능
// const    : 최초 할당 후 읽기만 가능

// 2. Variable
// let (added in ES6) : mutable DataType ES6에서는 var는 더이상 사용하지 않는다.
// var는 블럭 {} 로컬, 글로벌 영역에 상관없이 사용이 가능하여 사용하지 않는다.
// var hoisting : 변수를 선언하기 전에 사용 할 수 있는 것
// var 호환성을 확인하여야 한다. ie
let globalName = "global Name";

{
    let name = "lustertimber";
    console.log(name);
    name = "kkw";
    console.log(name);
}

console.log(name);
console.log(globalName);

// 3. Contants : 상수
// Immutable DataType
// Favor Immutable DataType always for a few reasons
// - Security               : 해커들에 의한 변경을 방지
// - thread safety          : 쓰레드에 의해 변경하는 것을 방지
// - reduce human mistakes  : 타 개발자에 의해 변경되는 것을 방지
const minNumber = 1;
const maxNumber = 10;

console.log(`MinNumber : ${minNumber}`);
console.log(`MaxNumber : ${maxNumber}`);

// 4. Variable types
// function :
//  first-class function : 변수에 할당 가능, 함수의 파라미터 사용 가능, 리턴 가능
// 숫자는 number 1개의 타입만 존재
// 표현 가능 자릿수 : -2 ** 53 ~ 2 ** 53
let count   = 12;
let size    = 17.1;

console.log(`value : ${count}   type : ${typeof count}`);
console.log(`value : ${size}    type : ${typeof size}`);

const infinity          = 1 / 0;
const negativeinfinity  = -1 / 0;
const nAn               = 'not a number' / 2;

// number - special numeric values : infinity, negativeInfinity, NaN
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet') New Version : crome, firefox
const bigint = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigint}, type : ${typeof bigint}`);
console.log(`Max Safe Int : ${Number.MAX_SAFE_INTEGER}`);

// stirng : 1개의 타입만 존재한다 
const char      = 'c';
console.log(char, typeof char);

const brendar   = 'brendar';
const greetings = 'Hello ' + brendar;
console.log(`Values : ${greetings}, type : ${typeof greetings}`);

const helloBob  = `Hi ${brendar}!`; // template literals (string)
console.log(`Values : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false    : 0, null, undefined, NaN, '', false
// true     : any other value
const canRead   = true;
const testBool  = 3 < 1; // false
console.log(`Value : ${canRead},    type : ${typeof canRead}`);
console.log(`Value : ${testBool},   type : ${typeof testBool}`);

// null
const nothing = null; // value : null, typeof : object
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;  // value : undefined, typeof : undefined
// let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// Equality : ==, != : 데잍타입의 형을 변환하여 연산
 console.log(254 == '254');                 // return true
 console.log(true == 1);                    // return true
 console.log(undefined == null);            // return true
 console.log('abc' == new String('abc'));   // return true
 console.log(null == false);                // return false
 console.log('true' == true);               // return false
 console.log(true == 2);                    // return false

// Identity : 데이터타입의 형을 변환하지 않고 연산
console.log(254 === '254');                 // return false
console.log(true === 1);                    // return false
console.log(undefined === null);            // return false
console.log('abc' === new String('abc'));   // return false

// symbol, create unique identifiers for objects
// 동일 값 할당 후에도 boolen == flase
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);    // false
console.log(symbol1 === symbol2);   // false

// 동일 값 할당 후에도 boolen == flase
// 동일 심볼로 처리하기 위해서는 아래와 같이 처리
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);  // true
console.log(gSymbol1 === gSymbol2); // true

// Symbol의 value 출력은 항상 Symbol.description 사용
console.log(`Value : ${gSymbol1.description}, type : ${typeof gSymbol1}`);

// 5. Dynamic typing : dynamically typed lanuage
let text = 'hello';
console.log(`Value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`Value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`Value : ${text}, type : ${typeof text}`);
text = '4' / '2';
console.log(`Value : ${text}, type : ${typeof text}`);

// Danger Example
text = 'hello';
console.log(text.charAt(0));
text = 1;
// console.log(text.charAt(0)); // Error

// 6. Object, real-life object, data structure
// 배열 형태로 정보를 관리
const stuct = {name: 'lustertimber', age : 39};
console.log(stuct.name);
console.log(stuct.age);

stuct.name  = 'kkw';
stuct.age   = 40;
console.log(stuct.name);
console.log(stuct.age);
