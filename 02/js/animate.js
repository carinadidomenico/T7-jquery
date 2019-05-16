$(document).ready(function(){
    $("a").click (function(event){
        if (this.hash !== "") {
            let hash = this.hash;

            $('html, body').animate ({scrollTop: $(hash).offset().top}, 1000, function(){
                window.location.hash = hash; // Coloca a hash na url do navegador
            });
        };
    });
});