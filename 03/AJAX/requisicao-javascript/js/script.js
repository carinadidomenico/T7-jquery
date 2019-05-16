const app = document.getElementById ('root');
const container = document.createElement ('div');

app.appendChild (container);

let request = new XMLHttpRequest();

request.open ('GET', 'https://jsonplaceholder.typicode.com/photos', true); // request é a requisição que vai ser feita ao servidor 
request.onload = function (){
    let photos = JSON.parse (this.response); // response é a resposta que vai receber do servidor //
    if (request.status >= 200 && request.status < 400) { // status é o status do http que vai retornar na resposta {
        photos.forEach (function (photo){
            const conteudo = document.createElement ('div');
            conteudo.setAttribute ('class', "photo" + photo.id[1]);

            const h2 = document.createElement ('h2');
            h2.textContent = photo.title;

            const img = document.createElement ('img');
            img.setAttribute ('src', photo.url);

            container.appendChild (conteudo);
            conteudo.appendChild (h2);
            conteudo.appendChild (img);
        })
    } else {
        const errorMessage = document.createElement ('img');
        errorMessage.setAttribute ('src', 'https://http.cat/' + request.status);
        app.appendChild (errorMessage) 
    }
}



request.send();
// photo.elemento pega o valor do elemento no objeto