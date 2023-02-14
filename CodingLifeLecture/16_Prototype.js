function top(){}
top.prototype.topBool = true;

function mid(){}
mid.prototype = new top();

function bottom(){}
bottom.prototype = new mid();

const object = new bottom();
console.log(object.topBool); // true