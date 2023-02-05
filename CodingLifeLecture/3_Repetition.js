// 반복문

// while문
var a = 4;
while (a >= 1) {
  document.write("hello <br />"); // html웹페이지에 출력
  a--;
}

// do-while문 : do항을 먼저 실행후 while(조건)실행
a = 4;
do {
  console.log("do");
  a--;
} while (a >= 1);

// for문
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// 중첩 반복문
for (var i = 1; i <= 5; i++) {
  for (var i2 = 1; i2 <= i; i2++) {
    document.write("*");
  }
  document.write("<br />");
}
