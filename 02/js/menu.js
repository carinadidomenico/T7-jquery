// HOVER

// $(document).ready (function() {
//     $('li').hover (function() {
//         // o this do .menu2 apareça
//         $(this).find ('.menu2').slideDown ();
//     },
//     function(){
//         $(this).find ('.menu2').slideUp ();
//     })
// })


// Click

$(document).ready (function(){
    $('li').click (function() {
        $(this).find ('.menu2').slideToggle (1500);
        $(this).siblings().find ('.menu2').slideUp();
    });
});