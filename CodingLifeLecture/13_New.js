const object = {
    'name' : 'noname',
    'function' : function(){
        return `My name is ${this.name}`;
    }
}
console.log(object.function());



function person(name) {
    this.name = name;
    this.function = function() {
        return `My name is ${this.name}`;
    }
}

var hyun = new person('hyun');
console.log(hyun.function());

var wkgus = new person('wkgus');
console.log(wkgus.function());