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

setInterval(carrossel, 3000);

let chave = "87a1f554ca11508e5bec51d0244994a3"

function screen(dados) {
    //Math.floor é responsavel por arredondar o numero
    document.querySelector(".city").innerHTML = "Tempo em  " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = dados.main.humidity + "%"
    //vai montar a url do icone da nuven
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"



    console.log(dados)
}

/*função buscar vai no servidor gratuito e busca as informações */
async function search(city) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&appid="
        + chave + "&lang=pt_br"
        + "&units=metric"
    ).then(res => res.json());

        screen(dados)
       
}

/*captura o input e coloca na variavel */
function clickButton() {
    let city = document.querySelector(".ctext").value
    search(city)
}



