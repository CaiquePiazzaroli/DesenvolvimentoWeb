let menuIcon = document.querySelector(".container_nav > a");
let menubar = document.querySelector(".container1 > ul");
let containerNav = document.querySelector(".container1");
let imgMenuIcon =  document.querySelector(".container_nav > a > img");



menuIcon.addEventListener("click", () => {
    if(menubar.style.display ===""){
        menubar.style.display="flex";
        containerNav.classList.add("menu_opened");
        imgMenuIcon.src = "assets/close_menu_icon.png";

    } else { 
        menubar.style.display="";
        containerNav.classList.remove("menu_opened");
        imgMenuIcon.src = "assets/menu_icon.png";
    }
})