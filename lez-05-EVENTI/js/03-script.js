var username = document.querySelector('#username');
var feedback = document.querySelector('#feedback');


function suggerisci(){
    feedback.innerHTML = 'Ti conviene utilizzare uno Username di almeno 5 caratteri';
    feedback.className = 'warning';

}

function controllaUser(){
    var user = username.value;
    if(user.length <= 5){
        feedback.innerHTML = 'Stai usando ' + user.length + ' caratteri';
        feedback.className = 'success';
        username.classList = 'bordoRed';
    }else{
        feedback.innerHTML = 'Stai usando ' + user.length + ' caratteri';
        feedback.className = 'success';
        username.classList = 'bordoGreen';
    
    }

}


username.addEventListener('input', controllaUser, false);


