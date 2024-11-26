/*
UPDATES:
1. Added code for changing themes.
*/

function hideSections() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
}

function showSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'block';
    }
}
  
const navLinks = document.querySelectorAll("#menu nav a");

navLinks.forEach(link =>{
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute("href").substring(1);

        hideSections();
        showSection(targetId);
    });
});

function changeTheme(){
    var link = document.getElementById("theme");
    let breaks = document.querySelectorAll("#break");

    let themeButton = document.getElementById("themeButton");
    if (themeButton.value == "OFF"){
        themeButton.value = "ON"
        link.href = "css/theme.css";
        breaks.forEach((breaker) => {
            breaker.src = "images/break-gold.png"
        });
    }
    else if(themeButton.value == "ON"){
        themeButton.value = "OFF"
        link.href = "css/main.css";
        breaks.forEach((breaker) => {
            breaker.src = "images/break.png"
        });
    }
}

let themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", changeTheme);
