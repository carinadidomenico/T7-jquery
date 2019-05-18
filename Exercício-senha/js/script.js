$(document).ready(function() {
    $('#senha').keyup(function(){
        var senha = $('#senha').val();
        var forca = 0;
        var barra = document.querySelector ('#progresso')
        var regNumerico = new RegExp (/[0-9]/i);
        var regCaractere = new RegExp (/[a-z]/i);
        var regEspecial = new RegExp (/[^a-z0-9]/i);
        var aceito = "Não";

        
        // SENHA
        
        if (senha.length == 0) {
            barra.style.width = "0vw";
        }

        if (senha.length > 6) {
            forca += 25;
        }
        
        if (regNumerico.test(senha)) {
            forca += 25;
        }
        
        if (regCaractere.test(senha)) {
            forca += 25;
        }        

        if (regEspecial.test(senha)) {
            forca += 25;
        }
    

        // FORÇA

        if (forca >= 25) {
            aceito = "Não";
            barra.style.width = "8vw";
            barra.style.backgroundColor = "red";
            barra.style.transitionDuration = "2s";
        }  

        if (forca >= 50) {
            aceito = "Não";
            barra.style.width = "16vw";
            barra.style.backgroundColor = "yellow";
            barra.style.transitionDuration = "2s";
        }
        
        if (forca >= 75) {
            aceito = "Sim";
            barra.style.width = "24vw";
            barra.style.backgroundColor = "green";
            barra.style.transitionDuration = "2s";
        } 

        if (forca == 100) {
            aceito = "Excelente";
            barra.style.width = "32vw";
            barra.style.backgroundColor = "green";
            barra.style.transitionDuration = "2s";
        } 
        
        $('#forca').html (`Força: ${forca}% de força <br> Aceito: ${aceito}`);
    });
});
