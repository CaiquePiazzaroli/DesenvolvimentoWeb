const menuNavList = document.getElementById("menu-nav-list");
const buttonMenu = document.getElementById("button-menu");
const nav = document.querySelector(".nav");

buttonMenu.addEventListener("click", () => {
    if(menuNavList.style.display==""){
        menuNavList.style.display="flex";
        nav.classList.add("nav-enabled");
        console.log(menuNavList.style.display)
    } else {
        menuNavList.style.display="";
        nav.classList.remove("nav-enabled");
    }
})


window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        nav.classList.add("nav-Roll-Down");
    } else {
        nav.classList.remove("nav-Roll-Down");
    }
 })
