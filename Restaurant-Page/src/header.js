import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {createContact} from "./contact.js";


export function createHeader(mainBody){
    let a = [];

    const header = document.createElement("div");
    header.classList.add("header");

    const home = document.createElement("div");
    home.classList.add("home");
    home.textContent = "Home";
    home.addEventListener("click", () => {
        createHome(mainBody);
    });

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.classList.add("menu");
    menu.addEventListener("click", () => {
        createMenu(mainBody);
    })

    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.textContent = "Contact";
    contact.addEventListener("click", () => {
        createContact(mainBody);
    });

    a.push(home);
    a.push(menu);
    a.push(contact);

    a.forEach(e =>{
        header.append(e);
    });

    mainBody.append(header);

    return a;
}