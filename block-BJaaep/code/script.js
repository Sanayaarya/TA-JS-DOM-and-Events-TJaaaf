let box = document.querySelectorAll(".box");
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



secondBox.addEventListener("click",(event)=>{
  let text = event.target.dataset.text;
  event.target.innerText = text;

  setTimeout(() => {
    event.target.innerText = "";
  }, 3000);
});