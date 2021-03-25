const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad(image){
    console.log("image load complete");
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.addEventListener("load", handleImgLoad(image));
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();