'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력

console.log("%c_> Load completed : study_Objet.js", 'color:red;font-weight:bold');

/**
 * Object
 * one of JavaScript's data types
 * a collection of related data and/or functionality.
 * Nearly all objets in JavaScript are instance of Object
 * object = {key1 : value1, key2 : value2,...};
 */

console.log("%c_> 1. Literals and properties", 'color:red;font-weight:bold');
// const name  = 'lustertimber';
// const age   = 40;

const lustertimber = {name : "lustertimber", age : 40};
lustertimber.jasJob = true; // object에 property 추가
// delete lustertimber.name;   // object의 property 삭제

function print(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.jasJob);
}
print(lustertimber);

const obj1 = {};
const obj2 = new Object();


// 2. Computed properties, Object Index
console.log("%c_> 2. Computed properties", 'color:red;font-weight:bold');
console.log(lustertimber.name);
console.log(lustertimber['name']);  // key should be always string
lustertimber['hobby'] = "Guitar Play";
console.log(lustertimber.hobby);
console.log(lustertimber['hobby']);  // key should be always string

function printObjectValue(obj,key) {
    console.log(obj[key]);
}

printObjectValue(lustertimber,'name');
printObjectValue(lustertimber,'age');
printObjectValue(lustertimber,'hobby');

// 3. Property value shorthane 
console.log("%c_> 3. Property value shorthane", 'color:red;font-weight:bold');
const person1 = {name:'kim',age:10};
const person2 = {name:'lee',age:15};
const person3 = {name:'park',age:20};
const person4 = MakePerson('choi',25);
console.log(person4);
function MakePerson(name, age) {
    return {name,age};
}

// 4. Constuctor function
console.log("%c_> 4. Constructor", 'color:red;font-weight:bold');
function Person(name,age) {
    this.name = name;
    this.age = age;
}
const person5 = new Person('Last Name',30);
console.log(person5);


// 5. in operator : property exitence check (key i obj)
console.log("%c_> 5. in operator : property exitence check (key i obj)", 'color:red;font-weight:bold');
console.log('name' in lustertimber);
console.log('addr' in lustertimber);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
console.log("%c_> 6. for..in vs for..of", 'color:red;font-weight:bold');
console.log("%c_> 6-1. for..in", 'color:red;');
for (let key in lustertimber) {
    console.log(key);
}
console.log("%c_> 6-2. for..of : for array", 'color:red;');
const array = [1,'str','3','4','5'];
for (let v of array) {
    console.log(v);
}

// 7. cloning : 변수 복사 (클론)
// Object.assign(dest, [obj1, obj2, obj3...])
console.log("_> 7. cloning");
const user1 = {name : 'ellie', age : 20};
const user2 = user1;
user2.name = "coder";
console.log(user2);
console.log(user2.name);
console.log(user2.age);

// old way
const user3 = {};
for (let key in user1) {
    user3[key] = user1[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4,user1); 
console.log(user4);

const user5 = Object.assign({},user1);
console.log(user5);

// another example
const fruit1    = {color : 'red'};
const fruit2    = {color : 'blue', size : 'big'};
const fruit3    = {color : 'black', size : 'big'};
const mixed     = Object.assign({},fruit1,fruit2,fruit3); // 순서로 복사
console.log(mixed.color);
console.log(mixed.size);

// // 
// console.log("_> 8.");

// // 
// console.log("_> 9.");

// // 
// console.log("_> 10.");