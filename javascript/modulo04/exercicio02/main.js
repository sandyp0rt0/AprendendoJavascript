inputEl = document.querySelector("input[name=user]");
//console.log(inputEl);
btnEl = document.querySelector("button");
//console.log(btnEl);

ulEl = document.querySelector("ul");

function adicionar(){
    var user = inputEl.value;
    var url = "https://api.github.com/users/"+user+"/repos";
    ulEl.innerHTML="";
    axios.get(url)
        .then(function(response){
            
            var liEl,text;
            for (const repo of response.data) {
                liEl = document.createElement("li");
                text = document.createTextNode(repo.name);

                liEl.appendChild(text);
                ulEl.appendChild(liEl);

                inputEl.value = '';
                //console.log(repo.name);
            }
        })
        .catch(function(error){
            console.warn(error);
        })
}


btnEl.onclick = adicionar;