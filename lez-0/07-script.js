 /////////////////////////////
 var prezzi = [];
 ///////////////////////////

 var totale = 0;

 var elListaOgg = document.getElementById('listOgg');
 var elTotale = document.getElementById('totale');
 var totaleIvato = document.getElementById('totaleIvato');
 var elGrandTotal = document.getElementById('grandTotal');

function registra() {
    
    var items = [""];

    for (var i = 0; i< items.length; i++){
        document.getElementById('listOgg').innerHTML += "<li>" + items[i] + ' - ' + prezzi[i] + " €</li>";
    totale += prezzi[i];
    }


}



 var totaleIvato = (totale * 1.20);
 var grandTotal = (totaleIvato + 6.99).toFixed(2);

 elTotale.innerHTML = "Totale: € " + totale;
 elTotaleIvato.innerHTML = "Totale Iva Inclusa: €" + totaleIvato;

 elGrandTotal.innerHTML = "Grand Totale: €" + grandTotal;



 