$(document).ready (function(){
    $('#animate').click(function(){
        $('#content').animate ({"width": "60%","height": "600px"}, 1000, function(){
            $(this).html ("Animação terminou.");
            $(this).toggle(1000);
        })
    })
})