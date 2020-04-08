
//Modulo 1 - Exercicio 1

/*

var endereco = {
    rua: "rua A",
    numero: 1293,
    bairro: "Bairro B",
    cidade: "Cidade C",
    uf: "Estado D"
};

function imprimeEndereco(end){
    var texto = "O usuário mora em ";
    texto = texto + end.cidade + "/" + end.uf;
    texto = texto + ", no bairro "+end.bairro;
    texto = texto + ", na rua \""+end.rua + "\"";
    texto = texto + " com nº"+end.numero;

    return(texto);

}

console.log(imprimeEndereco(endereco)); 

var div = document.querySelector(".app");

var label = document.createElement("label");

var texto = document.createTextNode(imprimeEndereco(endereco));

label.appendChild(texto);
div.appendChild(label);
*/

//Modulo 1 - Exercicio 2

/*

function pares(x,y){

    for(var i =x;i<=y;i+=2){
        console.log(i)
    }

}

pares(32,321);

*/

//Modulo 1 - Exericio 3


/*
function temHabilidade(skills){

    return(skills.includes("Javascript"));

}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));
*/

//Modulo 1 - Exericio 4

/*

function experiencia(anos){
    var exp;

    if(anos>=0 && anos <=1){
        exp = "Iniciante";
    }else if(anos>1 && anos<=3){
        exp = "Intermediário";
    }else if(anos>3 && anos<=6){

        exp = "Avançado";
    }else if(anos>=7){
        exp = "Jedi Master";
    }else{
        exp = "Valor incorreto!";
    }
    return(exp);
}

console.log(experiencia(1));
console.log(experiencia(2));
console.log(experiencia(4));
console.log(experiencia(8));
console.log(experiencia("oi"));

*/

//Modulo 1 - Exericio 5

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];



function imprimeHabilidadesUsuarios(users){
    var texto;
    for(user of users){
        texto = "O "+user.nome+" possui as habilidades: "+retornaHabilidades(user.habilidades);
        console.log(texto);
    }
}

function retornaHabilidades(arr){
    return(arr.join(", "));
}

imprimeHabilidadesUsuarios(usuarios);