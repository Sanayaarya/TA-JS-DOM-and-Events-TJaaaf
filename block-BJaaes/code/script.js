form = document.querySelector("form")

usernameError = "";

function handleSubmit(event){
 event.preventDefault();
 console.dir(event.target);
 let usernameElm = event.target.elements.username;
 let parentElm = event.target.elements.username.parentElement;
 console.log(usernameElm.nextSibling)
 console.log(parentElm);

 function doesContainANumber(str){
   return str.split('').some(e=>Number(e))
 }

 if(usernameElm.value === ""){
   usernameError = "can't be empty!";
   parentElm.classList.add('error')
 } else if (usernameElm.value.length < 4){
   usernameError = "can't be less than four characters!";
   parentElm.classList.add('error')
 }
   else if (!doesContainANumber(usernameElm.value)){
    usernameError = "must contain at least one number";
    parentElm.classList.add("success");
    parentElm.classList.remove("error");
   }

   usernameElm.nextSibling.innerText = usernameError
}

form.addEventListener("submit",handleSubmit)