// const odd   = '홍수입니다.';
// const even  = '짝수입니다.';

exports.odd     = '홍수입니다.';
exports.even    = '짝수입니다.';
exports.result  = (require.main === module);

console.log(require.main === module); // 첫 모듈 여부


// module.exports = {
//     odd,even
// }