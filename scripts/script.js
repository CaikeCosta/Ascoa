$('.parallax').parallax({imageSrc: 'images/header-image.jpg'});

const btnForm = document.querySelector('#btnForm');
const emailForm = document.querySelector('#emailForm');
const nameForm = document.querySelector('#nameForm');
const messageForm = document.querySelector('#messageForm');
const thanksMessage = document.querySelector('#thanksMessage');

btnForm.addEventListener('click', function() {
    if(emailForm.value != "" && nameForm.value != "" && messageForm.value != "") {
        thanksMessage.innerHTML = 'Obrigado por entrar em contato! Sua mensagem foi encaminhada para o nosso e-mail, retornaremos em breve.<br>'
    }
})