start_one = {one:1, two:2, three:3, four:4, five: 5};
start_two = {two:2, three:3, four:4, five: 5, six: 6};

function sum(){
    let res = 0;
    for(key in this){
        res += this[key];
    }
    return res;
}
console.log(sum.apply(start_one));
console.log(sum.apply(start_two));



set = {three:3, four:4, five: 5, six: 6, fn: sum2};

function sum2(){
    let res = 0;
    for(key in this){
        if(typeof this[key] !== 'function') {
            res += this[key];
        }
    }
    return res;
}
console.log(sum2.apply(set));