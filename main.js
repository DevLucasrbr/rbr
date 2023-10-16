const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-caracteres');
const emailRegex = /@/



function setErro(index){
    campos[index].style.border = '3px solid #e63363';
    spans[index].style.display = 'block';
}

function nomeCompleto(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2;
}

function removeErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidade() {
    if(campos[0].value.length < 3)
    {
        setErro(0);
    }
    else
    {
        removeErro(0)
    }
}

function nameValidade(nomecompleto) {
    const nomeComoArray = nomecompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const escolaridade = document.getElementById('escolaridade')
    const sexo = document.getElementById('sexo')
    const resenha = document.getElementById('resenha')
    const senha = document.getElementById('senha')
    const nomealuno = document.getElementById('nomealuno');
    const emailaluno = document.getElementById('emailaluno');
    const mensagemdesucesso = `Parabens Aluno(@): ${nomealuno.value}, 🥳 Voce Esta Matriculado(@) com sucesso! 
    Sera Enviado Uma Mensagem De Confirmação Para o Email Cadastrado: ${emailaluno.value}! 
    Estamos Muito Felizes Em Ter Voce Conosco 🎊
    SEJA BEM VINDO(@)😍`;

    if (!nameValidade(nomealuno.value)) {
        alert("o nome nao esta completo");
    } else {
        alert(mensagemdesucesso);

        nomealuno.value = '';
        emailaluno.value = '';
        escolaridade.value = '';
        sexo.value = '';
        resenha.value = '';
        senha.value = '';

    }
})

function emailValido(){
    if (!emailRegex.test(campos[1].value)) {
      setErro(1);
    }

    else
    {
        removeErro(1);
    }

}

function mainpassvalido(){
    if(campos[2].value.length < 8){
        setErro(2);
    }
    else
    {
        removeErro(2);
        comparesenha();
    }
}

function comparesenha(){
    if(campos[2].value == campos[3].value && campos [3].value.length >= 8)
    {
        removeErro(3);
    }
    else
    {
        setErro(3);
    }
}






/*const form = document.getElementById('form');
const campos = document.querySelectorAll('.inputs required');
const spans = document.querySelectorAll('.span-caracteres');

function setErro(index){
    alert(in);
}

function nameValidade(){
    if(campos[0].value.length < 3)
    {
        setErro(0);
    }
    else
    {
        console.log('valido o nome');
    }
}*/