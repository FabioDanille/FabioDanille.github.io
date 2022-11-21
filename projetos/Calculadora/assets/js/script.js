function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clearNum(){
    document.getElementById('resultado').innerHTML = "";
}

function backspace(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);  // aqui gera a possibilidade de apagar de 1 em 1
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); // eval = Evaluates JavaScript code and executes it
    }else{
        document.getElementById('resultado').innerHTML = "Insira o cálculo"
    }
}