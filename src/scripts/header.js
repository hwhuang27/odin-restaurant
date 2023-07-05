
function loadHeader() {
    const content = document.querySelector('#content');
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    const heading = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    
    heading.textContent = '🪣 The Chum Bucket 🪣';
    header.classList.add('header');
    header.appendChild(heading);
    header.appendChild(nav);

    home.classList.add('nav-home');
    home.setAttribute('href', '#');
    home.textContent = '🏠 Home';
    nav.appendChild(home);

    menu.classList.add('nav-menu');
    menu.setAttribute('href', '#');
    menu.textContent = '🂠 Menu';
    nav.appendChild(menu);

    contact.classList.add('nav-contact');
    contact.setAttribute('href', '#');
    contact.textContent = '📞 Contact';
    nav.appendChild(contact);

    content.appendChild(header);
}

export default loadHeader;