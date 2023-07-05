import loadHeader from "./header";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function loadListeners(){
    const content = document.querySelector('#content');
    const home = document.querySelector('.nav-home');
    const menu = document.querySelector('.nav-menu');
    const contact = document.querySelector('.nav-contact');

    home.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        loadHeader();
        loadHome();
        loadListeners();
    });

    menu.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        loadHeader();
        loadMenu();
        loadListeners();
    });

    contact.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        loadHeader();
        loadContact();
        loadListeners();
    });    
}

export default loadListeners;