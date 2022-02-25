//Op confronto < > <= >= == === == non controlla il tipo === controlla il tipo

var punti1= 8;//livello 1
var punti2 = 1;// livello 2

var exit1 = 6; //soglia 1
var exit2 = 7; //soglia 2

//Per finire il gioco devo superare la soglia in entrambi i livelli
//var condizione = (punti1 >= exit1) && (punti2 >= exit2);
//console.log(condizione);

//Per finire il gioco è necessario solo il superamento di una soglia
//var condizione = (punti1 >= exit1) || (punti2 >= exit2);

//Statement if

// if(condizione){
//     console.log("Bravo hai terminato il gioco !!");
// }else{
//     console.log("Non hai terminato il gioco !!");
// }


//OP Logici && (AND) || (Or)   !(NOT)

//var parola = prompt('Inserisci la parola d\'ordine');

// if (parola == 'ciao'){//verifica il contenuto, senza verificare il tipo
//     console.log("Hai effettuato l'accesso");
// }else{
//     console.log("Credenziali non valide");
// }

// if (parola === 1234){//sapendo che parola è PER FORZA una stringa, al confronto con un numero perde
//     console.log("Hai effettuato l'accesso");
// }else{
//     console.log("Credenziali non valide");
// }

// var punteggio = 60;
// var skill = 55;
// var msg = '';

// if(punteggio >= 50 && skill >= 40){
//     msg = "Bravo, hai superato il livello"
// }else if(punteggio >= 50 && skill <40){
//     msg = "Devi migliorare le skill per superare il livello";
// }else if (punteggio <=50 && skill >=40){
//     msg = "Devi migliorare il punteggio per superare il livello";
// }else{
//     msg = "Mi dispiace, fai schifo ! Datti all'ippica";
// }

// console.log(msg);

//Statement Switch

// var msg;
// var livello = 0;

// switch(livello){
//     case 1:
//         msg = "Buona fortuna per il primo livello";
//     break;

//     case 2:
//         msg = "Ci sei riuscito, adesso ti tocca il secondo livello";
//     break;

//     case 3:
//         msg = "Bravo, adesso ci sarà da sconfiggere il mostro";
//     break;

//     default:
//         msg = "Benvenuto nel gioco !";
//     break;
// }

// console.log(msg);

// Operatore Ternario
var pioggia = true;
var grandine = true;
//var decisione = (pioggia == true ? "Prendi L'ombrello" : "Puoi uscire senza portare l'ombrello");

var decisione = (pioggia == true && grandine == true ? "Prendi L'ombrello e giubbotto antiproiettili" : "Puoi uscire senza portare l'ombrello");

console.log(decisione);