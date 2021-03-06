'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : study_Array.js", 'color:red;font-weight:bold;');
/**********************************************************************************
 * Array
 * 
 * 
 * 
 * 
 **********************************************************************************/

console.log("%c_> 1. Declaration", 'color:red;font-weight:bold');
let arr1 = new Array();
let arr2 = [1,2,3,4];
console.log(arr1);
console.log(arr2);

// for (let value of arr2)
//     console.log(value);
console.log("%c_> 2. Index position", 'color:red;font-weight:bold');
const fruits = ['😊','😂'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(`%cFruits Last Index : ${fruits.length - 1}`, 'color:purple;font-weight:bold');

// 3. Looping over an array
// print all fruits
// a. for
console.log("%c_> 3. Looping over an array", 'color:red;font-weight:bold;');
for (let v of fruits)
    console.log(v);

console.log("%c_> 3-1. Looping over an array : forEach()", 'color:red;');

fruits.forEach(function (f, i) {
    console.log(f,i);
});

fruits.forEach((f,i,a) => console.log(f,i,a));
fruits.forEach((f,i) => console.log(f,i));
fruits.forEach((f) => console.log(f));

// 4. Addtion, deletion, copy
console.log("%c_> 4. Addtion, deletion, copy", 'color:red;font-weight:bold;');
console.log("%c_> 4-1. push : add an item to the end", 'color:red;');
fruits.push('💖','💕');
console.log(fruits);

console.log("%c_> 4-2. remove : remove an item to the end", 'color:red;');
fruits.pop();
fruits.pop();
console.log(fruits);

console.log("%c_> 4-1. unshift : add an item to the beginning", 'color:red;');
fruits.unshift('💖','💕');
console.log(fruits);

console.log("%c_> 4-2. shift : remove an item to the beginning", 'color:red;');
fruits.shift();
fruits.shift();
console.log(fruits);
// Note!!! shift, unshift are slower than pop, push
console.log("%c_> Note!!! shift, unshift are slower than pop, push", 'color:blue;');

// 5. splice : remove an item by index position
console.log("%c_> 5. splice : remove an item by index position ", 'color:red;');
fruits.push('🐱‍💻','🐱‍🐉','🐱‍👓','🐱‍🚀');
console.log(fruits);
fruits.splice(3,1); // 원하는 위치의 정
console.log(fruits);
fruits.splice(3,1,'🐱‍','👀'); // 원하는 위치의 정
console.log(fruits);

// 6. combine two arrays
console.log("%c_> 6. combine two arrays ", 'color:red;');
const fruits2 = ['A','B','A','B','A','B','A','B','A','B','A'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 7. Searching : Find the index
console.log("%c_> 7. Searching : Find the index", 'color:red;');
console.log(newfruits.indexOf("A"));
console.log(newfruits.includes("A"));

// 8. lastindexOf
console.log(newfruits);
console.log(newfruits.indexOf("A"));
console.log(newfruits.lastIndexOf("A"));

console.log(`pop info : ${newfruits.pop()}`);
console.log(newfruits);