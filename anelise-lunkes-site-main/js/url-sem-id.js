document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const id = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(id);

        if (!target) {
            return;
        }

        event.preventDefault();

        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });

        try {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (error) {
            // Some local file previews restrict History API updates.
        }
    });
});
