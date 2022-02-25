//COstruire script per ruotare foto della gallery
var foto = document.getElementById('foto');
var time = document.getElementById('time');
var infoTime = document.getElementById('infoTime');

var immagini = [
    'img/1.jpeg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpeg',
    'img/5.jpg',
];

var contatore = 0;

var tagImg = "<img id= 'imgMarch' width=500px, heigt=350px src='" + immagini[0] + "'/>";

foto.innerHTML= tagImg;

setInterval(() => {
    ruotaFoto();
}, 3000);

function ruotaFoto(){
    if(contatore == immagini.length) 
    contatore = 0;
    document.getElementById('imgMarch').src = "" + immagini[contatore];
    contatore++;
}

setInterval(() => {

var oraEsatta = new Date();
console.log(oraEsatta);
var ora = (oraEsatta.getHours()< 10?'0':'') +oraEsatta.getHours() ;
var min = (oraEsatta.getMinutes()<10?'0':'') + oraEsatta.getMinutes();
var sec = (oraEsatta.getSeconds()<10?'0':'') + oraEsatta.getSeconds();

time.innerHTML = ora + ':' + min + ':' + sec;

infoTime.value = ora + ':' + min;

}, 1000);

