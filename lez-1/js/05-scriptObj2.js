var auto = {
    marca: "Fiat",
    modello: "Tipo",
    cilindrata: 1500,
    marcia: 6,
    velocita: 0,
    num_giri: 1000,
    acceso:false,

    presentaMotore(marca,modello){
        this.marca= marca;
        this.modello=modello;
        console.log('Stai testando: ' + this.marca + ' - ' + this.modello);
    },

    modificaGiri: function(num_giri){
        this.num_giri = num_giri;
        console.log(this.num_giri + 'giri');
    },

    cambiaMarcia: function(marcia){
        this.marcia = marcia;
        console.log("Hai cambiato marcia !!!");
        console.log("Sei alla marcia : " + this.marcia);
    },

    calcolaVel: function(num_giri,marcia){
        this.presentaMotore('Ford', 'Mustang')
        this.modificaGiri(num_giri);
        this.cambiaMarcia(marcia);
        this.velocita = (this.num_giri / (this.marcia * 100));
        console.log("La tua velocità è di: " + this.velocita);

    }
}


function valutaMotore(){
    // auto.calcolaVel('Ford', 'Focus', 5000 , 2);
    // i parametri devono essere presi a partire dai campi imput nella pagina HTML
    
}

//prendere le cose scritte in alto e portarle giu dentro valuta motore 