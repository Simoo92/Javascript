alert ("Benvenuto")

var nomeUtente = prompt ("Come ti chiami ?");

var saluto = "<h2> Ciao" + nomeUtente + ", Benvenuto ! </h2>";

document.write(saluto);

// document.write("<h2>Ciao " + nomeUtente + "</h2>");

var annoCorrente = 2022;
var annoNascita = 1992;

var eta = (annoCorrente - annoNascita);

var messaggio = "<p> Quest' anno avrai " + eta + "anni</p>";

document.write(messaggio);

//document.write ("<p> La tua età è di: " +  annoUtente + " Anni" + "</p>" );

console.log(typeof saluto);
console.log(typeof eta);
console.log(typeof document);
console.log(typeof console);