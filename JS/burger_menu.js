if (window.matchMedia("(max-width: 950px)").matches) {
    const navElements = document.getElementsByTagName("nav");
    const nav = navElements[0]; // On ne veut que le premier nav
    const burger_button=document.getElementById("burger_button");
    const menu = document.getElementById("menu");
    const close_button=document.getElementById("close_button");
    burger_button.classList.add("visible");

    burger_button.addEventListener("click",()=>{
        close_button.classList.add("visible");
        close_button.classList.remove("hide");
        nav.classList.toggle("deroule");
        menu.classList.add("visible");
        burger_button.classList.add("hide");
        burger_button.classList.remove("visible")
    })



    close_button.addEventListener("click",()=>{
        nav.classList.remove("deroule");
        nav.classList.add("enroule");
        close_button.classList.add("hide");
        close_button.classList.remove("visible");
        burger_button.classList.remove("hide");
        burger_button.classList.add("visible");
        menu.classList.remove("visible");
    })

}