function sum() {
    // sum함수의 매개변수(parameter)의 길이는 0이다.
    let res = 0;
    for(let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
console.log(sum(1,2,3,4,5)); // 15
// sum함수의 인자(argument)의 길이는 5이다.