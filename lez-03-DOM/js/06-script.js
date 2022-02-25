//Aggiungo un elemento all'inizio e uno alla fine
var list = document.getElementsByTagName('ul')[0];

//primo e ultimo elemento
var primo = document.createElement('li');
primo.innerHTML = "Comprare Frutta";
//list.insertBefore(primo, list.firstElementChild);

//per inserirlo al secondo?
list.insertBefore(primo, list.children[1]);

var ultimo = document.createElement('li');
ultimo.innerHTML = "Andare al Cinema";
list.appendChild(ultimo);

//aggiungo una classe a tutti

var lis = document.querySelectorAll('li');

//posso utilizzare un foreeach ma ricordando che la mia var lis è una collection
//quindi va trasformata con l'operatore ... in array
[...lis].forEach(element =>{
    element.setAttribute('class', 'red');
});

for(var i = 0; i < lis.length; i++){
    if(lis[i].hasAttribute('class'))
    lis[i].classList.add('fontUp')
}

//scrivo il conto di quante cose ho da fare
var titolo = document.querySelector('h3'); //prende la prima occorrenza di h3 ma avendone solo una mi conviene
//titolo.innerHTML = "Devi fare " + lis.length + " cose";
var txtH3 = titolo.firstChild.nodeValue;
txtH3.replace('tot', lis.length);

titolo.innerHTML = txtH3.replace('tot', lis.length);
    

    








