// 메소드와 this
const o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();

// 생성자와 this
var funcThis;
function func() {
    funcThis = this;
}

var o2 = new func();
if(funcThis === o2){
    console.log("funcThis === o2");
}

// apply와 this
let a = {}
let b = {}
function func2() {
    switch(this){
        case a:
            console.log("this === a");
            break;
        case b:
            console.log("this === b");
            break;
    }
}
func2.apply(a);
func2.apply(b);