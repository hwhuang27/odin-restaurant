
function loadMenu() {
    const content = document.querySelector('#content');
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container');

    const list = document.createElement('ul');
    const burger = document.createElement('li');
    burger.textContent = '🍔 Chum Burger 🍔 ----- $4.99';
    list.appendChild(burger);

    const fries = document.createElement('li');
    fries.textContent = ' 🍟 Chum Fries 🍟 --------- $2.99';
    list.appendChild(fries);

    const shake  = document.createElement('li');
    shake.textContent = '🥤 Chum Shake 🥤 -------- $1.99';
    list.appendChild(shake);

    menu_container.append(list);
    content.appendChild(menu_container);
}

export default loadMenu;