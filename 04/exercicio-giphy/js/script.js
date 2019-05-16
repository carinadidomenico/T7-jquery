$(document).ready(function(){
    
    $('#btn-busca').click(function(event){
        $('.area-gif').html("");

        event.preventDefault(); //Previne que o form tente enviar algo que mude a url

            let palavraBusca = $('#campo-busca').val();
            console.log(palavraBusca);
            
            $.ajax ({
                url: `https://api.giphy.com/v1/gifs/search?api_key=q9XNZOP73wqAN4E9dwlFm2vSMsTZLUnd&q=${palavraBusca}&limit=30&`,
                type: "GET",
                success: function(gifs){
                    let arrayDeGifs = gifs.data;
                    $(arrayDeGifs).each(function(){
                        let container = $('<div>').attr('class', 'gif');
                        let gif = $('<img>').attr('src', this.images.fixed_width.url);
                        container.append(gif);
                        $("#exibe-busca").find('.area-gif').append(container);               
                    });
                },
                error: function(req){
                    let erro = $('<img>').attr('src', `https://http.cat/${req.status}`)
                    $(".area-gif").append(erro);
                }
        
            });

    });
    
})