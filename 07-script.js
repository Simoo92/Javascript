alert("Benvenuto nella pagina di resoconto per acquisti online");

var elSaluto = document.getElementById("benvenuto")


var nomeUtente = prompt('Come Ti Chiami ?');

elSaluto.innerHTML = "Ciao " + nomeUtente;

console.log(nomeUtente);


var items = ["Monitor", "Tastiera", "Mouse", "Cuffie"];
var prezzi = [350, 50, 35, 60];


var elListaOgg = document.getElementById("listaOgg");

var elTotale = document.getElementById("totale");

var elResOgg= document.getElementById("resOgg");

var elTotaleIvato = document.getElementById("totaleIvato");

var elSpedizione = document.getElementById("spedizione");

var elGrandTot = document.getElementById("grandTotal");

console.log(items, prezzi);



var listaAcquistiOnline = "";
var total = 0;


for (var i = 0; i < items.length; i++) {
    listaAcquistiOnline += "<li>" + items[i] + ' - ' + prezzi[i] + " €</li>";
    total += prezzi[i];

}

console.log(total + " €");

elListaOgg.innerHTML = listaAcquistiOnline;
elTotale.innerHTML = "<h2> totale senza iva: " + total + " € </h2>";



var iva = total / 100 * 22;
var totaleIvato = total + iva;

console.log(totaleIvato + " €");

elTotaleIvato.innerHTML = "<h2> totale con iva: " + totaleIvato + " € </h2>";



var spedizione = 30;

console.log(spedizione + " €");


elSpedizione.innerHTML = "<h2> spedizione: " + spedizione + " € </h2>";



var grandTotal = totaleIvato + spedizione;

console.log(grandTotal + " €");


elGrandTot.innerHTML = "<h2> Totale: " + grandTotal + " € </h2>";