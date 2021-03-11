const nav = document.querySelector("nav");
const first = nav.querySelector(".first");
const second = nav.querySelector(".second");
const third = nav.querySelector(".third");
const fourth = nav.querySelector(".fourth");

let first_app = document.querySelector(".first-app").offsetTop;
let second_app = document.querySelector(".second-app").offsetTop;
let third_app = document.querySelector(".third-app").offsetTop;   
let fourth_app = document.querySelector(".fourth-app").offsetTop;

console.log(first_app);
console.log(second_app);
console.log(third_app);
console.log(fourth_app);

// another day delete
first_app = 0;
second_app = 937;
third_app = 1874;
fourth_app = 2811;

first.addEventListener("click",function(){
    window.scrollTo({top:first_app, behavior:"smooth"});
});

second.addEventListener("click",function(){
    window.scrollTo({top:second_app, behavior:"smooth"});
});

third.addEventListener("click",function(){
    window.scrollTo({top:third_app, behavior:"smooth"});
});

fourth.addEventListener("click",function(){
    window.scrollTo({top:fourth_app, behavior:"smooth"});
});
