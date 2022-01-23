let box = document.querySelectorAll(".boxes-1 li");
let secondBox = document.querySelector(".second")

box.forEach((e,i)=>{
 i++;
 e.addEventListener('click',function(){
  e.innerText = i;
  setTimeout(() => {
    e.innerText = "";
  }, 3000)
 });
});

// let box2 = document.querySelectorAll(".boxes-2 li")

// box2.forEach((e,i)=>{
//   i++;
//   let c =0;
//   for (let i = 1 ; i < 12 ; i++ ){
//   e.setAttribute("data-count",c++);
//   }
//   e.addEventListener('click',(event)=>{
//     e.innerText = i;
//     console.log(event.target)
//     if( e.innerText === event.target.dataset.count ){
//       setTimeout(() => {
//         e.innerText = "";
//       }, 3000)
//     }
//   })
// })

// console.log("script is working");


secondBox.addEventListener("click",(event)=>{
  let text = event.target.dataset.text;
  event.target.innerText = text;

  setTimeout(() => {
    event.target.innerText = "";
  }, 3000);
})