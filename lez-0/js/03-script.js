// Dichiarazione standard Array
var colori = ["Blu" , "Verde" , "Giallo" , "Viola", "Rosa"];

console.log(colori.length);

// Seleziono il primo elemento
var primoEl = colori [0];
var secondoEl = colori [1];
var terzoEl = colori [2];

// console.log(primoEl);
// console.log(secondoEl);
// console.log(terzoEl);
console.log(colori.length);

//push metodo per aggiungere un elemento
colori.push("Nero");

//sort metodo per ordinare
colori.sort();

//reverse()
colori.reverse();

for(var i=0; i < colori.length; i++) {
    console.log(colori[i]);
}


//CDG Cafonata del giorno, non si deve fare
var mioArr = ["Dario", "Mennillo", 32, 1989, true];

console.log(mioArr);

document.write("Nome:" + mioArr[0] + "<br>");
document.write("Età:" + mioArr[2] + "<br>");