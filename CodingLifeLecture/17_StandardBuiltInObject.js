/* 
    [자바스크립트 내장 객체]
    - Object
    - function
    - Array
    - String
    - Boolean
    - Number
    - Math
    - Date
    - RegExp
*/

// example 1
let arr = new Array('a','b','c','d','e');
// = let arr = ['a','b','c','d','e'];
function getRandomValueFromArray(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
console.log(getRandomValueFromArray(arr));

// example 2
Array.prototype.random = function(){
    let index = Math.floor(Math.random()*this.length);
    return this[index];
}
let arr2 = new Array('abc','de','f','gh','ijk');
console.log(arr2.random());