const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

function closeMenu() {
    nav.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-label', 'Abrir menu');
}

if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('active');

        mobileMenu.classList.toggle('open', isOpen);
        mobileMenu.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });
}
