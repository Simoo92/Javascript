// var items = [];

// var btn1 = document.getElementById('btn1');

// var output = document.getElementById('output');

// var listItem = document.getElementById('listItem');

// btn1.onclick = prova

// function prova(){
//     var item = document.getElementById('listItem').value;
    

//     console.log(listItem.value);

//     items.push(item);


//     console.log(items);
    
    
// }


var items = [];

var btn1 = document.getElementById('btn1');
var voce = '';

function stampa(listaArr){
    //si occupa solo di creare l'html corretto
    //creo la lista ul e i rispettivi li
var output = '';
output = '<ul>';

for(var i = 0; i < listaArr.length; i++){
   // output += '<input type="checkbox><lable>' + listaArr[i] + '</label><br>';
    output += '<li>' + listaArr[i] + '</li>';
}
output += '</ul>';

document.getElementById('output').innerHTML = output;

}



btn1.onclick = function(){
    voce =  document.getElementById('listItem').value;

    if(voce.length > 0 && items.indexOf(voce) == -1){
    items.push(voce);
}else{
    alert('scrivi qualcosa o qualcosa che non esiste in lista')
}
    document.getElementById('listItem').value = '';
    stampa(items);
    console.log(items);
}

