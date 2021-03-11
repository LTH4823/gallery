const slides = document.querySelector(".slides");
const slidecontrols = document.querySelector(".slide-controls");
const controls = document.querySelector(".controls");
const prevBtn = controls.querySelector(".prev");
const nextBtn = controls.querySelector(".next");
const toggleBtn = controls.querySelector(".toggle");

const mainslide = document.querySelector(".slide-main");

const slideheight = 100;
const slideWidth = 100;
const slideMargin = 5;

const slideSize = slideWidth + slideMargin;

const slideStart = 1;
const slideLast = 25;

const SLIDE_SECOND = 4000;

let currentIdx = 0;
let slideCenter = 1;

slidecontrols.style.width = slideSize * 5 + "px";
slidecontrols.style.height = slideheight + "px";
slides.style.width = (slideSize)*slideLast -slideMargin + "px";
slides.style.gridTemplateColumns = `repeat(${slideLast},1fr)`;

function slideList(){
    for(i=slideStart; i<=slideLast; i++){
        const slideli = document.createElement("div");
        slideli.classList.add("slides_item");
        slideli.id = `${i <10 ? `0${i}`:`${i}`}`
        slideli.style.backgroundImage=`url(img/img${i<10 ? `0${i}`:`${i}`}.jpg)`;
        slides.appendChild(slideli);
        slideli.addEventListener("click", ()=>{
            const slideNum = parseInt(slideli.id);
            slideCenter = slideNum;
            showSlide(slideCenter);
            movingSelect(slideCenter);
        });
    }    
}

const showSlide = (num) =>{
    mainslide.src = `img/img${num<10 ? `0${num}`:`${num}`}.jpg`;
}

function moveSlide(num){
    slides.style.left = -num * slideSize +"px";
    currentIdx = num;
}

function movingSelect(num){
    moveSlide(num-1);
}

function movingLeft(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }else{
        moveSlide(slideLast - 1);
    }
}

function movingRight(){
    if(currentIdx < slideLast-1){
        moveSlide(currentIdx + 1);
    }else {
        moveSlide(0);
    }
}

function nextSlide(){
    slideCenter += 1;
    if(slideCenter <= slideLast){
        showSlide(slideCenter);
    }else{
        slideCenter = slideStart;
        showSlide(slideCenter);
    }
}

function prevSlide(){
    slideCenter -= 1;
    if(slideCenter < 1){
        slideCenter = slideLast;
        showSlide(slideCenter);
    }else{
        showSlide(slideCenter);
    }
}

function init(){
    showSlide(slideCenter);
    slideList();
}

let slideInterval = setInterval(()=>{
    nextSlide();
    movingRight();
},SLIDE_SECOND);

nextBtn.addEventListener("click",()=>{
    movingRight();
    nextSlide();
});

prevBtn.addEventListener("click",()=>{
    movingLeft();
    prevSlide();
});

toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("stop");
    if(toggleBtn.className.includes("stop")){
        clearInterval(slideInterval);
        toggleBtn.style.color = "#000000";
    }else{
        slideInterval = setInterval(()=>{
            nextSlide();
            movingRight();
        },SLIDE_SECOND);
        toggleBtn.style.color = "#ffffff";
    }
});

init();

