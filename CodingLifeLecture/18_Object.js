let object = new Object();
console.log(`let object = new Object(); : ${object.toString()}`);
let object2 = {};
console.log(`let object2 = {}; : ${object2.toString()}`);

// Object 기능 확장
Object.prototype.contain = function(needle) {
    for(let key in this) {
        if(this[key] === needle) {
            return true;
        }
    }
    return false;
}
let o = {'name' : 'hyun', 'city' : 'deagu'};
console.log(o.contain('hyun'));

// Object 기능 확장의 위험
console.log('\n[문제]');
for(let key in o) {
    console.log(key);
}
/*
[결과]
name
city
contain
*/
// Object 기능을 확장함으로써 객체에도 영향을 미침.

// 해결방법
console.log('\n[해결]');
for(let key in o) {
    if(o.hasOwnProperty(key)) {
        console.log(key);
    }
}
// hasOwnProperty : 해당 key값의 value가 객체의 집적적인 소유이며 정의 되어 있는지 판단한다.