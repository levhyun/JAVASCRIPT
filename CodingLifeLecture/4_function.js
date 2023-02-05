// 함수

function f(a) {
  // function 함수명 (매개변수) { }
  console.log("function %s", a);
  return "return"; // 반환값.
}

var a = "f";
console.log(f(a)); // 함수호출 && 변수값 전달 후 반환값 출력.

f2 = function (a) {
  // 함수를 f2에 대입.
  document.write("<br />");
  for (var i = 0; i <= a; i++) {
    for (var i2 = 0; i2 <= a; i2++) {
      document.write("*");
    }
    document.write("<br />");
  }
  return console.log("사각형 ( %s X %s )", a, a);
};

var b = 10;
f2(b);

(function () {
  // 함수명이 필요없고 정의 되자마자 호출한다.
  // 익명함수.
  console.log("정의되자마자 호출");
})();
