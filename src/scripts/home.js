
import bg from '../images/chum.png';

function loadHome(){
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.add('container');

    const chumBG = new Image();
    chumBG.src = bg;
    container.append(chumBG);
    const heading = document.createElement('h1');
    content.appendChild(container);

    heading.textContent = "AAAAAAAAAAAAAAA";
    content.appendChild(heading);

}

export default loadHome;