const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")


navBtn.addEventListener("click",function(){
    navBtn.classList.toggle("nav__btn--open")
    if(navBtn.classList.contains("nav__btn--open")){
        navMenu.classList.add("nav-menu--open")
    }else{
        navMenu.classList.remove("nav-menu--open")
    }
})