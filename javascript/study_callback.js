'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : study_callback.js", 'color:red;font-weight:bold;');
/*******************************************************************************************
 * javascript is synchronous.
 * Execute the code block by orger after hoisting.
 * hoisting : var, function declaration  
 * 
 * 
 * 
 * 
 *******************************************************************************************/
console.log("%c_> 1. callback function"
            ,'color:red;');

console.log('1');

setTimeout(() => console.log('2'),1000);

console.log('3');


console.log("%c_> 2. Synchronous callback"
            ,'color:red;');

function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

console.log("%c_> 3. Asynchronous callback"
            ,'color:red;');
function printWithDelay(print, timeout) {
    setTimeout(print,timeout);
}

printWithDelay(() => console.log('async callback'),2000);


console.log("%c_> 4. test callback hell : 잘못 된 프로그램의 예"
            ,'color:red;');

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (    (id == 'ellie' && password == 'dream') ||
                    (id == 'coder' && password == 'academy')

            ) {
                onSuccess(id);
            } else {
                onError(new Error('Not found'));
            }
        },2000);
    };

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name : user, role : 'admin'});
            } else {
                onError(new Error('No access'));
            }
        },1000);
    };
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter password id');

userStorage.loginUser(
    id
    ,password
    ,user => {
        userStorage.getRoles(
            user
            ,userWithRole => {
                alert(`안녕하세요 ${userWithRole.name}, 권한 : ${userWithRole.role}`);
            }
            ,error => {
                console.log(error);
            }
        );
    }
    ,error => {
        console.log(error);
    }
)