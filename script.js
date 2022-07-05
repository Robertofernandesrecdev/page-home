const imgs = document.getElementById("img");

const img = document.querySelectorAll("#img img");

let idimg = 0;

function carrossel(){
    idimg++;

    if(idimg > img.length - 1){
        idimg = 0;
    }

    imgs.style.transform = `translateX(${-idimg * 300}px)`;

}

setInterval(carrossel, 2000);