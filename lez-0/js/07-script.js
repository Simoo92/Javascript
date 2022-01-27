 /////////////////////////////
 var items = [];
 var prezzi = [];
 ///////////////////////////
 
 function registra() {
     var item = document.getElementById('item').value;
     var prezzo = document.getElementById('prezzo').value;
     
     
     
     
     if (item == ''|| prezzo == '') {
         alert('Inserisci qualcosa')
        }
        else {
            var totale = 0;
            var elListaOgg = document.getElementById('listaOgg');
            elListaOgg.innerHTML ="";
            items.push(item);
            prezzi.push(Number(prezzo));
           
            for (var i = 0; i< items.length; i++){
                elListaOgg.innerHTML += "<li>" + items[i] + ' - ' + prezzi[i] + " €</li>";
                totale += prezzi[i];
               }

                var elTotale = document.getElementById('totale');
                var elTotaleIvato = document.getElementById('totaleIvato');
                var elGrandTotal = document.getElementById('grandTotal');
               
               var totaleIvato = (totale * 1.20);
               var grandTotal = (totaleIvato + 6.99).toFixed(2);
               elTotale.innerHTML = "Totale: € " + totale;
               elTotaleIvato.innerHTML = "Totale Iva Inclusa: €" + totaleIvato;
               elGrandTotal.innerHTML = "Grand Totale: €" + grandTotal;
           
           document.getElementById('item').value = '';
           document.getElementById('prezzo').value = '';
            

    }


}









 