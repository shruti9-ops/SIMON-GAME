// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('div a'));
// console.dir(document.querySelectorAll("div a"));
// // selecting of elements 
// let para = document.querySelector('p');
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.textContent); //hidden text (shows all the content) it contains some spaces(content iis showing as similiar to the written in html file)
// console.dir(para.innerHTML);//complete markup shows including all the tags
// para.innerText = "abac";
// para.innerText = "abax <b>hii</b>"; // text written in it and showing on the page data -> shows the visible text contained in a node(data written on the screen)
// para.innerHTML = "ee here <b> jii </b>";//text written in the html 
// console.dir(para.innerHTML);
// let heading = document.querySelector('h1');
// console.log(heading);
// heading.innerHTML = `<u>${heading.innerText}</u>`;
// // manipulating attributes
// // get attribute(getters) set  attribute(setters)
// // syntx of get getAttribute
// // Object.getAttribute('attribute');
// // object .setAttribute('attribyte' , 'value');
// let img = document.querySelector('img');
// console.dir(img);
// console.log(img.getAttribute('id'));
// // img.setAttribute('id' , 'spidermanimg');
// // console.log(img.getAttribute('id'));
// // img.setAttribute('src' ,"assets/creation_3.jpeg");
// // console.log(img.getAttribute(src));  
// // manipulating the styling
// // Object.style


// console.dir(img);
// let head = document.querySelector("h1");
// console.log(head.style);
// // head.style.color = "red";
// // head.style.backgroundColor = "Yellow";
// let links = document.querySelectorAll(".box a");
// // for(let j = 0;j<links.length;j++){
// //     links[j].style.color = "YELLOW";
// //     links[j].style.color = "violet";
// //     // links[j].style.color = "green";
// // }
// for(link of links){
//     link.style.color = "purple";
// }
// // style=>inline styling we use the classList
// console.log(head.classList);
// head.classList.add("green");
// head.classList.remove('green');
// console.log(head.classList.contains('green'));
// // toggle = between add ot remove
// console.log(head.classList.toggle('green'));
// let box = document.querySelector(".box");
// box.classList.add('underline' , 'boxbg');
// // classList
// let h = document.querySelector('h1');
// console.log(h);
// console.log(h.classList);
// // adding class to the list
// console.log(h.classList.add('blue'));
// // remove the class from the classlist
// console.log(h.classList.remove('blue'));
// // classlist is used for setting multiple classes with different attributes
// // contain method is used to check that the class is present in the classlist or not
// console.log(h.classList.contains('Blue'));
// // toggle is just like switch as it turns on->off or off->on
// console.log(h.classList.toggle('blue'));
// let box1 = document.querySelector(".box");
// console.log(box1.classList.add("yellowbg"));
// // Navigation
// // parent Element
// // children
// // previouselementsibling/next element sbling
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
// let box2 = document.querySelector('.box');
// console.log(box2.childElementCount);
// let ul = document.querySelector('ul');
// console.log(ul.children);
// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);
// // console.log(document.createElement('p'));
// let paa = document.createElement('p');
// paa.textContent = "Hi, My name is Shruti!!!!";
// let body = document.querySelector('body');
// body.appendChild(paa);
// let pp = document.createElement("p")
// pp.innertext = " here I am!!";
// body.append('pp');
// box2.appendChild(paa);
// let btn = document.createElement('button');
// console.dir('btn');
// btn.innerText = "Click me..";
// box2.appendChild(btn);
// paa.append("i want to become software engineer!!!");
// box2.prepend(paa);
// let par = document.querySelector('p')
// console.log(par);
// let btn2 = document.createElement('button');
// btn2.innerText = "CLicking on me!!";
// par.insertAdjacentElement('beforebegin' , btn2);
// par.insertAdjacentElement('afterbegin' , btn2);
// par.insertAdjacentElement('afterend' , btn2);
// par.insertAdjacentElement('beforeend' , btn2);
// btn2.remove();
// body.remove();
            // ------practice QS------------
let body = document.querySelector('body');
let p = document.createElement('p');
p.textContent = "Hey i'm red";
body.append(p);
p.classList.add("redbg");
let h3 = document.createElement('h3');
h3.textContent = "I'm blue h3";
body.append(h3);
h3.classList.add("bluebg");
let div = document.createElement('div');

body.append(div);
div.classList.add("dbb");
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
let p1 = document.createElement('p');
p1.innerText = "ME TOO";
div.append(h1);
div.append(p1);
