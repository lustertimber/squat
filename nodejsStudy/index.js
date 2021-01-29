const {odd, even}   = require('./var');
const checknum      = require('./func');

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    }
    return even
}
console.log(checknum(10));
console.log(checkStringOddOrEven('hello'));

console.log(module.exports === exports);