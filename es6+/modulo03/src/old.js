import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            console.log(await axios.get(`https://api.github.com/users/${username}`));
        }catch(err){
            console.warn(`Usuário ${username} não existe`);
        }
    }

  

    static async umPorSegundo(d=3){
        console.log(setTimeout("oi",1000));
    }
}




console.log("Exercicios do Módulo 03");

console.log("Codigo 01");

//Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve,1000));

function umPorSegundo(){
    delay().then(() => {
        console.log("1s");

        delay().then(() => {
            console.log("2s");

            delay().then(() => {
                console.log("3s");
            });
        });
    });
}

umPorSegundo();



Api.umPorSegundo("ffrg");

console.log("Codigo 02");

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then((response) => {
            console.log(response.data);
        }).catch(err => {
            console.log(`Usuário ${user} não existe`);
        })
}

getUserFromGithub("diego3g");
getUserFromGithub("sandyp0rt0");
getUserFromGithub("jm98d83");

Api.getUserInfo("diego3g");
Api.getUserInfo("sandyp0rt0");
Api.getUserInfo("ikej93");
