const modals = document.querySelector(".modals");
const ImgStartNum = 1;
const ImgLastNum = 20;

const MODALIMG_WIDTH = 200;
const MODALIMG_HEIGTH = 200;
const MODALIMG_BORDER = 2;
const MODALIMG_COUNT = 4;

modals.style.width = (MODALIMG_WIDTH+MODALIMG_BORDER)*MODALIMG_COUNT +"px";
modals.style.height = (MODALIMG_HEIGTH+MODALIMG_BORDER)*MODALIMG_COUNT +"px";

const overlay = document.querySelector(".modal_overlay");
const modalcon = document.createElement("div");
modalcon.classList.add("modal_content");

function addModlaImg(){
    for(i=ImgStartNum; i<=ImgLastNum; i++){
        const modalsimg = document.createElement("div");
        modalsimg.classList.add("modals_img");
        modalsimg.id = `${i?`0${i}`:`${i}`}`;
        modalsimg.style.backgroundImage=`url(img/img${i<10 ? `0${i}`:`${i}`}.jpg)`;
        modals.appendChild(modalsimg); 

        const modalnum = parseInt(modalsimg.id);
        modalsimg.addEventListener("click",()=>{
            overlay.classList.remove("hidden");
            modalcon.style.backgroundImage=`url(img/img${modalnum<10 ? `0${modalnum}`:`${modalnum}`}.jpg)`;
            overlay.appendChild(modalcon);
        });
    }
}

const closeModal = () => {
    overlay.classList.add("hidden");
}

overlay.addEventListener("click", closeModal);

function init(){
    addModlaImg();
}

init();