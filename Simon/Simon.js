let gameseq = [];
let userseq = [];
let started = false;
let level =0;
let btns = ["red" , "green" , "yellow" , "purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
    // console.log("Simon game");
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    } , 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    } , 250);
}
function levelup(){
    level++;
    h2.innerText = `level ${level}`;
    // random Node.generated
    let random = Math.floor(Math.random()*3);
    let randcolor = btns[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(random);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    // console.log(gameseq);
    gameflash(randbtn);

}
function checkbutton(){
    // console.log("curr level" , level);
    let idx = level-1;
    if(userseq[idx] === gameseq[idx]){
        console.log("samevalue");
    }else{
        h2.innerText = "Game over! press any key to start" ;
    }
}
function btnpress(){
    // console.log("btn was pressed");
    console.log(this);
    //  which button 
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    checkbutton();
}
let allbtns = document.querySelectorAll(".btn");
for(b of allbtns){
    b.addEventListener("click" , btnpress);
}