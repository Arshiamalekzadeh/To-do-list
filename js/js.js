const start=document.querySelector('.content button');
const box = document.querySelector('#content');
const addtodo=document.querySelector('#mamad');
const close=document.querySelector('.do .close img');
const targetuser=document.querySelector(".list");
document.addEventListener("DOMContentLoaded",gettodos);
start.addEventListener("click",e=>{
         box.classList.remove('content');
         box.classList.add('animate__fadeInDown');
         box.classList.add('content-aft');
         addtodo.classList.remove('mamad');
         addtodo.classList.add('todo');
         addtodo.classList.add('animate__fadeInUp');
});
close.addEventListener("click",e=>{
        box.classList.add('content');
        box.classList.remove('content-aft');
        addtodo.classList.add('mamad');
        addtodo.classList.remove('todo');
        addtodo.classList.remove('animate__slideInRight');
        box.classList.remove('animate__slideOutLeft');
});
const userin=document.querySelector('.userin');
const subm=document.querySelector('.addtolist');
const todolist=document.querySelector('.list');
subm.addEventListener("click",Todo);
function Todo(event){
    event.preventDefault()
    saveuserinfo(userin.value);
    if(!userin.value){
        alert("Please enter something")
    }else{
    const divto=document.createElement("div");
    divto.classList.add('divin');
    const addl=document.createElement("li");
    addl.innerText=userin.value;
    addl.classList.add("listli");
    addl.classList.add("animate__animated");
    addl.classList.add("animate__flipInX");
    divto.appendChild(addl);
    userin.value= ""
    const compbu=document.createElement('button');
    compbu.innerHTML='<i class="fas fa-check"></i>';
    compbu.classList.add("listlibutton");
    divto.appendChild(compbu);
    const dlt= document.createElement("button");
    dlt.innerHTML='<i class="fas fa-trash"></i>';
    dlt.classList.add("listlibuttondlt");
    divto.appendChild(dlt);
    todolist.appendChild(divto);
}

}

targetuser.addEventListener("click",addanddlt);
function addanddlt(event){
   const item=event.target;
   if(item.classList[0]==="listlibuttondlt"){
    const lidlt=item.parentElement;
    removeuserinfo(lidlt);
    lidlt.remove();
   }
   if(item.classList[0]==="listlibutton"){
    const lidone=item.parentElement;
        lidone.classList.toggle("divdone");
}
}
function saveuserinfo(sett){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(sett);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function removeuserinfo(se){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    };
    const todoindex=se.children[0].innerText;
  todos.splice(todos.indexOf(todoindex),1);
  localStorage.setItem("todos",JSON.stringify(todos));
}
function gettodos(){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.forEach(function (todo) {
        const divto=document.createElement("div");
        divto.classList.add('divin');
        const addl=document.createElement("li");
        addl.innerText=todo;
        addl.classList.add("listli");
        addl.classList.add("animate__animated");
        addl.classList.add("animate__flipInX");
        divto.appendChild(addl);
        userin.value= ""
        const compbu=document.createElement('button');
        compbu.innerHTML='<i class="fas fa-check"></i>';
        compbu.classList.add("listlibutton");
        divto.appendChild(compbu);
        const dlt= document.createElement("button");
        dlt.innerHTML='<i class="fas fa-trash"></i>';
        dlt.classList.add("listlibuttondlt");
        divto.appendChild(dlt);
        todolist.appendChild(divto);
    })
}