/*
Case Sensitive = reconhece letras maiusculas e minicuslas

por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementByClassName ()
por Seletor: querySelector()
*/

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txt = document.getElementById('txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}
