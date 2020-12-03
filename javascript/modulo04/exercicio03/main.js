inputEl = document.querySelector("input[name=user]");
//console.log(inputEl);
btnEl = document.querySelector("button");
//console.log(btnEl);

ulEl = document.querySelector("ul");

function adicionar(){
    var user = inputEl.value;
    var url = "https://api.github.com/users/"+user+"/repos";
    ulEl.innerHTML="";
    var carregando = document.createTextNode("Carregando...");
    var carregandoEl = document.createElement("li");
    carregandoEl.appendChild(carregando);
    ulEl.appendChild(carregandoEl);

    axios.get(url)
        .then(function(response){
            ulEl.innerHTML="";
            var liEl,text;
            for (const repo of response.data) {
                
                liEl = document.createElement("li");
                text = document.createTextNode(repo.name);

                liEl.appendChild(text);
                ulEl.appendChild(liEl);

                
                //console.log(repo.name);
            }
            inputEl.value = '';
        })
        .catch(function(error){
            ulEl.innerHTML="";
            console.log(error);
            if(error.response.status == 404){
                var msgError = document.createTextNode("Usuário não existe!");
                var divEl = document.querySelector("div.app");
                divEl.appendChild(msgError);
            }
            console.warn(error);
        })
}


btnEl.onclick = adicionar;