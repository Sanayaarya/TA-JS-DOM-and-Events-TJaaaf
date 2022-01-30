let inputElement = document.querySelector('input');
let movieNames = document.querySelector('.movieName')

let movieInfo = {};

function handleClick(event ) {
  if ( event.keyCode === 13 && event.target.value !== ''){
  console.log(event.keyCode);
  createUI();
  event.target.value = "";
  }
}
  inputElement.addEventListener('keyup' ,handleClick);

function createUI(){
    let ul = document.createElement('ul');
    let close = document.createElement('button');
        close.innerText = "❎";
        close.classList.add('btn');
        close.addEventListener('click' , function (){
            ul.style.display = "none";  
        })
    let checkBox = document.createElement('input');
        checkBox.type ="checkbox"
   let movieName = document.createElement('h2');
      movieInfo.movie = event.target.value;
      movieName.innerText = movieInfo.movie;
     ul.append(checkBox,movieName ,close );
     movieNames.append(ul);
  }