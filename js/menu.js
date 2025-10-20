    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Fecha o menu quando clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });