// CSS 
let h1 = document.querySelector("h1");

h1.style.textAlign = "center";
h1.style.paddingTop = "80px";
h1.style.fontSize = "50px"
h1.style.fontFamily = "arial"
h1.style.fontWeight = "100"

let container = document.querySelector(".container");

container.style.textAlign = "center"

let input = document.querySelector("input");

input.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;";

input.style.width = "500px"

input.style.height = "60px"

input.style.fontSize = "20px"

input.style.fontWeight = "100"

input.style.textAlign = "center"

let btn = document.querySelectorAll("button");

btn.forEach((b)=>{
    b.style.height = "30px"
    b.style.width = "100px"
    b.style.margin = "10px"
});




//Selectors
let list = document.querySelector('ul');

let form = document.querySelector("form");

form.addEventListener("submit",function(e){
        e.preventDefault();
        const value = form.querySelector('input[type="Text"]').value;
        
        //create element
        let li = document.createElement('li');
        let activity = document.createElement('span');
        let deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete')

        //style
        li.style.fontSize = '40px';
        li.style.margin = '0 390px'
        li.style.display = 'flex'
        li.style.justifyContent = 'space-between'
        
        
        //add Content
        deleteBtn.textContent = 'delete';
        activity.textContent = value;


        li.appendChild(activity);
        li.appendChild(deleteBtn);
        list.appendChild(li);
})

list.addEventListener('click',function(ev){
        if(ev.target.className = 'delete'){
            let l1 = ev.target.parentElement;
            console.log(ev);
            l1.parentNode.removeChild(l1)
            // list.removeChild(l1);
        }

})