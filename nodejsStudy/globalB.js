const A = require('./globalA');
global.message = '안뇽';
console.log(`globalB local : ${global.message}`);
console.log(`globalB : ${A()}`);