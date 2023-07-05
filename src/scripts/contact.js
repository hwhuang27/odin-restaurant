
function loadContact() {
    const content = document.querySelector('#content');
    const contact_container = document.createElement('div');
    contact_container.classList.add('contact-container');

    const location = document.createElement('h1');
    location.textContent = 'Location';
    contact_container.appendChild(location);

    const location_text = document.createElement('p');
    location_text.textContent = 'Bottom Feeder Lane 🐟 \r\n Bikini Bottom 🌴';
    contact_container.appendChild(location_text);

    const phone = document.createElement('h1');
    phone.textContent = 'Telephone';
    contact_container.appendChild(phone);

    const phone_text = document.createElement('p');
    phone_text.textContent = '555-555-CHUM (2486)';
    contact_container.appendChild(phone_text);

    content.appendChild(contact_container);
}

export default loadContact;