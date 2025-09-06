// let btn = document.querySelector("button");
// console.log(btn);
// console.log();
// btn.onclick = function(){
//     console.log('button was alredy clicked!')
// }
// function hello(){
//     alert('Hello');
// }
// btn.onclick = hello;

// apply the onclick event on all buttons
// let buts = document.querySelectorAll("button");
// console.log(buts);
// for(bt of buts){
//     bt.onclick = shello;
//     bt.onmouseenter = function(){
//         console.log("You entered a button!!");
//     };
//     console.dir(bt);


// }
// let btn = document.querySelector('button');
// btn.addEventListener('click' , shello);
// function shello(){
//     alert("HELLO");
// }
// let btns = document.querySelectorAll('button');
// for(b of btns){
//     b.addEventListener('dblclick' , function(){
//         console.log("Double click event done!!!");
//     });
// }
// let p = document.querySelector("p");
// p.addEventListener("click" , function(){
//     console.log("para was clicked");
//     p.style.color = "red";
//     p.style.backgroundColor = "yellow";
// });
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter" , function(){
   
//     console.log("Mouse inside box");
// });
// for(b of btns){
//     b.addEventListener('click' , function(){
//         console.log(this);
//         console.log(this.innertext);
//         this.style.backgroundColor = "blue";
//     })
// }
// selection of all elements and add event listener
// let btn = document.querySelector('button');
// let  p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// btn.addEventListener("click" , function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// h1.addEventListener("click" , function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// h3.addEventListener("click" , function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// p.addEventListener("click" , function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// // optimized way
// function changecolor(){
    
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";


// };
// btn.addEventListener("click" , changecolor);
// h1.addEventListener("click" , changecolor);
// h3.addEventListener("click" , changecolor);
// btn.addEventListener("click" , changecolor);

// keybord events 
// event arguments
// let btn = document.querySelector('button');
// btn.addEventListener('click' , function(event){
//     console.log(event);
//     console.log('mouse event occurred');
// })
// // keyborad event Begin
// let inp = document.querySelector('input');
// inp.addEventListener('keydown' , function(e){
//     console.log(e);
//     // console.log('key was pressed');
//     console.log("code = " , e.code);
//     if(e.code == "keyU"){
//         console.log("character moves up/forward");
//     }else if(e.code == "keyD"){
//         console.log("character moves down/backward");
//     }else if(e.code == "keyL"){
//         console.log("character moves left");
//     }else if(e.code == "keyR"){
        
//         console.log("character moves right");
    
//     }
// });
// inp.addEventListener('keydown' , function(e){
//     console.log(e);
//     // console.log('key was pressed');
//     console.log("code = " , e.code);
//     if(e.code == "ArrowUp"){
//         console.log("character moves up/forward");
//     }else if(e.code == "ArrowDown"){
//         console.log("character moves down/backward");
//     }else if(e.code == "ArrowLeft"){
//         console.log("character moves left");
//     }else{
        
//         console.log("character moves right");
    
//     }
// });
// inp.addEventListener('keyup' , function(){
//     console.log('key was released');
// })
// gaming zone

