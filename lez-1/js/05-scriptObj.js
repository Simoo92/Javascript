//notazione letterale

var studente = {
    //definisco proprietà e metodi
    nome:"Simone",
    cognome:"Sudosi",
    promosso: true,
    matricola: 123,
    dataNascita: new Date("06/28/1992").getFullYear(),


    superEsame: function(){
        alert('Hai superato l\' esame');
    }
}

var docente = {
    nome: "Pippo",
    cognome: "Baudo",
    dataNascita: new Date('01/01/1945').getFullYear(),
    programmi: 'Sanremo',

    conduci: function(){
        alert('benvenuti cari studenti')
    }
}

var rettore = {
    nome: "Piero",
    cognome: "Angela",
    dataNascita: new Date('01/01/1933').getFullYear(),
    facolta: 'Super Quark'
}

//recupero il valore di alcune proprietà
console.log(studente.cognome);

studente.superEsame();   // questa è una forzatura console.log(studente.superEsame());

var demo = document.getElementById('demo');

function stampaInfo(persona){
    demo.innerHTML = "";
// demo.innerHTML = persona.nome + '<br>';
// demo.innerHTML += persona.cognome + '<br>';
// demo.innerHTML += persona.matricola + '<br>';
// demo.innerHTML += persona.dataNascita + '<br>';
// demo.innerHTML += persona.promosso + '<br>';

//FOR IN
for (const prop in persona) {
    
        console.log(persona[prop]); //uso la notazione parentesi [] perchè prop è una stringa
    
        if (typeof persona [prop] !='function'){
            demo.innerHTML += prop + " : " + persona[prop] + '<br>'
            
        }
    }

}




