const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); // cursor volta a ficar ativo piscando mesmo que saia
}

function criaBotaoApagar(li){
    li.innerHTML += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar'); ou
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox")
    const li = criaLi();
    li.appendChild(checkBox)
    li.innerHTML += '   ' + textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


document.addEventListener('click', function(e){
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
      }
    });

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // converte para string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON); // mini base de dados do navegador
};

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // convertendo de volta para um objeto JS
    
    for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();