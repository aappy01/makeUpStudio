var menuBtn = document.getElementById("menuBtn");
var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");

sidebar.style.right = "-250px";

menuBtn.onclick = function(){
    if(sidebar.style.right == "-250px"){
        sidebar.style.right = "0";
        menu.src = "./assets/close.png";
    }
    else{
        sidebar.style.right = "-250px";
        menu.src = "./assets/menu.png"
    }
}