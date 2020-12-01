
//Modulo 2 - Exercios 1 e 2

/*
var div = document.querySelector(".app");

var botao = document.createElement("button");
var textoBotao = document.createTextNode("Cria Quadrado");

botao.appendChild(textoBotao);

botao.onclick = exibeQuadrado;

div.appendChild(botao);



function exibeQuadrado(){
    var quadrado = document.createElement("div");

    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = "#f00";
    quadrado.onmouseover = function (){
        quadrado.style.backgroundColor = getRandomColor();
    }

    div.appendChild(quadrado);
    

}




function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

   */


//Modulo 2 - Exercicio 3

/*
var nomes = ["Diego","Gabriel","Lucas"];

var lista = document.querySelector(".lista");

var item;

for(nome of nomes){
    item = document.createElement("li");
    item.appendChild(document.createTextNode(nome));
    lista.appendChild(item);
}
*/

//Modulo 2 - Exercicio 4

/*
var nomes = ["Diego","Gabriel","Lucas"];

function renderLista(nomes){
    var lista = document.querySelector(".lista");
    lista.innerHTML = "";
    var item;

    for(nome of nomes){
        item = document.createElement("li");
        item.appendChild(document.createTextNode(nome));
        lista.appendChild(item);
    }
}

var input = document.querySelector(".app input");
//var botao = document.querySelector(".app button");

function adicionar(){
    var texto = input.value;
    nomes.push(texto);
    input.value = "";
    renderLista(nomes);
}
*/