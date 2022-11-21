const resultado = document.querySelector('.result')
const confirmar = document.querySelector('#res')

function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = ' ';
}

function backspace(){
    if(resultado.textContent){
        let result = document.querySelector('#resultado').innerHTML;
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function equal(){
    document.querySelector('#resultado').innerHTML = eval(resultado.innerHTML);
}