
function loadHeader() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    const heading = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const locs = document.createElement('a');
    
    heading.textContent = 'Chum Bucket';
    home.setAttribute('href', '/');
    home.textContent = 'Home';
    nav.appendChild(home);
    menu.setAttribute('href', '/');
    menu.textContent = 'Menu';
    nav.appendChild(menu);
    locs.setAttribute('href', '/');
    locs.textContent = 'Locations';
    nav.appendChild(locs);

    header.classList.add('header');
    header.appendChild(heading);
    header.appendChild(nav);

    content.appendChild(header);
}

export default loadHeader;