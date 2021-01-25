'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("_> Load completed : nodej_study_1.js");

/* 1. 기본 구조*/
var sayNode = function() {
    conslections.log('Node');
}

var es = 'ES';

var oldObject = {
    sayJS : function() {
        console.log('JS')
    }
    ,sayNode : sayNode,
};
oldObject[es + 7] = "Fantastic";
oldObject.sayNode;
oldObject.sayJS();
console.log(oldObject.ES7);

/* 2. 확장 구조*/

const sayNode2 = function() {
    console.log('sayNode2');
}

const newObject = {
    sayJS() {
        console.log('JS')
    },
    sayNode2,
    [es+6] : 'Fantastic 4'
}
console.log('/****************/');
sayNode2();
newObject.sayNode2();
newObject.sayJS();
console.log(newObject.ES6);

/* 3. 구조체 생략 */
const name = 'kim';
const age = 16;

const user = {
    name
    ,age
}

console.log(user.name);
console.log(user.age);

/* 4. Arrow Function */
const addFunction = (x,y) => (x+y);
const sum = addFunction(1,2);
console.log(sum);

const not = x => !x;

console.log(not(true));
console.log('/****************/');

/* this */
const relationShip = {
    name : 'Zero'
    ,friends : ['nero','hero','xero']
    ,logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend)
        })
    }
}
relationShip.logFriends();
console.log('/****************/');

const relationShip2 = {
    name : 'zero'
    ,friends : ['nero','hero','xero']
    ,logFriends : function() {
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        })
    }
}

relationShip2.logFriends();
console.log('/******이해불가 영역**********/');

/* 구조분해 할당 */
const candyMachine = {
    status : {
        name : 'node'
        ,count : 5
    }
    ,getCandy () {
        this.status.count--;
        return this.status.count;
    }
}

// const {getCandy, status : {count}} = candyMachine;
// 이해 불가
const {getCandy, status : {count}} = candyMachine;
console.log({getCandy, status : {count}});
console.log('/****************/');

/* Array */
var array = ['nodejs', {}, 10, true];
var node1 = array[0];
var node2 = array[1];
var node3 = array[3];
console.log(node1);
console.log(node2);
console.log(node3);
console.log('/****************/');
const array2 = ['nodejs', {}, 10, true];
const [node,obj,,bool] = array2;
console.log([node,obj,bool]);

/* Class */
console.log('/*********Class*******/');

class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    static testString(strParam) {
        return strParam;
    }

    breath() {
        alert('h-a-a-m');
    }
}

// 상속
class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type) // 부모의 속성을 유지
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayNam() {
        super.breath();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('huaman', 'Zero', 'Cho');
const aa = Human.isHuman(newZero); // 상속 여부를 확인
console.log(aa);

const testInstance = new Human();

console.log(Human.testString('sssss'));
// static Method는 아래와 같이 인스턴스된 클래스에서는 호출 불가
// console.log(testInstance.testString('ttttt'));

/************** Promise ********************/

console.log('/********* Promise ***********/');

const condition = false;
const promise = new Promise((resolve, reject) => {
    if(condition)
        resolve('성공');
    else
        reject('실패');
});

promise
.then((message)=> {
    console.log(message);
})
.catch((error)=> {
    console.log(error);
})
.finally(() => {
    console.log('무조건');
});
