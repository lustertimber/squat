'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : study_Promise.js", 'color:red;font-weight:bold;');
/*******************************************************************************************
 * Promise is a Javascript object for asynchronous operation.
 * state : pending -> fulfilled or rejected
 * Producer vs Consumer
 * 
 *******************************************************************************************/


// resolve : result
// when new Promise created , the executor runs automatically.
console.log("%c_> 1. Producer",'color:red;');
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network. readfiles)
    console.log('Doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Comsumers : then, catch, finally
console.log("%c_> 2. Producer",'color:red;');
promise.then((value) => { // 성공 시 value return
    console.log(value);
})
.catch(error => {         // 실패 시 error return
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
console.log("%c_> 3. Promise chaining",'color:red;');
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
console.log("%c_> 4. Error Handling",'color:red;');
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 계란`)), 1000);
        // setTimeout(() => resolve(`${hen} => 계란`), 1000);
    });

const cooking = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
});

getHen()
.then(getEgg)
.catch(error => { return '빵' })
.then(cooking)
.then(console.log)
.catch(console.log);

// .then(hen => getEgg(hen))
// .then(egg => cooking(egg))
// .then(meal => console.log(meal));

// 5. Callback Hell Example
console.log("%c_> 4. Error Handling",'color:red;');
console.log("Ref Callback-to-promise");