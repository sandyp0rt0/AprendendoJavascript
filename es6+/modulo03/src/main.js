
console.log("Exercícios do Módulo 03");
console.log("Codigo 01");

//Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(() => {resolve()},1000));

function umPorSegundo(){
    delay().then(() => {
        console.log("1s");

        delay().then(() => {
            console.log("2s");

            delay().then(() => {
                console.log("3s");
            })
        })
    })
}

umPorSegundo();



const executaPromisse = async() => {
    
    await delay();
    console.log("1s");
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
}

executaPromisse();


console.log("Codigo 02");

import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.warn(`Usuário ${user} não existe.`);
        })
}

getUserFromGithub("diego3g");
getUserFromGithub("sandyp0rt0");
getUserFromGithub("hn8ed873");



class Api {
    static async getUserInfo(username){
        try{
            console.log((await axios.get(`https://api.github.com/users/${username}`)).data);
        }catch(err){
            console.warn(`Usuário ${username} não existe.`);
        }
        

    }
}

Api.getUserInfo("diego3g");
Api.getUserInfo("sandyp0rt0");
Api.getUserInfo("diego3g9eu8h83");

//ou ainda

const api = async (user) => {
    try {
        console.log((await axios.get(`https://api.github.com/users/${user}`)).data);
    } catch (err) {
        console.warn(`Usuário ${user} não existe.`);
    }
}

api("diego3g");
api("sandyp0rt0");
api("ijnd0983");