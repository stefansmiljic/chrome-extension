const button = document.querySelector(".openDashboardButton");
button.onclick = ()=>{
    window.open("dashboard.html");
};

// toggle mode coded bellow
/*const toggle = document.getElementById('darkModeToggle');

if(localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', ()=> {
    if(toggle.checked) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
})*/

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const updateTheme = () => {
    if(darkThemeMq.matches) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
};

updateTheme();
darkThemeMq.addEventListener('change', updateTheme);