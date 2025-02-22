function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const themeSwitch = document.getElementById("icon")

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    
    if(document.body.classList.contains("dark")) {
        themeSwitch.src = "/assets/sun.png"
    }else{
        themeSwitch.src = "/assets/moon.png"
    }
})