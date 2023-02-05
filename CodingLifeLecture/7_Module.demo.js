// 모듈화란 코드의 효율성을 위해 파일단위로 코드를 나누어 호출하거나 읽어오게 하는 것이다.
// Node.js의 모듈화

var circle = require("./8_Module.circle.js");
// 8_Module.circle.js 파일을 읽어와 변수 circle 대입. (require = 읽어 오는 명령어)
console.log("the area of a circle of radius 4 is " + circle.area(4)); // circle변수에 area함수호출.

/*
실행결과
    [Running] node "c:\Users\user\Documents\GitHub\Learn_JavaScript\7_Module.demo.js"
    the area of a circle of radius 4 is 50.26548245743669

    [Done] exited with code=0 in 0.204 seconds
*/

/* 
    라이브러리란?
        JavaScript 라이브러리는 웹 개발자가 표준 JavaScript 함수를 실행하기 위해 재사용할 수 있는 미리 작성된 코드 조각의 모음입니다.
*/
