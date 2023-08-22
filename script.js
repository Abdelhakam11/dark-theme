var switcher= document.querySelector('.switch');
var nav= document.getElementById('nav');
var themeLogo= document.getElementById('theme-logo');
var toggleText= document.querySelector('.toggle-text');
var image1= document.getElementById('image1');
var image2= document.getElementById('image2');
var image3= document.getElementById('image3');
var textBox= document.getElementById('text-box');

function toggoleSwitcher(e) {
    if(e.target.checked){
        darkMode();  
    } else{
        lightMode();
    }
}

function darkMode(){
    document.documentElement.setAttribute('data-theme','dark');
    themeLogo.setAttribute('class','fas fa-moon');
    toggleText.innerHTML='Dark Mode';
    nav.style.backgroundColor=' rgb(9, 9, 9,0.6)';
    image1.setAttribute('src','img/undraw_proud_coder_dark.svg');
    image2.setAttribute('src','img/undraw_feeling_proud_dark.svg');
    image3.setAttribute('src','img/undraw_conceptual_idea_dark.svg');
    textBox.style.backgroundColor='rgb(137, 137, 137)';
}
function lightMode(){
    document.documentElement.setAttribute('data-theme','root');
    themeLogo.setAttribute('class','fas fa-sun');
    toggleText.innerHTML='Light Mode';
    nav.style.backgroundColor='transparent';
    image1.setAttribute('src','img/undraw_proud_coder_light.svg');
    image2.setAttribute('src','img/undraw_feeling_proud_light.svg');
    image3.setAttribute('src','img/undraw_conceptual_idea_light.svg');
}

switcher.addEventListener("change",toggoleSwitcher);