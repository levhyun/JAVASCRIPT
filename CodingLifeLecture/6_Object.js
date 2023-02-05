// 객체

const log = console.log; // console.log를 log로 축약선언.

var object = { A: 1, B: 2, C: 3, D: 4 }; // 객체 선언후 초기값 지정.
log("[객체] object =", object);

var object2 = {}; // 객체 선언
log("object2 :", object2);
object2["가"] = 10; // 객체 값 지정.
object2["나"] = 20;
object2["다"] = 30;
object2["라"] = 40;
log(
  "object2['가'] = 10;\n\
object2['나'] = 20;\n\
object2['다'] = 30;\n\
object2['라'] = 40;\n\
결과 = [객체] object2 :",
  object2
);

log(object["A"]); // 객체에서 A의 값 출력
log(object.A); // 객체에서 A의 값 출력

// 객체와 반복문
var o = { first: 1, second: 2, third: 3, fourth: 4 };
for (i in o) {
  // o객체의 값을 i에 하나씩 전달.
  document.write("key : " + i + " - value : " + o[i] + "<br/>");
}

var gekche = {
  list: { a: 1, b: 2, c: 3, d: 4 },
  show: function () {
    for (var name in this.list) {
      // this가 가르키는 것은 gekche
      // this.list는 list: { a: 1, b: 2, c: 3, d: 4 }
      document.write(name + ":" + this.list[name] + "<br/>");
    }
  },
};
gekche.show(); // 객체안에 show함수 호출.
