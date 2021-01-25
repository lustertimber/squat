'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("_> Load completed : nodej_study_1.js");

(async () => {
    try {
        const result = await axios.get('http://www.zerocho.com/api/get');
        console.log(result);
        console.log(result.data); // {}
    } catch {
        console.error(error);
    }
})();

// (async () => {
//     try {
//         const result = await axios.get('http://www.zerocho.com/api/post/json');
//         console.log(result);
//         console.log(result.data); // {}
//     } catch {
//         // console.error(error);
//     }
// })();