const burger = document.getElementById('burger');
const container = document.getElementById('container');
const nav = document.getElementById('nav-bar');
const exit = document.getElementById('exit');

function navAppear (){
    burger.style.display = "none";
    // container.style.display = "none";
    exit.style.display = "block";
    nav.style.display = "flex";
    // nav.style.position = "relative";
    console.log('click undido');
};

function navDisappear (){
    burger.style.display = "block";
    // container.style.display = "none";
    exit.style.display = "none";
    nav.style.display = "none";
    console.log('click undido');
};

burger.onclick = navAppear;
exit.onclick = navDisappear;