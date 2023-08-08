import { createHome } from "./home";
import { createMenu } from "./menu";

function createHeader() {
    const rootDiv = document.getElementById("content");

    const header = document.createElement("header");

    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = "Chamas Tacos"
    header.appendChild(title)

    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.className = 'navBtn homeBtn';
    homeBtn.innerText = 'Home';
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActive(homeBtn);
        createHome();
    })
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.className = 'navBtn menuBtn';
    menuBtn.innerText = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActive(menuBtn);
        createMenu();
    })
    nav.appendChild(menuBtn);

    header.appendChild(nav);

    rootDiv.appendChild(header);
}

function setActive(button) {
    const buttons = document.querySelectorAll("nav>button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("div");
    main.classList.add("mainDiv");

    const rootDiv = document.getElementById("content");
    rootDiv.appendChild(main);
}

function initializeWebsite() {
    createHeader();
    createMain();
    createHome();
    setActive(document.querySelector(".homeBtn"));
}

export { initializeWebsite };
