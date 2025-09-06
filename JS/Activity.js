let btn = document.querySelector('button');
btn.addEventListener('click' , h);
function h(){
    let h1 = document.querySelector('h1');
    let randomcolor = getrandomcolor();
    h1.innerText = randomcolor;
    let bgc = document.querySelector('div');
    bgc.style.backgroundColor = randomcolor;
}
function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}
// console.log("The random color is:" , getrandomcolor);