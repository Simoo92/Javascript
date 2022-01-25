function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;
    return area;
}

var superf = calcolaArea(4,5);

console.log("L'area vale: " + superf);


function calcolaVolume(altezza, larghezza, profondita){
    // return altezza * larghezza * prof;
    var area = calcolaArea(altezza, larghezza);
    return area * profondita;
}


// console.log("il volume vale: " + calcolaVolume(4,6,5));
console.log("il volume è: " + calcolaVolume(6,5,4));

// ricavare i parametri da HTML