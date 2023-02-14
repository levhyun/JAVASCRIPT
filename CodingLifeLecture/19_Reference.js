// 변수와 참조
let a = {'id':1};
// a -> 객체
// a라는 변수가 객체({'id':1})를 참조하다.
let b = a;
// b -> a -> 객체 === b -> 객체
// b라는 변수가 객체({'id':1})를 참조하다.
b.id = 2;
console.log(a.id); // 2


// 함수와 참조
let c = {'name':'hyun'}; // c가 객체를 참조한다.
function func(d) { // 객체를 매개변수로 받아 d라는 변수가 참조한다
    d.name = 'wkgus'; 
    // c변수가 참조중이며 d변수 또한 참조중인 객체의 값을 변경한다.
}
func(c); // c가 참조하는 객체를 인자로 한다.
console.log(c.name); // wkgus