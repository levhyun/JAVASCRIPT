// 변수

var a = 1; // 변수 선언 var (변수명) = 초기값;
var b, c;
b = "hello";
c = "world";
console.log("a =", a); // 콘솔출력 : 1
console.log('b + " " + c =', b + " " + c); // 콘솔출력 : hello world

// 연산자

// ==
// 동등연산자 : 좌항 우항 비교해 같다면 true 다르면 false
console.log("1 == 1 :", 1 == 1); // true
console.log('1 == "1" :', 1 == "1"); // true : 숫자든 문자든 같다면 true
// ===
// 일치연산자 : 좌항 우항이 정확히 일치하면 true 불일치하면 false
console.log('1 == "1" :', 1 == "1"); // true
console.log('1 === "1" :', 1 === "1"); // false

// null과 undefined
var d;
console.log("d =", d); // undefined : 변수 a는 값이 지정되어 있지 않음.
var e = null;
console.log("e =", e); // null : 변수 b의 값이 없는 상태를 부여함.
console.log("d == e :", d == e); // true
console.log("d === e :", d === e); // false

// != : 부정
console.log("d != e :", d != e); // false
// !== : 정확하게 부정
console.log("d !== e :", d !== e); // true
