// let form = document.querySelector('form');
// form.addEventListener("submit" , function(event){
    // alert('form submitted');
    // event.preventDefault();
    // console.log("form is submitted");
//     let user= document.querySelector("#username");
//     console.log(user.value);
//     let pass = document.querySelector("#pass");
//     console.log(pass.value);
//     alert(`Hi ${user.value} , your password is ${pass.value}`);
// });
// large change
// let input = document.querySelector("#username");
// input.addEventListener("change" ,  function(){
//     console.log("input changed");
//     console.log("Final value = " , input.value)
// });
// input.addEventListener("input" ,  function(){
//     console.log("input changed");
//     console.log("Final value = " , input.value)
// })
let input = document.querySelector("#inp");
let p = document.querySelector("p");
input.addEventListener("input" , function(){
    console.log(input.value);
    p.innerText = input.value;
});
