console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요';

const v = require('./var');

console.log('require.cash입니다');
console.log(require.cache);

console.log('require.main입니다');
console.log(require.main === module); // 첫 모듈 여부

console.log('require.main.filename start');
console.log(`require.main.filename  : ${require.main.filename}`);
console.log(`__filename             : ${__filename}`);
console.log(`__dirname              : ${__dirname}`);
console.log('require.main.filename end');

console.log(v.odd);
console.log(v.even);
console.log(v.result);
