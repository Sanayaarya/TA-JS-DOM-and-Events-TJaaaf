
let b1 = document.querySelector('.first');
let b2 = document.querySelector('.second');

let colorArr = ['red', 'yellow', 'green', 'blue', 'purple', 'black', 'pink', 'orange', 'brown', 'cyan'];

let action = ()=>{
   let i = Math.floor(Math.random()*10);
   b1.style.backgroundColor = colorArr[i];
}

b1.addEventListener('click', action);

let action2 = ()=>{
  let i = Math.floor(Math.random()*10);
  b2.style.backgroundColor = colorArr[i];
}

b2.addEventListener('mousemove', action2);