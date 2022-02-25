var demo = document.querySelector('#demo');
//Recupero dati da API esterna
//Metodo Fetch

const url = 'https://jsonplaceholder.typicode.com/photos';

var dati = [];

fetch(url)
.then(data => {
    return data.json()})
.then(response => {
    //console.log(response);
    for(var i = 0; i < 20; i++){
        this.dati.push(response[i]);
        demo.innerHTML += '<li><img src= ' + response[i].thumbnailUrl + '></li>'

    }

})

console.log(dati);