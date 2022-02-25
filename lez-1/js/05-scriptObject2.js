var autoAJSON = '{"marca":"", "modello":"", "cilindrata":"0" , "marcia":"0", "velocita":"0" , "num_giri": "0" , "acceso": "false"}';
var autoObj = JSON.parse(autoAJSON);
console.log(autoObj);
var demo =  document.getElementById('demo');

    
    function prendi(marca, modello, num_giri, marcia){
    var marca = document.getElementById("marca").value;
    var modello = document.getElementById("modello").value;
    // console.log("Stai testando: " + marca + " - " + modello);
    demo.innerHTML += " Stai testando: " + marca + " - " + modello + ". " + '<br>';
    var num_giri = document.getElementById("num_giri").value;
   // console.log(num_giri + " giri");
   demo.innerHTML += num_giri + " giri" + "." + '<br>';
    var marcia = document.getElementById("marcia").value;
    // console.log("Sei alla marcia: " + marcia);
    demo.innerHTML += " Sei alla marcia: " + marcia + ". " + '<br>';
    var velocita = (num_giri/(marcia * 100));
    // console.log("La tua velocità è di: " + velocita);
    demo.innerHTML += " La tua velocità è di: " + velocita;
  
    }

   

