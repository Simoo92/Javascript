var punteggi = [24,36,40,52];

var msg = "";

//FOR Classico

for(var i = 0; i < punteggi.length; i++){

    msg += "<li> Livello: " +Number(i + 1) + " punteggio " + punteggi[i] + "</li>";
    
    if(punteggi[i] <30){
        msg += "Qui potevi impegnarti di più"
    }

}

var demo = document.getElementById("demo");
demo.innerHTML = msg

//FOR OF // piu adatto agli array

for (var iteratore of punteggi){
    console.log("punteggi :" + iteratore);
}

//FOR IN //piu adatto agli oggetti
var studente = {
    nome: "Pippo",
    cognome: "Ippo",
    indirizzo: "Via tal dei tali 55",
    zaino:{
        astuccio: ["penna", "matita", "evidenziatore"]
    }
}
// le parentesi quadre sono equivalenti alle annotazioni quindi non si mette le parentesi quadre perchè è un array
for (var prop in studente){
    console.log(prop + ': ' + studente[prop]);
}

for(var prop2 in studente.zaino){
    console.log(prop2 + ":" + studente.zaino[prop2]);
}

//FOR EACH

punteggi.forEach(function(i){
     console.log(i.values());
 })

var titoli = document.getElementsByTagName("h1"); // -->HtmlCollection

[...titoli].forEach(i =>{
console.log(i.innerText);
console.log(i);
})

//
