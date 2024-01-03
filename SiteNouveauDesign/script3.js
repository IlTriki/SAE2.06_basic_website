var section1 = document.querySelector(".section-index");
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var article1A = document.querySelector(".article_1A");
var article2A = document.querySelector(".article_2A");
var article3A = document.querySelector(".article_3A");
var articleLP = document.querySelector(".article_LP");
var closeBtn = document.querySelector(".close-btn");
var btn1A = document.querySelector(".annee1");
var btn2A = document.querySelector(".annee2");
var btn3A = document.querySelector(".annee3");
var btnLP = document.querySelector(".LP");


btn1A.addEventListener("click", function() {
    article1A.classList.add("active");
    article2A.classList.remove("active");
    article3A.classList.remove("active");
    articleLP.classList.remove("active");         
    section1.classList.add("annee1");  
    section1.classList.remove("annee2"); 
    section1.classList.remove("annee3"); 
    section1.classList.remove("LP"); 
    showMessage('1ère année');
});

btn2A.addEventListener("click", function() {
    article1A.classList.remove("active");
    article2A.classList.add("active");
    article3A.classList.remove("active");
    articleLP.classList.remove("active");  
    section1.classList.add("annee2");   
    section1.classList.remove("annee1"); 
    section1.classList.remove("annee3"); 
    section1.classList.remove("LP"); 
    showMessage('2ème année');          
});

btn3A.addEventListener("click", function() {
    article1A.classList.remove("active");
    article2A.classList.remove("active");
    article3A.classList.add("active");
    articleLP.classList.remove("active");
    section1.classList.remove("annee2");   
    section1.classList.remove("annee1"); 
    section1.classList.add("annee3"); 
    section1.classList.remove("LP"); 
    showMessage('3ème année');           
});

btnLP.addEventListener("click", function() {
    article1A.classList.remove("active");
    article2A.classList.remove("active");
    article3A.classList.remove("active");
    articleLP.classList.add("active");
    section1.classList.remove("annee2");   
    section1.classList.remove("annee1"); 
    section1.classList.remove("annee3"); 
    section1.classList.add("LP");    
    showMessage('Passerelle');                
});



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

function showMessage(messageText) {
    message.textContent = messageText;
}
filtreObjets("all");

function filtreObjets(c){
    var x,i ;
    x = document.getElementsByClassName("article");
    if(c == "all") c = "";
    for (i=0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
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
