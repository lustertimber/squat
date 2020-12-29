'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력
console.log("%c_> Load completed : study_arrayapi.js", 'color:red;font-weight:bold;');
/**********************************************************************************
 * Array-API
 * 
 * 
 * 
 * 
 **********************************************************************************/

// Q1. make a string out of an array
console.log("%c_> Q1. make a string out of an array", 'color:red;font-weight:bold');
{
    const fruits = ['apple', 'banana', 'orange'];
    let strfruits = "";
    for (let fruit of fruits) {
        strfruits += fruit + ' ';
    }
    console.log(strfruits);

    let result = fruits.join(" / "); // default separator : ,
    console.log(result);
}

// Q2. make an array out of a string
console.log("%c_> Q2. make an array out of a string", 'color:red;font-weight:bold');
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(","); // 스트링을 특정 separator를 이용하여 배열로 변환
    console.log(fruits);
    console.log(result);

    const result2 = fruits.split(",",2); // 스트링을 특정 separator를 이용하여 배열로 변환, 변환 대상 지정
    console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
console.log("%c_> Q3. make this array look like this: [5, 4, 3, 2, 1]", 'color:red;font-weight:bold');
{
    const array     = [1, 2, 3, 4, 5];
    console.log(array);
    const result    = array.reverse();  // 원본을 변환
    console.log(array);
    console.log(result);
}

// Q4. make new array without the first two elements
console.log("%c_> Q4. make new array without the first two elements", 'color:red;font-weight:bold');
{
    const array = [1, 2, 3, 4, 5];
    const result1 = array.slice(0,2);   // 수정한 정보를 별도 저장하여 리턴
    const result2 = array.splice(0,2);  // 원본을 수정
    console.log(array);
    console.log(result1);
    console.log(result2);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name       = name;
        this.age        = age;
        this.enrolled   = enrolled; // 수업 참여여부
        this.score      = score;
    }
}
const students = [
    new Student('A', 29, true,  45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true,  90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true,  88),
];

// Q5. find a student with the score 90
console.log("%c_> Q5. find a student with the score 90", 'color:red;font-weight:bold');
{
    // const result = students.find(function (std, idx, non) { // callback 함수의 형태
    //     return std.score === 90;
    //     // console.log(std,idx);
    //     // console.log(std,idx,non);
    // })

    // console.log(result);
    // console.log(`Student Name is : ${result.name}`);

    const result = students.find((student) => student.score === 90);
    console.log(result.name);
    console.log(`Student Name : ${result.name}`);
}

// Q6. make an array of enrolled students
console.log("%c_> Q6. make an array of enrolled students", 'color:red;font-weight:bold');
{
    // const result = students.filter((student) => student.enrolled === true);
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
console.log("%c_> Q7. make an array containing only the students' scores", 'color:red;font-weight:bold');
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
    // const result2 = students.map((student) => student.score * 2);
    // console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
console.log("%c_> Q8. check if there is a student with the score lower than 50", 'color:red;font-weight:bold');
{
    const result = students.some((student) => student.score < 50); // 1개의 결과가 있으면 True
    console.log(result);

    const result1 = students.every((student) => student.score <= 50); // 모두 50점이하 이면 True
    console.log(result1);
}

// Q9. compute students' average score
console.log("%c_> Q9. compute students' average score", 'color:red;font-weight:bold');
{
    const result = students.reduce((preScore,currScore) => {
        console.log('-----------------------------------------------------------');
        console.log(`preScore   : ${preScore}`);
        console.log(`currScore  : ${currScore.score}`);
        // console.log(currScore);
        return preScore + currScore.score;
    },0); // 초기값을 지정하고, 초기값에 누적을 합산한다.

    // console.log('result-----------------------------------------------------');
    console.log(result);
    console.log(result / students.length);

    // Arrow function version
    const resultArr = students.reduce((preScore,currScore) => preScore + currScore.score,0);
    console.log(`Result Arrary : ${resultArr}`);
    console.log(`Result Arrary : ${resultArr / students.length}`);
}

// Q10. make a string containing all the scores
console.log("%c_> Q10. make a string containing all the scores", 'color:red;font-weight:bold');
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
                    .map(student => student.score)  // score 정보만 발췌
                    .filter(score => score >= 50)   // 50점 이상만 발췌
                    .join();                        // string으로 변환

    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
console.log("%c_> Bonus! do Q10 sorted in ascending order", 'color:red;font-weight:bold');
// result should be: '45, 66, 80, 88, 90'
{
    const result =
        students
            .map(student => student.score)  // score 정보만 발췌
            .sort((s,l) => l-s)             // asc, desc와 같은 방법이 아닌 연산을 이용한 방법
            .join();                        // string으로 변환

console.log(result);
}