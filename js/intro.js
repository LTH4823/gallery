const intro_Img = document.querySelector(".intro_slide_img");
const intro_controls = document.querySelector(".intro_slide_controls");
const intro_prevBtn = intro_controls.querySelector(".prev");
const intro_nextBtn = intro_controls.querySelector(".next");
const intro_toggle = intro_controls.querySelector(".toggle");

const INTRO_SECOND = 5000;

let intro_Imgnum = 1;
let intro_ImgCount = 25;

function introPrev(){
    intro_Imgnum -= 1;
    if(intro_Imgnum < 1){
        intro_Imgnum = intro_ImgCount;
    introMain(intro_Imgnum);
    }else{
        introMain(intro_Imgnum);
    }
}

function introNext(){
    intro_Imgnum += 1;
    if(intro_Imgnum > intro_ImgCount){
        intro_Imgnum = 1;
        introMain(intro_Imgnum)
    }else{
        introMain(intro_Imgnum)
    }
}
function introMain(){
    intro_Img.src= `img/img${intro_Imgnum < 10 ? `0${intro_Imgnum}` : `${intro_Imgnum}`}.jpg`;
}

let introPlay = setInterval(introNext,INTRO_SECOND);

intro_prevBtn.addEventListener("click",introPrev);

intro_nextBtn.addEventListener("click",introNext);

intro_toggle.addEventListener("click",function(){
    intro_toggle.classList.toggle("stop");
    if(intro_toggle.className.includes("stop")){
        clearInterval(introPlay);
        intro_toggle.style.color = "#000000";
    }else{
        introPlay = setInterval(introNext,INTRO_SECOND);
        intro_toggle.style.color = "#ffffff";

    }
});

introMain();