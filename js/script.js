const menu = document.getElementById("menu");
const act = document.getElementById("act");

menu.addEventListener("click", () => {
     handleMenu();

});

function handleMenu() {

    menu.classList.toggle("is-active");
    act.classList.toggle("is-active");

};
