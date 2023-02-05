// 정규표현식

// pattern
var pattern = /a/; // pattern에 a 저장

var pattern2 = new RegExp("a"); // pattern2에 a 저장

const log = console.log;

log(pattern.exec("abcdef")); // "abcdef"에서 pattern찾기
log(pattern2.exec("abcdef")); // "abcdef"에서 pattern2찾기

log(pattern.test("assef")); // True
log(pattern2.test("bsdg")); // False

// String
log("abcdef".match(pattern));
log("jbcdef".match(pattern2)); // null

log("abcdef".replace(pattern), "A"); // pattern을 찾고 "A"로 바꾼다.

// 옵션
var xi = /a/i; // i를 붙이면 대소문자를 구분하지 않는다.
log("Abcde".match(xi)); // ["A"]

var xg = /a/g;
log("abcda".match(xg)); // pattern값을 검색한 모든 결과값을 리턴.

var ig = /a/gi;
log("AbDaGaA".match(ig)); // g + i

// 캡쳐
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
log(result);

// 치환
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content =
  "생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다.";
var result = content.replace(urlPattern, function (url) {
  return '<a herf="' + url + '">' + url + "</a>";
});
log(result);
