$(document).ready (function(){
    
    let palavras = $('.frase-correta').text().split(" ").length;
    $('.palavras').html(palavras);

    $('.campo-digitacao').keyup(function(){
        console.log ("Escrevendo");
        $('.texto-digitado').text ($(this).val());
        
    });

    let palavrasDigitadas = $('.texto-digitado').text().split(" ").length;
    $('.palavras-digitadas').html(palavrasDigitadas);
});