function aggiungi(){
    var input = document.getElementById("input").value;
    var elLI = document.createElement("li");
    var item = document.createTextNode(input);
    elLI.appendChild(item);

    document.getElementById("demo").appendChild(elLI);

    // Array.push

    //creo pulsante elimina
    var elElim = document.createElement("span");
    var icon = document.createElement("i")
    icon.setAttribute("class", "fa-solid fa-trash");
    elElim.appendChild(icon);


    elElim.onclick = function(){//gestione JS dell'evento
        elLI.parentNode.removeChild(elLI);
    }

    elLI.appendChild(elElim);

    document.getElementById("input").value = " ";


}


// Inserire tutti gli Item in un array di oggetti aggiungento la data e l'ora
//creare il pulsante modifica
//creare il pulsante per la trasformazione in formato JSON
//Inviare tutto ad una API
