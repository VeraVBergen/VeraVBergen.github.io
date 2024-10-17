function createMenu() {
    const menu = document.createElement('ul');
    menu.className = 'menu';

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

    document.body.prepend(menu);
}

function addMenuItem(text, href) {
    const menu = document.querySelector('.menu');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    li.appendChild(a);
    menu.appendChild(li);
}

window.onload = () => {
    createMenu();
};