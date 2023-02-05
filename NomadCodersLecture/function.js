function hello() {
    console.log("hello function!");
}
hello(); // hello function!

function money(num) {
    console.log(num+"원");
}
money(10000);


const Function = {
    a: function(){
        return 'a';
    },
    b: function(){
        return 'b';
    }
}
const a = Function.a();
const b = Function.b();
console.log(a,b);