// 배열

var arr = ["A", "B", "C", "D"];
for (var i = 0; i < 4; i++) {
  console.log("arr[%d] = %s", i, arr[i]);
}

arr.push("E"); // 배열에 하나의 값 추가
console.log('arr.push("E"); => arr[4] = %s', arr[4]);

arr = arr.concat("F", "G"); // 배열에 여러 값 추가
console.log(
  'arr = arr.concat("F", "G"); => arr[5],arr[6] = %s, %s',
  arr[5],
  arr[6]
);

arr.unshift("START"); // 배열의 첫번째 값으로 지정후 있던 값들을 뒤로 한칸씩 이동.
console.log(arr);

arr.splice(1, 0, "HELLO"); // arr배열에서 index번호가 1인 자리의 값 앞에 HELLO 삽입.
console.log(arr);
console.log(arr.splice(1, 1, "BYE_1", "BYR_2")); // arr배열에서 index번호가 1인 자리의 값을 리턴하고 값 삽입.
console.log(arr);

console.log(arr.shift()); // 배열의 첫번째 값을 리턴.
console.log(arr);

console.log(arr.pop()); // 배열의 마지막 값을 리턴.
console.log(arr);

var arr2 = [2, 4, 1, 3, 5, 7, 6];
console.log("arr2 =", arr2);

arr2.sort(); // 배열 순차정렬.
console.log(arr2);
arr2.reverse(); // 배열 역순정렬.
console.log(arr2);
