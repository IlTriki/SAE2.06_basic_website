var section1 = document.querySelector(".section-index");
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");




menuBtn.addEventListener("click", function() {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    menu.classList.remove("active");
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scroll);
});



function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i])== -1){
            element.className += " " + arr2[i];
        }
    }
}
function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}

const calendar = document.getElementById("calendar");
const loginForm = document.querySelector('#login-form');
const message = document.querySelector('#message');
const bouton = document.getElementById("button");


bouton.addEventListener('click', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    console.log(username)
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        showMessage('Veuillez remplir tous les champs !', 'error');
        return;
    }

    if (username !== 'Nathan' || password !== 'Nathan') {
        showMessage('Nom d\'utilisateur ou mot de passe incorrect !', 'error');
        return;
    }
    showMessage('Connexion réussie !', 'success');
    calendar.classList.add("active");
});

function showMessage(messageText, messageType) {
    message.textContent = messageText;
    message.classList.remove('success', 'error');
    message.classList.add(messageType);
}