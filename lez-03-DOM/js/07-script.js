// var img1 = document.getElementById('img1')
// var img2 = document.getElementById('img2')
// var img3 = document.getElementById('img3')
// var img4 = document.getElementById('img4')
// var img5 = document.getElementById('img5')

// img1.setAttribute("src" , "img/mew.jpg")
// img2.setAttribute("src" , "img/mewtwo.jpg")
// img3.setAttribute("src" , "img/rayquaza.jpg")
// img4.setAttribute("src" , "img/lugia.jpg")
// img5.setAttribute("src" , "img/arceus.jpg")

// var list = document.getElementsByTagName("ul")[0];

// var primo = document.getElementsByTagName('li')[1];
// primo.innerHTML = "Mew";
// list.insertBefore(primo, list.firstChild);

// var secondo = document.getElementsByTagName('li')[2];
// secondo.innerHTML = "Mewtwo";
// list.insertBefore(secondo, list.children);

// var terzo = document.getElementsByTagName('li')[3];
// terzo.innerHTML = "Rayquaza";
// list.insertBefore(terzo, list.children);

// var quarto = document.getElementsByTagName('li')[4];
// quarto.innerHTML = "Lugia";
// list.insertBefore(quarto, list.children);

// var quinto = document.getElementsByTagName('li')[5];
// quinto.innerHTML = "Arceus";
// list.appendChild(quinto);

var pokemons = ["mew", "mewtwo", "rayquaza", "lugia","arceus"];

// var img1 = document.querySelector("#img1");
// img1.setAttribute("src", "img/" + pokemons[0] + ".jpg");

var imgs = document.querySelectorAll("img"); // producono una nodelist == Array
var lis = document.querySelectorAll("li");

//settare solo immagini
for(var i = 0; i < pokemons.length; i++){
    imgs[i].setAttribute("src", "img/" + pokemons[i] + ".jpg");
    imgs[i].setAttribute("class" , "dimImg");
}

// costruire nomi e link
for(var i = 0; i < pokemons.length; i++){
    var aLink = document.createElement("a");
    // var nomePok = document.createTextNode(pokemons[i]);
    // aLink.appendChild = pokemons[i];
    aLink.innerHTML = pokemons[i];
    aLink.setAttribute("href", "https://wiki.pokemoncentral.it/" + pokemons[i]);
    aLink.setAttribute("target" , "_blank")
    lis[i].appendChild(aLink);

}

function scegliPok(){
    var select = document.getElementById("miaSel");
    var nomePok = document.getElementById("miaSel").children;
    console.log(nomePok[select.selectedIndex].text);
}






