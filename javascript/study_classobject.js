'use strict'; // added ECMAScript 5, 비정상적인 문구에 대한 오류를 Debug console에 출력

// import {ConsoleLogStyle} from "jsstyle.js";
// let tt = new ConsoleLogStyle();
// tt.title("class call test");

console.log("%c_> Load completed : study_classobjet.js", 'color:red;font-weight:bold');

// return;

/*
    class
        - template
        - declare once
        - no data in
    object
        - insance of a class
        - created many times
        - data in
    JavaSript
        - introduced in ES6
        - Syntactical sugar over prototype-based inheritance
        - 이전에는 존재하지 않았으며 문법만 추가됨
*/

// 
console.log("%c_> 1. class declarations (class, method)", 'color:red;font-weight:bold');
class Person {
    constructor(name, age) {    // constructor : 생성자
        this.name   = name;     // fields
        this.age    = age;      // fields
    }

    speak() {
        console.log(`${this.name} : hello!`);
    }
}

let lustertimber = new Person('lustertimber',40);
console.log(lustertimber.name);
console.log(lustertimber.age);
lustertimber.speak();

// 
console.log("%c_> 2. Getter and Setters", 'color:red;font-weight:bold');
class User {
    constructor(firstName, lastName, age) {
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.age        = age;
    }

    get age() {
        return this.value < 0 ? 0 : this.value;
        // if(this.value < 0) {
        //     console.log('age cant be negative');
        //     return 0;
        // }
        // else {
        //     return this.value;
        // }
    }

    set age(param) {
        this.value = param;
    }
}

let user1 = new User('Steve','Jobs',-1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 추가된 내용이며 아직 사용하고 있지 않다. 지원하는 브라우져가 없음 2020.12
console.log("%c_> Fields (public, private)", 'color:red;font-weight:bold');
class Experiment {
    publicField     = 2;
    #privateField   = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! 추가된 내용이며 아직 사용하고 있지 않다. 지원하는 브라우져가 없음 2020.12
console.log("%c_> 4. Static properties and methods", 'color:red;font-weight:bold');
class Article {
    constructor(articleParam) {
        this.articleNumber = articleParam;
    }

    static publisher = 'Dream Coding';

    static printPub() {
        console.log(Article.publisher);
    }
}

let article = new Article(1);
console.log(article.articleNumber); // class내부 생성자 구조체의 정보
Article.printPub(); // static이므로 인스턴스 없이 클래스의 값을 호출, 메모리 절약

// 5. Inheritance
// A way for one class to extend another class. 
console.log("%c_> 5. Inheritance", 'color:red;font-weight:bold');
class Shape {
    constructor(w,h,c) {
        this.width  = w;
        this.height = h;
        this.color  = c;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 상속
console.log("%c_> 5-1. Inheritance Sample", 'color:red;');
class Rectangle extends Shape {};

const rectangle = new Rectangle(20,20,'red');
rectangle.draw();
console.log(`AREA : ${rectangle.getArea()}`);

// 상속 오버라이딩 : super- 부모의 정보를 출력
console.log("%c_> 5-2. Inheritance : Overriding & super Sample", 'color:red;');
class Triangle extends Shape {
    draw() {
        super.draw();       // 부모의 메소드를 호출
        console.log("▲")    // 자식 메소드에서 정의 된 메소드
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return "Triangle,Color:Red";
    }
};
const triangle = new Triangle(20,20,'blue');
triangle.draw();
console.log(`AREA : ${triangle.getArea()}`);

// 6. Class checking : instanceOf
console.log("%c_> 6. Class checking : instanceOf", 'color:red;font-weight:bold');
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// // 
// console.log("_> 7.");

// // 
// console.log("_> 8.");

// // 
// console.log("_> 10.");

// // 
// console.log("_> 11.");

// // 
// console.log("_> 12.");