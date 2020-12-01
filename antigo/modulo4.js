

//Modulo 04 - Exercicio 01

/*
function checaIdade(idade){
    return new Promise(function(resolve,reject){
        if(idade>18){
            setTimeout(resolve(),2000);
        }else{
            setTimeout(reject(),2000);
        }
        
    });

}

checaIdade(13)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    })
*/


//Modulo 04 - Execicio 02 e 03


/*
var div = document.querySelector(".app");

var input = document.querySelector(".app input");

var lista = document.querySelector(".lista");

var msgErro = document.createElement("label");
msgErro.appendChild(document.createTextNode("Usuário não existe!"));
div.appendChild(msgErro);
msgErro.style.visibility = "hidden";



function adicionar(){

    var user = input.value;
    var url = "https://api.github.com/users/"+user+"/repos";
    msgErro.style.visibility = "hidden";
    lista.innerHTML = "";
    var item;
    item = document.createElement("li");
    item.appendChild(document.createTextNode("Carregando..."));
    lista.appendChild(item);

    axios.get(url)
        .then(function(response){
            //console.log(response.data[0]);
            
            lista.innerHTML = "";
            
            var arr = response.data;

            for(var repo = 0;repo<arr.length;repo++){
                item = document.createElement("li");
                item.appendChild(document.createTextNode(arr[repo].name));
                lista.appendChild(item);
            }

        })
        .catch(function(error){
            console.warn(error);
            lista.innerHTML = "";
            msgErro.style.visibility = "visible";

        })

}


*/