// code for changing color of heading
let h1 = document.querySelector("h1");
// console.log(h1);
function changecolor(color , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");

        } , delay);
    });
}
changecolor("green" , 1000)
.then(()=>{
    console.log("red color was changed");
    return changecolor("green" , 2000);
})
.then(()=>{
    console.log("green color");
    return changecolor("pink" , 1000);
})
.then(()=>{
    console.log("pink color it is!!!!!!");
})
.catch((error)=>{
    console.log("error" , error);
})
// function savetoDB(data){
//     return new Promise((resolve , reject) => {
//         let is = Math.floor(Math.random()*10)+1;
//         if(is>4){
//             resolve("sucess : data was saved");
//         } else {
//             reject("DATA was not saved");
//         }
//     });
// }
// // improved version
// savetoDB("Apna college")
// .then((result)=>{
//     console.log("data1 is saved");
//     console.log("result" , result);
//     return savetoDB("raha");
// })
// .then((result)=>{
//     console.log("data2 added");
//     console.log("result" , result);
//     return savetoDB("add");
// })
// .then((result)=>{
//     console.log("data3 is saved");
//     console.log("result" , result);
// })
// .catch((error)=>{
//     console.log("catched");
//     console.log("error" , error)
// })
//console.log(savetoDB("Apna college"));
// let request = savetoDB("Apna");
// request
// .then(()=>{
//     console.log("promise was resolved");
//     savetoDB("RAJA")
//     .then(()=>{
//         console.log("data 2 saved");
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

// we use Promise
// this includes the call back hell condition and this condition makes the code too much confusing
// function save(data , sucess , failure){
//     let is = Math.floor(Math.random()*10)+1;
//     if(is>4){
//         sucess();
//     }else{
//         failure();
//     }
// }
// save("apna college" , ()=>{
//     console.log(" Sucess : Your data was saved");

// save("HELLLo" , ()=>{
//     console.log("Sucess2");
//     save("Shruti" , () =>{
//         console.log("sucess3")
//     } , ()=>{
//         console.log("failure3");
//     });

// } 
// , ()=>{
//     console.log("Failure2");
// })
// }
// , ()=>{
//     console.log("Failure : data was not saved due to weak connection")
// })
// function save saved the data to the first time
// function save(data , sucess , failure){
//     let is = Math.floor(Math.random()*10)+1;
//     if(is>4){
//         sucess();
//     }else{
//         failure();
//     }
// }
// save("apna college" , ()=>{
//     console.log(" Sucess : Your data was saved");
// } , ()=>{
//     console.log("Failure : data was not saved due to weak connection")
// })

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     return two() + one();
// }
// three();
// let h1 = document.querySelector("h1");
// setTimeout(() =>{
//     h1.style.color = "red";
//  } , 1000);
//  setTimeout(() =>{
//     h1.style.color = "blue";
//  } , 2000);
//  setTimeout(() =>{
//     h1.style.color = "green";
//  } , 3000)
// function changecolor(color , delay ,nextcolorchange){
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextcolorchange) nextcolorchange();
//     } , delay);
// }
// changecolor("red" , 1000 , () =>{
//     changecolor("orange" , 1000 , () =>{
//         changecolor("Green" , 1000 , () =>{
//             colorchange("yellow" ,1000 , );
//         })
//     })
// })
// function savetoDB(data){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//     console.log("your data was saved");
//     }
//     else{
//         console.log("Weak connection");
//     }
// }
