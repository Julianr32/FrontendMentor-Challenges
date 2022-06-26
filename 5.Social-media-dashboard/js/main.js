const toggleBtn = document.querySelector(".toggle-btn");

function lightMode() {
    document.documentElement.style.cssText = "--clr-bodybg: hsl(0, 0%, 100%); --clr-cardbg: hsl(227, 47%, 96%); --clr-headerbg: hsl(225, 100%, 98%); --clr-subtitle: hsl(228, 12%, 44%); --clr-title: hsl(230, 17%, 14%); ";
}

function darkMode() {
    document.documentElement.style.cssText = "--clr-bodybg:hsl(230, 17%, 14%); --clr-cardbg: hsl(228, 28%, 20%); --clr-headerbg:hsl(232, 19%, 15%); --clr-title:hsl(0, 0%, 100%); --clr-subtitle:hsl(228, 34%, 66%);"
}


toggleBtn.addEventListener("click", () => {
    if (toggleBtn.checked == true) {
        darkMode();
    } else {
        lightMode();
    }
});