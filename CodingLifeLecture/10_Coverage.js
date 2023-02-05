//유효 범위

const log = console.log;

var a = "hello"; //전역 변수
function f() {
  var a = "bye"; //지역변수
  log(a);
}
f();

// 클로저(외부함수와 내부 함수)
function out_f() {
  function in_f() {
    var title = "Title";
    log(title);
  }
  in_f(); // 내부 함수
}

var b = out_f(); // 외부 함수
b();
