const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');
const peso = document.getElementById('peso');
const idade = document.getElementById('idade');
const n1 = document.getElementById('nivel1');
const n2 = document.getElementById('nivel2');
const n3 = document.getElementById('nivel3');


function cadastrar() {
    const paciente = {
        nome: nome.value,
        telefone: telefone.value,
        email: email.value,
        peso: peso.value,
        idade: idade.value,
        nivel: getNivelSelecionado()
    }
    firebase.database().ref('pacientes/'+paciente.telefone)
        .set(paciente);
}

function getNivelSelecionado(){
    if(n1.checked){
       return 1;
    }
    return n2.checked ? 2:3
}