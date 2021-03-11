const dragdrop = document.querySelector(".dragdrop");
const imgbox = dragdrop.querySelector(".imgbox");
const tiles = dragdrop.querySelectorAll(".tile");

function showImg(i = 1){
    imgbox.src =`img/img${i<10 ? `0${i}`:`${i}`}.jpg`;
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
  }
  
  function dragEnd() {
    this.className = 'imgbox';
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
  }
  
  function dragLeave() {
    this.className = 'tile';
  }
  
  function dragDrop() {
    this.className = 'tile';
    this.append(imgbox);
  }

imgbox.addEventListener(".dragstart", dragStart);
imgbox.addEventListener(".dragend", dragEnd);

for (const tile of tiles) {
    tile.addEventListener('dragover', dragOver);
    tile.addEventListener('dragenter', dragEnter);
    tile.addEventListener('dragleave', dragLeave);
    tile.addEventListener('drop', dragDrop);
}

showImg();