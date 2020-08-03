const burger = document.getElementById('burger');
const container = document.getElementById('container');
const nav = document.getElementById('nav-bar');
const exit = document.getElementById('exit');

// if(window.innerWidth > 600){
//     exit.style.display = "none";
// }

function navAppear (){
    burger.style.display = "none";
    // container.style.display = "none";
    exit.style.display = "block";
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    // nav.style.position = "relative";
    console.log('click undido');
};

function navDisappear (){
    burger.style.display = "";
    // container.style.display = "none";
    exit.style.display = "";
    nav.style.display = "";
    console.log('click undido');
};

function resize() {
    if (window.innerWidth >= 601){
        nav.style.display = "flex";
        nav.style.flexDirection = "row"; 
        exit.style.display = "none";
        // console.log(window.innerWidth);     
    } else{
        nav.style.display = "none";
        nav.style.flexDirection = "column"; 
        exit.style.display = "none";
        burger.style.display = "block"; 
        // console.log(window.innerWidth);  
    }
}


burger.onclick = navAppear;
exit.onclick = navDisappear;
window.onresize = resize;