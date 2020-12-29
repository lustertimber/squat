'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : study_json.js", 'color:red;font-weight:bold;');
/*******************************************************************************************
 * json
 * simplest data interchange format
 * lightweight text-based structure
 * easy to read
 * key:value pairs
 * used for serialzation and transmission of data between the network the network connection
 * independent programming language and platform
 *******************************************************************************************/
console.log("%c_> 1. Object to JSON : stringify(object)", 'color:red;font-weight:bold');
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name        : 'tori'
    ,color      : 'white'
    ,size       : null
    ,birthDate  : new Date()
    // ,symbol     : Symbol('id')  // 출력 시 포함되지 않는다.
    ,jump       : () => {       // 출력 시 포함되지 않는다.
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name','color','size']);
console.log(json);

json = JSON.stringify(rabbit,(key,value) =>{
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'luster' : value;
    // return value;
});
console.log(json);

console.log("%c_> 2. JSON to Object : parse(json)", 'color:red;font-weight:bold');
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());    // date는 string으로 할당되어 있다.
console.log(obj.birthDate);                 // date는 string으로 할당되어 있다.

const obj2 = JSON.parse(json, (key,value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate);                // date는 string으로 할당되어 있다.
console.log(obj2.birthDate.getDate());      // date는 string으로 할당되어 있다.

console.log("%cJSON 정렬 사이트", 'color:red;font-weight:bold');
console.log("%chttp://www.jsonbeautifier.org", 'color:red;font-weight:bold');

console.log("%cJSON 파서 사이트", 'color:red;font-weight:bold');
console.log("%chttp://www.jsonparser.org", 'color:red;font-weight:bold');

console.log("%cJSON Validator 사이트", 'color:red;font-weight:bold');
console.log("%chttps://tools.learningcontainer.com/json-validator/", 'color:red;font-weight:bold');