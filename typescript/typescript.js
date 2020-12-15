let str = "hello TypeScript";
// const str : string = "100 ㏇";
let n1 = 100;
let n2 = 200;
let Coffee = /** @class */ (function () {
    function Coffee(name, temperature) {
        this.name = name;
        this.temperature = temperature;
    }
    return Coffee;
}());

Coffee.name         = "ICE Americano";
Coffee.temperature  = "100C";

console.log(str);
console.log(n1);
console.log(n2);

console.log(Coffee.name);
console.log(Coffee.temperature);