console.log("Exercicio 01");


class User {
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User{
    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }
}

const user1 = new User("email@teste.com","senha123");
const adm1 = new Admin("email@teste.com","senha123");

console.log(user1.isAdmin());
console.log(adm1.isAdmin());

console.log("Exercicio 02");


const usuarios = [
    {nome:"diego",idade:23,empresa:"rocketseat"},
    {nome:"gabriel",idade:15,empresa:"rocketseat"},
    {nome:"lucas",idade:30,empresa:"facebook"}
]

const idades = usuarios.map(item => item.idade);
console.log(idades);

const filtro = usuarios.filter(item => (item.idade > 18 && item.empresa === "rocketseat"))

console.log(filtro);

const google = usuarios.find(item => item.empresa === "google");

console.log(google);

const unindoOps = (usuarios.map(item => {
    item.idade *=2;
    return item;
})).filter(item => item.idade <= 50);

console.log(unindoOps);


console.log("Exercicio 03");

console.log("3.1");
const arr = [1,2,3,4,5];
console.log(arr.map(item => item += 10));

console.log("3.2");

const usuario = {nome:"Diego",idade:23};
const mostraIdade = (u) => u.idade;
console.log(mostraIdade(usuario));

console.log("3.3");

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({nome, idade});

console.log(mostraUsuario(nome,idade));
console.log(mostraUsuario(nome));

console.log("3.4");

const promise = () => new Promise((resolve,reject) => resolve("oi"));

promise()
    .then((response) => console.log(response));


console.log("Exercicio 04");


console.log("4.1");
const empresa ={
    nome2:"Rocketseat",
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC",
    }
}

const { nome2, endereco: {cidade, estado}} = empresa;

console.log(nome2);
console.log(cidade);
console.log(estado);

console.log("4.2");

function mostraInfo({ nome, idade}){
    return `${nome} tem ${idade} anos.`
}

console.log(mostraInfo({nome:"Diego",idade:23}));

console.log("Exercicio 05");

console.log("5.1");

const arr2 = [1,2,3,4,5,6];
var [ x, ...y ] = arr2;
console.log(x,y);


function soma(a,b,...c){
    if (c.length <= 0){
        return a+b;
    }else{
        return a + b + c.reduce((total,next) => total+next);
    }
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

console.log("5.2");

const usuario2 = {
    nome: "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        uf: "SC",
        pais: "Brasil",
    }
};

const usuario3 = { ...usuario2, nome: "Gabriel"};
console.log(usuario3);

const usuario4 = { ...usuario2, endereco:{ ...usuario3.endereco, cidade:"Lontras"} };

console.log(usuario4);



console.log("Exercicio 06");

const usuario5 = "Diego";
const idade2 = 23;

console.log(`O usuário ${usuario5} possui ${idade} anos.`);


console.log("Exercicio 07");

const nome3 = "Diego";
const idade3 = 23;

const usuario6 = {
    nome3,
    idade3,
    cidade: "Rio do Sul",
};

console.log(usuario6);

