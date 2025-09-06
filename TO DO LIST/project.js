let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
button.addEventListener("click" , function(){
   
    if(input.value != ''){
    let item = document.createElement("li");
    item.innerText = input.value;
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("delete");
    item.appendChild(btn);
     ul.appendChild(item);
    input.value = '';
    }

});
ul.addEventListener("click" , function(event){
    // console.log("event clicked");
    // console.log(event.target);
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})
// let btns = document.querySelectorAll(".delete");
// for(b of btns){
//     b.addEventListener("click" , function(e){

//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }