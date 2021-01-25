'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : Callback-to-promise.js", 'color:red;font-weight:bold;');
/*******************************************************************************************
 * Callback hell convert to Promise
 * 
 * 
 * 
 *******************************************************************************************/

class UserStorage {
     loginUser(id ,password) {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'kkw' && password === '1') || (id === 'kyj' && password === '1'))
                    resolve(id);
                else
                    reject(new Error(`${id} is not user`));
            }, 1000);
         });
     }

     getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'kkw')
                    resolve({name : user, role : 'admin'});
                else
                    reject(new Error('No access'));
            }, 1000);
        });
     }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`안녕하세요 ${user.name}, 권한 : ${user.role}`))
.catch(err => console.log(err));

// .then(user => userStorage.getRoles(user))
// .then(user => alert(`안녕하세요 ${user.name}, 권한 : ${user.role}`));
// .catch(console.log(err));