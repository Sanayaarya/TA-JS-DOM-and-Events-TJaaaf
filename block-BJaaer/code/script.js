let root = document.querySelector('body');
let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let info = document.querySelector(".info");

let userInfo = {};

function handelSumbit(event){
  event.preventDefault();
      userInfo.name = form.elements.name.value;
      userInfo.email = form.elements.emails.value;
      userInfo.movie = form.elements.gender.value;
      userInfo.color = form.elements.color.value;
      userInfo.rate = form.elements.rate.value;
      userInfo.genre = form.elements.drone.value;
      userInfo.term = form.elements.terms.value;
      console.log(userInfo);
      createUI();
}

form.addEventListener('submit',handelSumbit)

function createUI(){
  let box = document.createElement('div');
  box.style.backgroundColor = 'white'
  box.style.height = '400px';
  box.style.width = '300px';
  box.style.margin = 'auto';
  box.style.textAlign = 'center' 
  box.classList.add('contain');
  let name = document.createElement('h1');
  name.innerText = userInfo.name
  let email = document.createElement('p')
  email.innerText = userInfo.emails;
  let movie = document.createElement('p')
  movie.innerText = userInfo.movie;
  let color = document.createElement('p')
  color.innerText = userInfo.color;
  let rate = document.createElement('p')
  rate.innerText = userInfo.rate;
  let genre = document.createElement('p')
  genre.innerText = userInfo.drone;
  let term = document.createElement('p')
  term.innerText = userInfo.terms;
  box.append(name,email,movie,color,rate,genre,term);
  root.append(box)
};
