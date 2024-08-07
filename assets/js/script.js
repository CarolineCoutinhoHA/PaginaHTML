let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let telefone = document.getElementById('telefone');
let nomeOk = false
let emailOk = false;
let assuntoOk = false;
let telefoneOk = false;
let mapa = document.querySelector('#mapa')

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';
telefone.style.width = '100%';

function validaNome() {
    let txt = document.getElementById('txtNome');
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido";
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome Válido';
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'Email Válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaTelefone() {
    let txtTelefone = document.getElementById('txtTelefone');
    let telefoneRegex = /^\+?(\d[\d\s\-\.()]{8,15}\d)$/;

    if (!telefoneRegex.test(telefone.value)) {
        txtTelefone.innerHTML = 'Telefone Inválido';
        txtTelefone.style.color = 'red';
        txtTelefone.style.display = 'block'; 
    } else {
        txtTelefone.style.display = 'none';
        telefoneOk = true; 
    }
}

function validaAssunto() {
    let txtAssunto = document.getElementById('txtAssunto');

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && telefoneOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente antes de enviar...');
    }
}
function mapaZoom() {
    var mapa = document.getElementById('mapa');
    mapa.style.width = '600px';  
    mapa.style.height = '400px'; 
}

function mapaNormal() {
    var mapa = document.getElementById('mapa');
    mapa.style.width = '400px';  
    mapa.style.height = '250px'; 
}
