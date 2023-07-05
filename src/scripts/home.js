
import bg from '../images/chum.png';

function loadHome(){
    const content = document.querySelector('#content');
    const home_container = document.createElement('div');
    home_container.classList.add('home-container');

    const chumImg = new Image();
    chumImg.src = bg;
    chumImg.classList.add('chumImg');
    home_container.append(chumImg);
    content.appendChild(home_container);
}

export default loadHome;