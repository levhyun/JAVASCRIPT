function person(name){
    this.name = name;
}
person.prototype.name = null;
person.prototype.text = function(){
    return `My name is ${this.name}`;
}

function programmer(name){
    this.name = name;
}
programmer.prototype = new person();
// programmer 객체는 person객체를 상속하고 있다.

const hyun = new programmer('hyun');
console.log(hyun.text());
//그렇기에 programmer 객체에서 person객체를 사용할수 있다.

// 또한 programmer객체에 기능을 추가할 수 있다.
programmer.prototype.hello = function(){
    return "hello, ";
}
console.log(`${hyun.hello()}${hyun.text()}`);