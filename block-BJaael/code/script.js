let body = document.querySelector("body")
let box = document.createElement("div");
body.append(box);
box.style.display = "flex";
box.style.flexWrap = "wrap";

function disco(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};
function randomNumber(max){
  var num = Math.floor(Math.random() * max);
  return num;
};


for (let i = 0 ; i < 513; i++){
  let div = document.createElement("div");
  div.className= "box"
  div.style.border = "2px solid black";
  div.style.height = "4rem";
  div.style.width = "4rem";
  div.style.textAlign = "center";
  div.style.padding = ".5rem";
  let h2 = document.createElement("h2") 
  h2.innerText = randomNumber(513)
  div.append(h2)
  box.append(div);
};


let boxes= document.querySelectorAll(".box");
function example(){
  boxes.forEach((ele)=>{
    ele.style.backgroundColor = disco();
    ele.children[0].innerText = randomNumber(500);
   });
}
 
box.addEventListener("mousemove",example);
