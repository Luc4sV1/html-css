const tela = document.getElementById("tela-display");
let total = 0

function adicionar(num){
    if (tela.innerHTML.length == 15){
        window.alert("nao pode")
    }else{
        tela.innerHTML += num;
    }
}

function clean(){
    tela.innerHTML = '';
}

function remove(){
    let tamanho = tela.innerHTML.length;
    tela.innerHTML = tela.innerHTML.substring(0, tamanho - 1)
}

function calculo(operator){
    switch(operator){
        case 1: {

        }
    }
}