// Functie om het menu te maken en toe te voegen aan de body
function createMenu() {
    const menu = document.createElement('ul');
    menu.className = 'menu';

    // Huidige menu-items
    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Binair Stelsel', href: '/binair' },
        { text: 'Tamer Zijn Site', href: 'https://tctam.nl', style: 'margin-left:auto;' }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        if (item.style) {
            li.setAttribute('style', item.style);
        }
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        menu.appendChild(li);
    });

    document.body.prepend(menu); // Voeg het menu bovenaan de body toe
}

// Functie om een nieuw item aan het menu toe te voegen
function addMenuItem(text, href) {
    const menu = document.querySelector('.menu');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    li.appendChild(a);
    menu.appendChild(li);
}

// Menu aanmaken bij het laden van de pagina
window.onload = () => {
    createMenu();

    // Voeg hier nieuwe items toe aan het menu
    addMenuItem('Nieuw Item', '/nieuw'); // Voorbeeld van een nieuw item
};