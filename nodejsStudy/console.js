const string = 'abc';
const number = 1;
const bool = true;
const obj = {
    outside : {
        inside : {
            key  : 'value',
        }
    }
};

console.time('전체시간');
console.log('일반적인 로그 , 구분으로 여러값 출력 가능');
console.log(string, number, bool);
console.error('에러 관려 메세지 출력');

console.table(
                [
                    {name : 'zero', birth : 1984, sex : 'man'}
                    ,{ name : '헤로', birth : 1988, sex : 'women'}
                    ,{ name : '세로', birth : 1989, sex : '?'}
                ]
            );

console.dir(obj, {color : true  ,depth : 1});
console.dir(obj, {color : false ,depth : 2});

console.time('시간 측정');          // time, timeend 사이값을 처리
for(let i = 0; i < 1000; i++) {}   // .time() == timeend()
console.timeEnd('시간 측정');       // time, timeend 사이값을 처리

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}

a();

console.timeEnd('전체시간')