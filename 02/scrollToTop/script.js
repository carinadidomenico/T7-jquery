$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();   
        }

    });
    
    $("a").click (function(event){
        
        // Checa se tem um hash #

        if (this.hash !== "") {
            let hash = this.hash;

            $('html, body').animate ({scrollTop: $(hash).offset().top}, 1000, function(){
                window.location.hash = hash; // Coloca a hash na url do navegador
            });
        };
    });
});
