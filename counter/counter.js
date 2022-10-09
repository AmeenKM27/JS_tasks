const num = document.getElementById("number");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const res = document.getElementById("reset");
let count = 0;

const increment = () => {
    num.innerHTML = ++count;
}

const decrement = () => {
    num.innerHTML = --count;
}

const clearing = () => {
    count = 0;
    num.innerHTML = 0;
}

res.addEventListener("click", clearing);
inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);