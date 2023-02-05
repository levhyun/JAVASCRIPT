function handle() {
    alert("handle!");
}

window.addEventListener("resize", handle()); 
// 새로고침시 handle() 호출


const btn = document.querySelector("#btn");

function click() {
    alert("click!");
}

btn.addEventListener("click", click);