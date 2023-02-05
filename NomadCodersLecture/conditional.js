const a = 1;
if(a === 2) {
    console.log("a === 2");
} else if(a === 3) {
    console.log("a === 3");
} else {
    console.log("a !== 2 && a !== 3");
    console.log(`a === ${a}`);
}

// 반복문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// loop
// while(true) {
//     console.log("loop");
// }

let i = 1;
while(i < 4) {
    const v = i;
    console.log(`${v}번`);
    i++;
}