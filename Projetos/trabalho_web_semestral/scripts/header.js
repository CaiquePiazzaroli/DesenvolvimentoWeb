let menuIcon = document.querySelector(".container_nav_menu > a");
let menubar = document.querySelector(".container_nav_menu > ul");
let containerNav = document.querySelector(".container_nav");

menuIcon.addEventListener("click", () => {
    if(menubar.style.display ===""){
        menubar.style.display="block";
        containerNav.classList.add("background_black");
        menubar.classList.add("background_black");

    } else {    
        menubar.style.display="";
        containerNav.classList.remove("background_black");
        menubar.classList.remove("background_black");
    }
})