//notazione letterale

var studente = {
    //definisco proprietà e metodi
    nome: "Daniele",
    cognome: "Sudosi",
    promosso: true,
    matricola: 123,
    dataNascita: new Date("10/06/1995"),

    // superEsame: function () {
    //     alert('Hai superato l\'esame');
    // }
}

var docente = {
    nome: "Pippo",
    cognome: "Baudo",
    dataNascita: new Date('01/01/1945').getFullYear(),
    programmi: 'Sanremo',

}


var rettore = {
    nome: "Piero",
    cognome: "Angela",
    dataNascita: new Date(01/01/1933).getFullYear(),
    programmi: 'Super Quark'
}

//se voglio recuperare il valore di alcune proprietà

// console.log(studente.cognome);
// studente.superEsame();

var demo = document.getElementById('demo');

function stampaInfo(persona) {
    demo.innerHTML= "";
    // demo.innerHTML += persona.nome + "<br>";
    // demo.innerHTML += persona.cognome + "<br>";
    // demo.innerHTML += persona.dataNascita + "<br>";
    // demo.innerHTML += persona.promosso + "<br>";
    // demo.innerHTML += persona.matricola + "<br>";

    //FOR IN ottimizzato per gli oggetti
    for (const prop in persona) {

        console.log(persona[prop]);

        if (typeof persona[prop] != "function") {
            demo.innerHTML += prop + " : " + persona[prop] + '<br>';
        }
    }
}
stampaInfo(docente); // uso la notazione parentesi [] perchè
//prop è una stringa