// 조건문

// if문
var a = 1;
if (a === "1") {
  console.log("true일 경우 실행");
} else if (a === "2") {
  console.log("if(조건)이 false일 else if(조건)실행");
} else {
  console.log("모두 false일 겅우 실행");
}

// switch문
switch (a) {
  case 0:
    console.log("a가 0이면 실행");
    break;
  case 1:
    console.log("a가 1이면 실행");
    break;
  default:
    console.log("모두 false일 겅우 실행");
    break;
}
