/*Abre e fecha Menu Lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click',() =>{

    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x","bi-list")
    body.classList.toggle("menu-nav-active")

})

/*Fecha o menu quando clica em algum item e muda o ícone para list */

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {

    item.addEventListener("click", ()=>{
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x","bi-list");
        }
    })

})

// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    console.log(windowTop)

item.forEach(Element=>{
    if (windowTop > Element.offsetTop){
        Element.classList.add('animate');
    } else {
        Element.classList.remove('animate');
    }
});
};

animeScroll()

window.addEventListener("scroll",()=>{
    animeScroll();
})